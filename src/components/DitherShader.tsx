import {
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  useEffect,
  useRef,
} from "react"

export type PatternSource =
  | "warp"
  | "nebulaVeil"
  | "ridges"
  | "lava"
  | "sunCorona"
  | "smokeDiag"
  | "smoke"
  | "aurora"
  | "fluid"
  | "plasma"
  | "marble"
  | "flame"
export type DitherType = "random" | "2x2" | "4x4" | "8x8"
export type PerformanceMode = "high" | "balanced" | "low"
export type PerformanceStatus = "healthy" | "strained" | "heavy"

export interface DitherPerformanceMetrics {
  timestamp: number
  fps: number
  targetFps: number
  frameTimeMs: number
  frameBudgetMs: number
  cpuTimeMs: number
  gpuTimeMs: number | null
  loadPercent: number
  droppedFramesPercent: number
  resolutionScale: number
  nativeResolutionScale: number
  renderWidth: number
  renderHeight: number
  pixelCount: number
  performanceMode: PerformanceMode
  status: PerformanceStatus
}

export interface DitherShaderProps {
  className?: string
  style?: CSSProperties
  ariaLabel?: string
  source?: PatternSource
  dither?: DitherType
  foregroundColor?: string
  backgroundColor?: string
  size?: number
  speed?: number
  frame?: number
  scale?: number
  rotation?: number
  offsetX?: number
  offsetY?: number
  contrast?: number
  balance?: number
  opacity?: number
  enablePointerRipples?: boolean
  pointerRippleStrength?: number
  performanceMode?: PerformanceMode
  autoScaleResolution?: boolean
  pauseOffscreen?: boolean
  targetFps?: number
  performanceSampleInterval?: number
  onPerformance?: (metrics: DitherPerformanceMetrics) => void
  onError?: (message: string) => void
}

const VERTEX_SHADER = `#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

/*
  Twelve pattern sources are compiled in: "warp" for the services field,
  "nebulaVeil" and "ridges" for the hero, plus "lava", "sunCorona",
  "smokeDiag", "smoke", "aurora", "fluid", "plasma" and "marble" ported in
  from the showcase's DitherField.tsx, and "flame" authored here — the
  reference set has no fire in it, only lava crust and a solar disc.

  This shader used to carry a couple dozen unused pattern sources
  (raymarched shapes, voronoi cells, a country-mask texture pass, an
  image-dither pass) ported wholesale from the shared sharebrain lineage.
  None of that was reachable from any component in this repo, but every
  DitherShader instance still had to compile all of it, and under a
  software GL fallback (no KHR_parallel_shader_compile) that compile blocks
  the main thread — this was the multi-second hang on first paint. Pull
  another pattern from sharebrain's ordered-dither-shader skill if a future
  page needs one.
*/
const FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 outColor;

uniform vec2 u_resolution;
uniform vec2 u_offset;
uniform float u_time;
uniform float u_frame;
uniform float u_pixelRatio;
uniform float u_size;
uniform float u_scale;
uniform float u_rotation;
uniform float u_contrast;
uniform float u_balance;
uniform float u_pointerRippleStrength;
uniform vec3 u_foreground;
uniform vec3 u_background;
uniform int u_source;
uniform int u_dither;
uniform int u_enablePointerRipples;
uniform vec2 u_ripplePoints[4];
uniform float u_rippleAges[4];

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amplitude = 0.52;
  mat2 turn = mat2(0.80, -0.60, 0.60, 0.80);
  for (int i = 0; i < 5; i++) {
    sum += valueNoise(p) * amplitude;
    p = turn * p * 2.03 + 17.17;
    amplitude *= 0.5;
  }
  return sum;
}

float ridgedFbm(vec2 p) {
  float sum = 0.0;
  float amplitude = 0.55;
  mat2 turn = mat2(0.86, -0.51, 0.51, 0.86);
  for (int i = 0; i < 5; i++) {
    float ridge = 1.0 - abs(valueNoise(p) * 2.0 - 1.0);
    sum += ridge * ridge * amplitude;
    p = turn * p * 2.08 + 11.3;
    amplitude *= 0.5;
  }
  return sum;
}

/*
  Cheaper 3-octave fbm for call sites that stack many evaluations per pixel
  (iterated domain warps). Half the octaves of fbm() for roughly half the
  cost per call; visually indistinguishable once it is warped and dithered.
*/
float fbm3(vec2 p) {
  float sum = 0.0;
  float amplitude = 0.52;
  mat2 turn = mat2(0.80, -0.60, 0.60, 0.80);
  for (int i = 0; i < 3; i++) {
    sum += valueNoise(p) * amplitude;
    p = turn * p * 2.03 + 17.17;
    amplitude *= 0.5;
  }
  return sum;
}

/*
  Iterated domain warp. Feeding fbm back into its own input twice is what folds
  a field into the sheets and curls that ink in water makes; a single fbm call
  can only ever give you soft blobs no matter how you grade it.
*/
vec2 warp2(vec2 p, float time) {
  vec2 q = vec2(
    fbm3(p + vec2(0.0, time * 0.05)),
    fbm3(p + vec2(5.2, 1.3) - vec2(time * 0.04, 0.0))
  );
  vec2 r = vec2(
    fbm3(p + 3.4 * q + vec2(1.7, 9.2) + time * 0.025),
    fbm3(p + 3.4 * q + vec2(8.3, 2.8) - time * 0.02)
  );
  return p + 3.1 * r;
}

/*
  Same iterated domain warp as warp2(), but built on the full 5-octave fbm()
  instead of the cheaper fbm3(). The showcase authored "aurora" and "fluid"
  against the 5-octave fbm and they read differently (softer, less banded)
  off the 3-octave variant, so this is kept as its own helper under its own
  name rather than repointing warp2() at fbm() — nebulaVeil depends on
  warp2()'s existing fbm3-based behaviour to stay byte-identical.
*/
vec2 warp2Full(vec2 p, float time) {
  vec2 q = vec2(
    fbm(p + vec2(0.0, time * 0.05)),
    fbm(p + vec2(5.2, 1.3) - vec2(time * 0.04, 0.0))
  );
  vec2 r = vec2(
    fbm(p + 3.4 * q + vec2(1.7, 9.2) + time * 0.025),
    fbm(p + 3.4 * q + vec2(8.3, 2.8) - time * 0.02)
  );
  return p + 3.1 * r;
}

/*
  The filament transfer curve: folding the field around its mid level turns
  every place the field crosses that level into a bright thread, and raising
  it to a power thins those veins further.
*/
float filament(float f, float thinness, float mass) {
  float folded = 1.0 - abs(f * 2.0 - 1.0);
  float veins = pow(clamp(folded, 0.0, 1.0), thinness);
  return clamp(veins * (1.0 - mass) + smoothstep(0.34, 0.80, f) * mass, 0.0, 1.0);
}

float bayer2Raw(vec2 cell) {
  vec2 p = mod(cell, 2.0);
  if (p.y < 1.0) return p.x < 1.0 ? 0.0 : 2.0;
  return p.x < 1.0 ? 3.0 : 1.0;
}

float bayer4Raw(vec2 cell) {
  vec2 p = mod(cell, 4.0);
  float x = p.x;
  float y = p.y;
  if (y < 1.0) {
    if (x < 1.0) return 0.0;
    if (x < 2.0) return 8.0;
    if (x < 3.0) return 2.0;
    return 10.0;
  }
  if (y < 2.0) {
    if (x < 1.0) return 12.0;
    if (x < 2.0) return 4.0;
    if (x < 3.0) return 14.0;
    return 6.0;
  }
  if (y < 3.0) {
    if (x < 1.0) return 3.0;
    if (x < 2.0) return 11.0;
    if (x < 3.0) return 1.0;
    return 9.0;
  }
  if (x < 1.0) return 15.0;
  if (x < 2.0) return 7.0;
  if (x < 3.0) return 13.0;
  return 5.0;
}

float thresholdForCell(vec2 cell, int ditherType) {
  if (ditherType == 0) return mix(0.005, 0.995, hash21(cell + 71.31));
  if (ditherType == 1) return (bayer2Raw(cell) + 0.5) / 4.0;
  if (ditherType == 2) return (bayer4Raw(cell) + 0.5) / 16.0;
  float highBits = bayer2Raw(floor(mod(cell, 8.0) / 4.0));
  return (bayer4Raw(cell) * 4.0 + highBits + 0.5) / 64.0;
}

float sourcePattern(vec2 p, float time, int source) {
  if (source == 0) {
    vec2 q = vec2(
      fbm(p * 0.82 + vec2(time * 0.08, 0.0)),
      fbm(p * 0.82 + vec2(5.2, -time * 0.07))
    );
    vec2 r = vec2(
      fbm(p * 1.15 + q * 3.2 + vec2(1.7, 9.2) + time * 0.045),
      fbm(p * 1.15 + q * 3.2 + vec2(8.3, 2.8) - time * 0.04)
    );
    return fbm(p + r * 3.0);
  }

  if (source == 2) {
    float ridges = ridgedFbm(p * 1.35 + vec2(time * 0.018, -time * 0.012));
    float valleys = fbm(p * 0.62 - vec2(time * 0.01, 0.0));
    return smoothstep(0.24, 0.92, ridges * 0.88 + valleys * 0.22);
  }

  if (source == 3) {
    // Lava: ridged fbm's thin crest lines double as glowing veins once
    // sharpened with a high power and a slow pulse.
    float crust = ridgedFbm(p * 1.7 + vec2(-time * 0.008, time * 0.006));
    float veins = pow(clamp(crust, 0.0, 1.0), 4.5);
    float pulse = 0.7 + 0.3 * sin(time * 0.55);
    return clamp(veins * pulse * 1.6, 0.0, 1.0);
  }

  if (source == 4) {
    // Sun corona, after the SOHO and eclipse plates.
    //
    // Sampling noise on raw atan() is what makes a corona lopsided: the
    // angle jumps by a full turn across the -x axis, so the field has a
    // seam there and no rotational symmetry at all. Sampling on the unit
    // circle instead, fbm(vec2(cos, sin) * f), is periodic by construction,
    // so the corona closes evenly all the way round.
    //
    // The other half of looking right is structure: real coronae throw
    // long streamers near the equator and short brush-like plumes at the
    // poles, so reach is biased by latitude rather than being uniform.
    float r = length(p);
    float ang = atan(p.y, p.x);
    vec2 ring = vec2(cos(ang), sin(ang));
    float coreR = 0.15;

    float disc = 1.0 - smoothstep(coreR - 0.008, coreR, r);
    float rays = fbm(ring * 3.4 + vec2(0.0, time * 0.05));
    float fine = fbm(ring * 8.0 - vec2(time * 0.04, 0.0));
    // Equatorial streamers run long, polar plumes stay short.
    float equatorial = 0.3 + 0.7 * pow(abs(cos(ang)), 1.4);
    // Reach is expressed in units of coreR, not in absolute units, so the
    // corona's falloff stays proportional however the body is scaled.
    float reach = coreR * (0.45 + 1.7 * pow(clamp(rays, 0.0, 1.0), 1.8) * equatorial);
    float radial = exp(-max(r - coreR, 0.0) / max(reach, 0.02));
    float streamers = radial * (0.3 + 0.7 * fine);

    // The disc has to stay the brightest thing on screen, so the corona
    // sits well below it rather than competing.
    float collar = exp(-abs(r - coreR) * 20.0) * 0.55;
    return clamp(disc * 0.95 + streamers * 0.6 + collar, 0.0, 1.0);
  }

  if (source == 5) {
    // Smoke confined to a diagonal band, for a hero whose message column
    // sits on one side: the plume thins out before it reaches that side
    // instead of being cut by an opaque plate.
    //
    // The band runs top-left to bottom-right, which is the line x + y = 0 in
    // a frame with y up, so top-right and bottom-left fall away. Masking the
    // TONE before it reaches the Bayer threshold is the whole point: shading
    // it afterwards with a CSS gradient would lay smooth values over hard
    // 1-bit cells and break the material.
    vec2 rising = p * 1.7 - vec2(0.0, time * 0.16);
    float na = fbm(rising * 1.15 + vec2(1.3, -0.7));
    float nb = fbm(rising * 1.15 + vec2(-4.1, 2.6));
    vec2 curl = vec2(nb - 0.5, -(na - 0.5)) * 2.6;
    float dens = fbm(rising * 1.6 + curl);
    float wisps = fbm(rising * 4.0 + curl * 1.5) * 0.4;
    float body = smoothstep(0.58, 1.02, dens + wisps);
    float edges = filament(dens, 4.5, 0.0) * 0.2;

    // Normalise by scale so the band keeps its width whatever the zoom.
    float diag = (p.x + p.y) / max(u_scale, 0.001);
    float band = 1.0 - smoothstep(0.04, 0.42, abs(diag));

    float xn = p.x / max(u_scale, 0.001);
    float rightClear = 1.0 - smoothstep(0.06, 0.30, xn);
    return clamp((body * 0.9 + edges) * band * rightClear, 0.0, 1.0);
  }

  if (source == 6) {
    // Billowing smoke, filling the frame rather than climbing a narrow
    // column. The rolls come from advecting along a PERPENDICULAR gradient
    // pair, which approximates a curl field: flow that shears and tumbles
    // instead of merely sliding.
    vec2 rising = p * 1.7 - vec2(0.0, time * 0.16);
    float na = fbm(rising * 1.15 + vec2(1.3, -0.7));
    float nb = fbm(rising * 1.15 + vec2(-4.1, 2.6));
    vec2 curl = vec2(nb - 0.5, -(na - 0.5)) * 2.6;
    float dens = fbm(rising * 1.6 + curl);
    float wisps = fbm(rising * 4.0 + curl * 1.5) * 0.4;
    float body = smoothstep(0.30, 0.84, dens + wisps);
    float edges = filament(dens, 2.0, 0.0) * 0.35;
    float thinTop = 1.0 - smoothstep(0.3, 1.5, p.y) * 0.5;
    return clamp((body + edges) * thinTop, 0.0, 1.0);
  }

  if (source == 7) {
    // Aurora, running on a diagonal. The whole frame is rotated about 35
    // degrees before the bands are built, so the ribbons sweep across the
    // composition instead of hanging straight down like a shower curtain.
    float ca = 0.82;
    float sa = 0.57;
    vec2 g = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
    float fold = fbm(vec2(g.x * 1.2 + time * 0.045, g.y * 0.45));
    float ribbonA = sin((g.y * 2.3 + fold * 4.4 - time * 0.28) * 1.3) * 0.5 + 0.5;
    float ribbonB = sin((g.y * 3.9 + fold * 5.8 + time * 0.2) * 1.1) * 0.5 + 0.5;
    // Multiplying the bands by a warped field is what shreds them into
    // filaments; clean sine bands look like fabric, not plasma.
    float shred = fbm(warp2Full(g * 1.4, time) * 0.9);
    float glow = pow(ribbonA, 2.1) * 0.85 + pow(ribbonB, 3.0) * 0.5;
    glow *= 0.35 + 1.1 * shred;
    float fall = smoothstep(1.1, -0.9, g.y);
    return clamp(glow * fall * 1.3, 0.0, 1.0);
  }

  if (source == 8) {
    // Fluid: a doubly-warped field folded into sheets via the filament
    // curve, with a finer second pass for hair-thin detail -- reads as
    // pigment dispersing in liquid rather than as smoke.
    vec2 w = warp2Full(p * 1.8, time);
    float broad = fbm(w * 1.15);
    float fine = fbm(w * 3.4 + vec2(3.1, -1.4));
    float sheets = filament(broad, 8.0, 0.0);
    float threads = filament(fine, 14.0, 0.0) * 0.6;
    float masses = smoothstep(0.62, 0.87, broad) * 0.5;
    return clamp(sheets * 0.85 + threads + masses, 0.0, 1.0);
  }

  if (source == 9) {
    // Plasma: the classic demoscene sum-of-sines field. In the showcase this
    // is not a distinct authored scene -- it is literally that project's
    // per-source shader fallback body, reused here under its real name.
    float first = sin(p.x * 2.3 + time * 0.52);
    float second = sin(p.y * 2.8 - time * 0.44);
    float third = sin((p.x + p.y) * 2.1 + time * 0.35);
    return 0.5 + (first + second + third) / 6.0;
  }

  if (source == 10) {
    // Marble: sine bands displaced by fbm grain, the classic marbled-ink
    // look. 6.28318530718 is TAU (2*pi); inlined rather than macroed since
    // this is the only source that needs it.
    float grain = fbm(p * 1.9 + vec2(time * 0.055, -time * 0.035));
    return 0.5 + 0.5 * sin((p.x * 1.7 + grain * 1.8 + time * 0.12) * 6.28318530718);
  }

  if (source == 11) {
    // Flame.
    //
    // Authored, not ported: nothing in the reference set is fire. "lava" is
    // mottled crust seen from above and "sunCorona" is a disc, so neither reads
    // as a flame no matter how it is tuned.
    //
    // NOTE: no backticks in this block. The whole shader is a JS template
    // literal, so a backtick in a GLSL comment ends the string.
    //
    // Three things separate fire from smoke, and all three are needed:
    //
    //   1. The field is ADVECTED UPWARD -- time is subtracted from y, so detail
    //      travels up through the frame rather than drifting sideways.
    //   2. Detail rises FASTER than the body. Sampling a second, finer octave at
    //      a higher rise rate is what makes tips detach; one octave, however
    //      pretty, moves as a single sheet and reads as a curtain.
    //   3. The ignition THRESHOLD rises with height. This is the one that matters
    //      and the one that is easy to get wrong: the first attempt multiplied
    //      the density by a downward taper, which just dims a blob -- every
    //      pixel stays lit, only less so. Thresholding instead means that near
    //      the fuel almost any density ignites while near the tip only the
    //      strongest does, so the sheet BREAKS UP into separate licks that
    //      detach and die. Tongues come from the threshold, not from the noise.
    float rise = time * 1.2;
    float h01 = clamp(p.y * 0.5 + 0.5, 0.0, 1.0);

    // Sway grows with height: coherent at the fuel, loose at the tip. Swaying
    // the base as hard as the tip reads as a flag rather than a flame.
    float sway = sin(p.y * 2.1 - time * 1.5) * 0.30 * h01;

    vec2 body = vec2(p.x * 2.40 + sway, p.y * 0.50 - rise);
    vec2 tips = vec2(p.x * 4.60 + sway * 1.7, p.y * 1.00 - rise * 1.8);
    float density = fbm(body) * 0.66 + fbm(tips) * 0.44;

    // Horizontal envelope, necking in as the column climbs.
    float width = 1.0 - smoothstep(0.35, 1.30, abs(p.x) * (0.5 + h01 * 0.9));

    // Squared so the break-up accelerates toward the tip instead of easing in
    // linearly, which is what real flames do as they run out of fuel.
    float threshold = mix(0.50, 1.02, h01 * h01);
    return smoothstep(threshold, threshold + 0.14, density * width);
  }

  // Volumetric nebula study. Three differently-scaled warped densities are
  // intersected rather than simply added, which opens black voids between
  // the luminous sheets and keeps the result from becoming generic smoke.
  vec2 drift = vec2(time * 0.025, -time * 0.018);
  vec2 w0 = warp2(p * 0.72 + drift, time * 0.55);
  vec2 w1 = warp2(p * 1.18 - drift * 0.6 + vec2(4.7, -2.1), -time * 0.38);
  float broad = fbm3(w0 * 0.78);
  float folded = filament(fbm3(w1 * 1.22), 5.8, 0.12);
  float lace = filament(fbm3((w0 + w1) * 2.35), 11.0, 0.0);
  float chambers = smoothstep(0.42, 0.74, broad) * (0.46 + folded * 0.9);
  float voids = smoothstep(0.46, 0.72, fbm3(w0 * 0.43 + vec2(9.1, 3.4)));
  float vignette = 1.0 - smoothstep(0.72, 1.42, length(p * vec2(0.62, 1.0)));
  return clamp((chambers * (1.0 - voids * 0.72) + lace * 0.42) * vignette, 0.0, 1.0);
}

void main() {
  float pixelSize = max(1.0, floor(u_size * u_pixelRatio + 0.5));
  vec2 cell = floor(gl_FragCoord.xy / pixelSize);
  vec2 sampleUv = ((cell + 0.5) * pixelSize) / u_resolution;
  vec2 p = sampleUv - 0.5;
  p.x *= u_resolution.x / max(u_resolution.y, 1.0);

  float angle = radians(u_rotation);
  mat2 rotate = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  p = rotate * (p + u_offset) * u_scale;

  if (u_enablePointerRipples == 1) {
    for (int i = 0; i < 4; i++) {
      float age = u_rippleAges[i];
      if (age >= 0.0 && age < 3.4) {
        vec2 origin = u_ripplePoints[i] - 0.5;
        origin.x *= u_resolution.x / max(u_resolution.y, 1.0);
        origin = rotate * (origin + u_offset) * u_scale;
        vec2 delta = p - origin;
        float radius = length(delta);
        float front = age * 0.26;
        float envelope = exp(-abs(radius - front) * 24.0) * exp(-age * 0.72);
        p += normalize(delta + 0.0001) * sin((radius - front) * 58.0) * envelope * u_pointerRippleStrength * 0.06;
      }
    }
  }

  float tone = sourcePattern(p, u_time + u_frame, u_source);
  tone = clamp((tone - 0.5) * u_contrast + 0.5 + u_balance, 0.0, 1.0);
  float threshold = thresholdForCell(cell, u_dither);
  float ink = step(threshold, tone);
  vec3 color = mix(u_background, u_foreground, ink);
  outColor = vec4(color, 1.0);
}
`

const sourceValues: Record<PatternSource, number> = {
  warp: 0,
  nebulaVeil: 1,
  ridges: 2,
  lava: 3,
  sunCorona: 4,
  smokeDiag: 5,
  smoke: 6,
  aurora: 7,
  fluid: 8,
  plasma: 9,
  marble: 10,
  flame: 11,
}

const ditherValues: Record<DitherType, number> = {
  random: 0,
  "2x2": 1,
  "4x4": 2,
  "8x8": 3,
}

const defaultProps = {
  ariaLabel: "Animated two-color generative dithering shader",
  source: "warp" as PatternSource,
  dither: "4x4" as DitherType,
  foregroundColor: "#05b8f5",
  backgroundColor: "#020302",
  size: 6,
  speed: 0.75,
  frame: 0,
  scale: 2.1,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
  contrast: 1,
  balance: 0,
  opacity: 1,
  enablePointerRipples: true,
  pointerRippleStrength: 0.7,
  performanceMode: "balanced" as PerformanceMode,
  autoScaleResolution: true,
  pauseOffscreen: true,
  targetFps: 60,
  performanceSampleInterval: 2000,
  onPerformance: undefined as DitherShaderProps["onPerformance"],
}

type RuntimeProps = typeof defaultProps

interface Ripple {
  x: number
  y: number
  start: number
}

function parseColor(value: string): [number, number, number] {
  const hex = value.trim().replace("#", "")
  const normalized = hex.length === 3 ? [...hex].map((digit) => digit + digit).join("") : hex
  if (/^[0-9a-fA-F]{6}$/.test(normalized)) {
    return [0, 2, 4].map((offset) => Number.parseInt(normalized.slice(offset, offset + 2), 16) / 255) as [number, number, number]
  }
  return [0, 0, 0]
}

/*
  Nothing here asks the driver whether it is done.

  compileShader and linkProgram are cheap, they only queue work. The cost is in
  the status queries: getShaderParameter(COMPILE_STATUS) and
  getProgramParameter(LINK_STATUS) both block the main thread until the driver
  has finished translating and compiling the program. Profiling the scroll
  measured 13ms to 19ms in that one stall per field, which was the bulk of the
  jank. So queue the work here and collect the result in a later frame.
*/
function createShader(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) throw new Error("Could not create WebGL shader")
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader
}

interface PendingProgram {
  program: WebGLProgram
  vertex: WebGLShader
  fragment: WebGLShader
}

/** COMPLETION_STATUS_KHR, from KHR_parallel_shader_compile. */
const COMPLETION_STATUS_KHR = 0x91b1

/** Queues the compile and link. Returns immediately, nothing is ready yet. */
function startProgram(gl: WebGL2RenderingContext): PendingProgram {
  const program = gl.createProgram()
  if (!program) throw new Error("Could not create WebGL program")
  const vertex = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
  const fragment = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
  gl.attachShader(program, vertex)
  gl.attachShader(program, fragment)
  gl.linkProgram(program)
  return { program, vertex, fragment }
}

/**
 * Has the driver finished linking?
 *
 * Only meaningful with KHR_parallel_shader_compile, whose completion query is
 * the one status query that does not block. Without the extension there is no
 * way to ask without stalling, so report ready and take the stall.
 */
function programReady(gl: WebGL2RenderingContext, pending: PendingProgram, parallel: boolean) {
  if (!parallel) return true
  return gl.getProgramParameter(pending.program, COMPLETION_STATUS_KHR) as boolean
}

/** Collects the link result. Cheap once programReady has returned true. */
function finishProgram(gl: WebGL2RenderingContext, pending: PendingProgram) {
  const { program, vertex, fragment } = pending
  const linked = gl.getProgramParameter(program, gl.LINK_STATUS) as boolean
  /*
    Shader logs are read before the shaders are dropped, and only on failure.
    A shader that failed to compile always fails the link, so the two error
    paths collapse into this one and no extra status query is needed.
  */
  if (!linked) {
    const message =
      gl.getShaderInfoLog(vertex) ||
      gl.getShaderInfoLog(fragment) ||
      gl.getProgramInfoLog(program) ||
      "Unknown shader link error"
    gl.deleteShader(vertex)
    gl.deleteShader(fragment)
    gl.deleteProgram(program)
    throw new Error(message)
  }
  gl.deleteShader(vertex)
  gl.deleteShader(fragment)
  return program
}

function resolutionScale(mode: PerformanceMode) {
  if (mode === "high") return Math.min(window.devicePixelRatio, 2)
  if (mode === "low") return Math.min(window.devicePixelRatio, 0.75)
  return Math.min(window.devicePixelRatio, 1.25)
}

interface DisjointTimerQueryExtension {
  TIME_ELAPSED_EXT: number
  GPU_DISJOINT_EXT: number
}

function performanceStatus(
  fps: number,
  targetFps: number,
  scaleRatio: number,
  gpuLoadPercent: number | null,
): PerformanceStatus {
  if (fps < targetFps * 0.72 || scaleRatio < 0.72 || (gpuLoadPercent !== null && gpuLoadPercent > 85)) return "heavy"
  if (fps < targetFps * 0.9 || scaleRatio < 0.9 || (gpuLoadPercent !== null && gpuLoadPercent > 60)) return "strained"
  return "healthy"
}

export function DitherShader({ className, style, onError, ...incoming }: DitherShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const propsRef = useRef<RuntimeProps>({ ...defaultProps, ...incoming } as RuntimeProps)
  const onErrorRef = useRef(onError)
  const ripplesRef = useRef<Ripple[]>([])
  const runtimeProps = { ...defaultProps, ...incoming } as RuntimeProps

  useEffect(() => {
    propsRef.current = runtimeProps
  })
  onErrorRef.current = onError

  /*
    The WebGL renderer belongs to the canvas lifetime, not the callback identity.

    Shader passes an inline error handler, so depending on it rebuilt the context
    whenever the editor changed a control. Desktop compiled quickly enough to hide
    the swap; on phones the previous frame lingered while the replacement linked,
    which looked like two dither layers meeting at a seam.
  */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      powerPreference: "high-performance",
    })
    if (!gl) {
      onErrorRef.current?.("This component requires WebGL2, which is not available in this browser.")
      return
    }

    /*
      The link is started now and collected in a later frame.

      With KHR_parallel_shader_compile the driver links on its own threads and
      the completion query does not block, so the only main thread cost left at
      reveal time is creating the context. Without the extension there is no
      non blocking way to ask, so it falls back to the old synchronous path.
    */
    const parallel = gl.getExtension("KHR_parallel_shader_compile") !== null

    let pending: PendingProgram
    try {
      pending = startProgram(gl)
    } catch (error) {
      onErrorRef.current?.(error instanceof Error ? error.message : "Unable to initialize the dithering shader")
      return
    }

    let disposed = false
    let animationFrame = 0
    let release: (() => void) | null = null

    const begin = (program: WebGLProgram) => {
      const buffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
      gl.useProgram(program)
      const position = gl.getAttribLocation(program, "a_position")
      gl.enableVertexAttribArray(position)
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

      const uniform = (name: string) => gl.getUniformLocation(program, name)
      const uniforms = {
        resolution: uniform("u_resolution"),
        offset: uniform("u_offset"),
        time: uniform("u_time"),
        frame: uniform("u_frame"),
        pixelRatio: uniform("u_pixelRatio"),
        size: uniform("u_size"),
        scale: uniform("u_scale"),
        rotation: uniform("u_rotation"),
        contrast: uniform("u_contrast"),
        balance: uniform("u_balance"),
        pointerRippleStrength: uniform("u_pointerRippleStrength"),
        foreground: uniform("u_foreground"),
        background: uniform("u_background"),
        source: uniform("u_source"),
        dither: uniform("u_dither"),
        enablePointerRipples: uniform("u_enablePointerRipples"),
        ripplePoints: uniform("u_ripplePoints"),
        rippleAges: uniform("u_rippleAges"),
      }

      let visible = true
      let renderScale = resolutionScale(propsRef.current.performanceMode)
      let nextFrameAt = 0
      let sampleStart = performance.now()
      let sampleFrames = 0
      let sampleCpuTime = 0
      let latestGpuTime: number | null = null
      let gpuSampleCounter = 0
      const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      const timerExtension = gl.getExtension("EXT_disjoint_timer_query_webgl2") as DisjointTimerQueryExtension | null
      const pendingTimerQueries: WebGLQuery[] = []

      const resize = () => {
        const rect = canvas.getBoundingClientRect()
        const width = Math.max(1, Math.round(rect.width * renderScale))
        const height = Math.max(1, Math.round(rect.height * renderScale))
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width
          canvas.height = height
          gl.viewport(0, 0, width, height)
        }
      }

      const resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(canvas)
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
      })
      intersectionObserver.observe(canvas)

      const render = (now: number) => {
        animationFrame = requestAnimationFrame(render)
        const props = propsRef.current
        if (props.pauseOffscreen && !visible) return
        const frameInterval = 1000 / Math.max(1, props.targetFps)
        if (now < nextFrameAt) return
        if (nextFrameAt === 0 || now - nextFrameAt > frameInterval * 4) nextFrameAt = now + frameInterval
        else nextFrameAt += frameInterval
        renderScale = Math.min(renderScale, resolutionScale(props.performanceMode))
        resize()
        const cpuStart = performance.now()

        const frozenTime = reducedMotionQuery.matches
        const elapsed = frozenTime ? 0 : now / 1000
        const points = new Float32Array(8)
        const ages = new Float32Array([-1, -1, -1, -1])
        ripplesRef.current = ripplesRef.current.filter((ripple) => elapsed - ripple.start < 3.4)
        ripplesRef.current.slice(-4).forEach((ripple, index) => {
          points[index * 2] = ripple.x
          points[index * 2 + 1] = ripple.y
          ages[index] = elapsed - ripple.start
        })

        gl.useProgram(program)
        gl.uniform2f(uniforms.resolution, canvas.width, canvas.height)
        gl.uniform2f(uniforms.offset, props.offsetX, props.offsetY)
        gl.uniform1f(uniforms.time, elapsed * props.speed)
        gl.uniform1f(uniforms.frame, props.frame)
        gl.uniform1f(uniforms.pixelRatio, renderScale)
        gl.uniform1f(uniforms.size, props.size)
        gl.uniform1f(uniforms.scale, props.scale)
        gl.uniform1f(uniforms.rotation, props.rotation)
        gl.uniform1f(uniforms.contrast, props.contrast)
        gl.uniform1f(uniforms.balance, props.balance)
        gl.uniform1f(uniforms.pointerRippleStrength, props.pointerRippleStrength)
        gl.uniform3fv(uniforms.foreground, parseColor(props.foregroundColor))
        gl.uniform3fv(uniforms.background, parseColor(props.backgroundColor))
        gl.uniform1i(uniforms.source, sourceValues[props.source])
        gl.uniform1i(uniforms.dither, ditherValues[props.dither])
        gl.uniform1i(uniforms.enablePointerRipples, props.enablePointerRipples ? 1 : 0)
        gl.uniform2fv(uniforms.ripplePoints, points)
        gl.uniform1fv(uniforms.rippleAges, ages)
        let timerQuery: WebGLQuery | null = null
        if (timerExtension && gpuSampleCounter % 30 === 0 && pendingTimerQueries.length < 2) {
          timerQuery = gl.createQuery()
          if (timerQuery) gl.beginQuery(timerExtension.TIME_ELAPSED_EXT, timerQuery)
        }
        gl.drawArrays(gl.TRIANGLES, 0, 3)
        if (timerQuery && timerExtension) {
          gl.endQuery(timerExtension.TIME_ELAPSED_EXT)
          pendingTimerQueries.push(timerQuery)
        }
        gpuSampleCounter += 1

        const oldestQuery = pendingTimerQueries[0]
        if (oldestQuery && timerExtension && gl.getQueryParameter(oldestQuery, gl.QUERY_RESULT_AVAILABLE)) {
          const disjoint = gl.getParameter(timerExtension.GPU_DISJOINT_EXT) as boolean
          if (!disjoint) latestGpuTime = Number(gl.getQueryParameter(oldestQuery, gl.QUERY_RESULT)) / 1_000_000
          pendingTimerQueries.shift()
          gl.deleteQuery(oldestQuery)
        }

        sampleFrames += 1
        sampleCpuTime += performance.now() - cpuStart
        const sampleElapsed = now - sampleStart
        if (sampleElapsed >= Math.max(500, props.performanceSampleInterval)) {
          const fps = (sampleFrames * 1000) / sampleElapsed
          const baseScale = resolutionScale(props.performanceMode)
          if (props.autoScaleResolution) {
            if (fps < props.targetFps * 0.72) renderScale = Math.max(0.55, renderScale - 0.12)
            if (fps > props.targetFps * 0.94) renderScale = Math.min(baseScale, renderScale + 0.06)
          }
          const frameBudgetMs = 1000 / Math.max(1, props.targetFps)
          const scaleRatio = Math.min(1, renderScale / Math.max(0.01, baseScale))
          const droppedFramesPercent = Math.max(0, 100 * (1 - fps / Math.max(1, props.targetFps)))
          const cpuTimeMs = sampleCpuTime / Math.max(1, sampleFrames)
          const gpuLoadPercent = latestGpuTime === null ? null : latestGpuTime / frameBudgetMs * 100
          const fallbackLoad = Math.max(cpuTimeMs / frameBudgetMs * 100, droppedFramesPercent, (1 - scaleRatio) * 100)
          const metrics: DitherPerformanceMetrics = {
            timestamp: Date.now(),
            fps: Number(fps.toFixed(1)),
            targetFps: props.targetFps,
            frameTimeMs: Number((sampleElapsed / Math.max(1, sampleFrames)).toFixed(2)),
            frameBudgetMs: Number(frameBudgetMs.toFixed(2)),
            cpuTimeMs: Number(cpuTimeMs.toFixed(2)),
            gpuTimeMs: latestGpuTime === null ? null : Number(latestGpuTime.toFixed(2)),
            loadPercent: Number(Math.min(999, gpuLoadPercent ?? fallbackLoad).toFixed(1)),
            droppedFramesPercent: Number(Math.min(100, droppedFramesPercent).toFixed(1)),
            resolutionScale: Number(renderScale.toFixed(2)),
            nativeResolutionScale: Number(baseScale.toFixed(2)),
            renderWidth: canvas.width,
            renderHeight: canvas.height,
            pixelCount: canvas.width * canvas.height,
            performanceMode: props.performanceMode,
            status: performanceStatus(fps, props.targetFps, scaleRatio, gpuLoadPercent),
          }
          props.onPerformance?.(metrics)
          sampleFrames = 0
          sampleCpuTime = 0
          sampleStart = now
        }
      }

      resize()
      animationFrame = requestAnimationFrame(render)
      release = () => {
        cancelAnimationFrame(animationFrame)
        resizeObserver.disconnect()
        intersectionObserver.disconnect()
        pendingTimerQueries.forEach((query) => gl.deleteQuery(query))
        gl.deleteBuffer(buffer)
        gl.deleteProgram(program)
      }
    }

    const collect = () => {
      if (disposed) return
      if (!programReady(gl, pending, parallel)) {
        animationFrame = requestAnimationFrame(collect)
        return
      }
      let program: WebGLProgram
      try {
        program = finishProgram(gl, pending)
      } catch (error) {
        // finishProgram already dropped the program, so cleanup must not retry.
        release = () => {}
        onErrorRef.current?.(error instanceof Error ? error.message : "Unable to initialize the dithering shader")
        return
      }
      begin(program)
    }

    collect()

    return () => {
      disposed = true
      cancelAnimationFrame(animationFrame)
      if (release) release()
      else gl.deleteProgram(pending.program)
    }
  }, [])

  const addRipple = (x: number, y: number) => {
    if (!propsRef.current.enablePointerRipples) return
    ripplesRef.current = [...ripplesRef.current.slice(-3), { x, y, start: performance.now() / 1000 }]
  }

  const handlePointerDown = (event: PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    addRipple((event.clientX - rect.left) / rect.width, 1 - (event.clientY - rect.top) / rect.height)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLCanvasElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      addRipple(0.5, 0.5)
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        opacity: runtimeProps.opacity,
        background: runtimeProps.backgroundColor,
        imageRendering: "pixelated",
        cursor: runtimeProps.enablePointerRipples ? "crosshair" : "default",
        touchAction: "none",
        ...style,
      }}
      role="img"
      aria-label={runtimeProps.ariaLabel}
      tabIndex={runtimeProps.enablePointerRipples ? 0 : -1}
      onPointerDown={handlePointerDown}
      onKeyDown={handleKeyDown}
    />
  )
}
