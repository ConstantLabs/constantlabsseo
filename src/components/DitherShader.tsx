import {
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  useEffect,
  useRef,
} from "react"
import { countryPolygons, type CountryMask } from "@/lib/countryMasks"

export type PatternSource =
  | "simplex"
  | "warp"
  | "dots"
  | "wave"
  | "ripple"
  | "swirl"
  | "plasma"
  | "marble"
  | "cells"
  | "terrain"
  | "sphere"
  | "torus"
  | "tunnel"
  | "metaballs"
  | "cube"
  | "contours"
  | "ridges"
  | "dunes"
  | "islands"
  | "strata"
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
  countryMask?: CountryMask
  countryScale?: number
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
uniform float u_countryScale;
uniform float u_pointerRippleStrength;
uniform vec3 u_foreground;
uniform vec3 u_background;
uniform int u_source;
uniform int u_dither;
uniform int u_enablePointerRipples;
uniform int u_useCountryMask;
uniform sampler2D u_countryTexture;
uniform vec2 u_ripplePoints[4];
uniform float u_rippleAges[4];

#define TAU 6.28318530718

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

float voronoi(vec2 p) {
  vec2 base = floor(p);
  vec2 local = fract(p);
  float closest = 8.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 cell = vec2(float(x), float(y));
      vec2 point = vec2(hash21(base + cell), hash21(base + cell + 41.7));
      closest = min(closest, length(cell + point - local));
    }
  }
  return closest;
}

mat2 rotate2d(float angle) {
  return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

float shapeSdf(vec3 p, float time, int shapeType) {
  p.xz = rotate2d(time * 0.42) * p.xz;
  p.xy = rotate2d(time * 0.27) * p.xy;
  if (shapeType == 0) {
    vec2 torus = vec2(length(p.xz) - 0.72, p.y);
    return length(torus) - 0.23;
  }
  vec3 box = abs(p) - vec3(0.66);
  return length(max(box, 0.0)) + min(max(box.x, max(box.y, box.z)), 0.0);
}

float raymarchedShape(vec2 uv, float time, int shapeType) {
  vec3 rayOrigin = vec3(0.0, 0.0, 3.2);
  vec3 rayDirection = normalize(vec3(uv * 0.92, -1.85));
  float travel = 0.0;
  float distanceToShape = 0.0;
  bool hit = false;
  for (int i = 0; i < 48; i++) {
    vec3 position = rayOrigin + rayDirection * travel;
    distanceToShape = shapeSdf(position, time, shapeType);
    if (abs(distanceToShape) < 0.0025) {
      hit = true;
      break;
    }
    travel += max(distanceToShape, 0.001) * 0.78;
    if (travel > 6.0) break;
  }
  if (!hit) return 0.0;

  vec3 position = rayOrigin + rayDirection * travel;
  float epsilon = 0.004;
  vec3 normal = normalize(vec3(
    shapeSdf(position + vec3(epsilon, 0.0, 0.0), time, shapeType) - shapeSdf(position - vec3(epsilon, 0.0, 0.0), time, shapeType),
    shapeSdf(position + vec3(0.0, epsilon, 0.0), time, shapeType) - shapeSdf(position - vec3(0.0, epsilon, 0.0), time, shapeType),
    shapeSdf(position + vec3(0.0, 0.0, epsilon), time, shapeType) - shapeSdf(position - vec3(0.0, 0.0, epsilon), time, shapeType)
  ));
  vec3 light = normalize(vec3(-0.55, 0.72, 0.65));
  float diffuse = dot(normal, light) * 0.5 + 0.5;
  float rim = pow(1.0 - max(0.0, dot(normal, -rayDirection)), 2.2);
  return clamp(diffuse * 0.78 + rim * 0.48, 0.0, 1.0);
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
    return fbm(p * 1.25 + vec2(time * 0.10, -time * 0.07));
  }

  if (source == 1) {
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
    vec2 grid = p * 2.15 + vec2(time * 0.10, sin(time * 0.18) * 0.15);
    vec2 dotUv = fract(grid) - 0.5;
    float radius = 0.22 + 0.13 * sin(time * 0.7 + floor(grid.x) * 0.6 + floor(grid.y) * 0.8);
    return 1.0 - smoothstep(radius, radius + 0.24, length(dotUv));
  }

  if (source == 3) {
    float warp = sin(p.y * 2.4 - time * 0.8) * 0.42 + sin(p.y * 4.7 + time * 0.43) * 0.15;
    return 0.5 + 0.5 * sin((p.x + warp) * TAU * 0.82 + time * 0.62);
  }

  if (source == 4) {
    vec2 origin = vec2(sin(time * 0.21), cos(time * 0.17)) * 0.18;
    float radius = length(p - origin);
    float distortion = fbm(p * 1.65 - time * 0.04) * 0.55;
    return 0.5 + 0.5 * sin((radius * 3.15 + distortion - time * 0.34) * TAU);
  }

  if (source == 5) {
    float radius = length(p);
    float angle = atan(p.y, p.x);
    float organic = fbm(p * 1.55 + vec2(time * 0.035, -time * 0.045));
    float angularTurns = angle / TAU;
    float spiral = radius * 3.2 - angularTurns * 2.0 + organic * 2.15 - time * 0.36;
    return smoothstep(-0.78, 0.82, sin(spiral * TAU));
  }

  if (source == 6) {
    float first = sin(p.x * 2.3 + time * 0.52);
    float second = sin(p.y * 2.8 - time * 0.44);
    float third = sin((p.x + p.y) * 2.1 + time * 0.35);
    return 0.5 + (first + second + third) / 6.0;
  }

  if (source == 7) {
    float grain = fbm(p * 1.9 + vec2(time * 0.055, -time * 0.035));
    return 0.5 + 0.5 * sin((p.x * 1.7 + grain * 1.8 + time * 0.12) * TAU);
  }

  if (source == 8) {
    float cells = voronoi(p * 2.4 + vec2(time * 0.11, -time * 0.07));
    return 1.0 - smoothstep(0.12, 0.78, cells);
  }

  if (source == 9) {
    float elevation = fbm(p * 1.18 + vec2(time * 0.018, -time * 0.024));
    float contour = fract(elevation * 7.0);
    return mix(elevation, smoothstep(0.38, 0.54, contour), 0.58);
  }

  if (source == 10) {
    vec2 sphereUv = p * 0.82;
    float radiusSquared = dot(sphereUv, sphereUv);
    if (radiusSquared > 1.0) return 0.0;
    float z = sqrt(max(0.0, 1.0 - radiusSquared));
    vec3 normal = normalize(vec3(sphereUv, z));
    vec3 light = normalize(vec3(cos(time * 0.55), sin(time * 0.42), 0.72));
    float diffuse = dot(normal, light) * 0.5 + 0.5;
    float latitude = sin((normal.y * 2.7 + normal.x * 0.55 + time * 0.18) * TAU) * 0.12;
    return clamp(diffuse + latitude, 0.0, 1.0);
  }

  if (source == 11) return raymarchedShape(p, time, 0);

  if (source == 12) {
    float radius = max(0.035, length(p));
    float angle = atan(p.y, p.x);
    float depth = 1.0 / radius + time * 0.72;
    float spokes = sin(angle * 8.0 + sin(depth * 0.45));
    float rings = sin(depth * 2.6);
    return smoothstep(-0.48, 0.64, spokes * 0.42 + rings * 0.76);
  }

  if (source == 13) {
    vec2 a = vec2(sin(time * 0.52), cos(time * 0.41)) * 0.48;
    vec2 b = vec2(cos(time * 0.37), sin(time * 0.63)) * 0.52;
    vec2 c = vec2(sin(time * 0.29 + 2.2), cos(time * 0.47 + 1.4)) * 0.44;
    float field = 0.16 / (dot(p - a, p - a) + 0.035);
    field += 0.15 / (dot(p - b, p - b) + 0.035);
    field += 0.13 / (dot(p - c, p - c) + 0.035);
    float surface = smoothstep(0.72, 1.9, field);
    float highlight = smoothstep(1.25, 3.1, field) * 0.36;
    return clamp(surface - highlight, 0.0, 1.0);
  }

  if (source == 14) return raymarchedShape(p, time, 1);

  if (source == 15) {
    float elevation = fbm(p * 1.28 + vec2(time * 0.012, -time * 0.016));
    float line = abs(fract(elevation * 11.0) - 0.5) * 2.0;
    float major = abs(fract(elevation * 3.0) - 0.5) * 2.0;
    return max(1.0 - smoothstep(0.035, 0.16, line), (1.0 - smoothstep(0.035, 0.10, major)) * 0.72);
  }

  if (source == 16) {
    float ridges = ridgedFbm(p * 1.35 + vec2(time * 0.018, -time * 0.012));
    float valleys = fbm(p * 0.62 - vec2(time * 0.01, 0.0));
    return smoothstep(0.24, 0.92, ridges * 0.88 + valleys * 0.22);
  }

  if (source == 17) {
    float wind = fbm(p * 0.72 + vec2(time * 0.024, 0.0));
    float dune = sin((p.x * 1.35 + p.y * 0.34 + wind * 1.75 - time * 0.08) * TAU);
    float secondary = sin((p.x * 2.7 - p.y * 0.22 + wind * 0.7 + time * 0.045) * TAU) * 0.22;
    return smoothstep(-0.72, 0.88, dune + secondary);
  }

  if (source == 18) {
    vec2 drift = vec2(sin(time * 0.07), cos(time * 0.055)) * 0.08;
    float elevation = fbm((p + drift) * 1.42) * 0.88 + ridgedFbm(p * 0.58) * 0.22;
    float falloff = length(p * vec2(0.82, 1.0)) * 0.48;
    float coast = elevation - falloff;
    return smoothstep(0.18, 0.72, coast);
  }

  float geology = fbm(vec2(p.x * 1.15, p.y * 0.42) + vec2(time * 0.016, 0.0));
  float foldedY = p.y + geology * 1.08 + sin(p.x * 1.7 + time * 0.08) * 0.18;
  float layers = sin(foldedY * TAU * 2.65);
  return smoothstep(-0.68, 0.78, layers);
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
  if (u_useCountryMask == 1) {
    vec2 maskUv = sampleUv;
    maskUv.x = (maskUv.x - 0.5) * (u_resolution.x / max(u_resolution.y, 1.0)) + 0.5;
    maskUv = (maskUv - 0.5) / max(0.2, u_countryScale) + 0.5;
    float country = texture(u_countryTexture, maskUv).r;
    ink *= step(0.5, country);
  }
  vec3 color = mix(u_background, u_foreground, ink);
  outColor = vec4(color, 1.0);
}
`

const sourceValues: Record<PatternSource, number> = {
  simplex: 0,
  warp: 1,
  dots: 2,
  wave: 3,
  ripple: 4,
  swirl: 5,
  plasma: 6,
  marble: 7,
  cells: 8,
  terrain: 9,
  sphere: 10,
  torus: 11,
  tunnel: 12,
  metaballs: 13,
  cube: 14,
  contours: 15,
  ridges: 16,
  dunes: 17,
  islands: 18,
  strata: 19,
}

const ditherValues: Record<DitherType, number> = {
  random: 0,
  "2x2": 1,
  "4x4": 2,
  "8x8": 3,
}

const defaultProps = {
  ariaLabel: "Animated two-color generative dithering shader",
  source: "swirl" as PatternSource,
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
  countryMask: "none" as CountryMask,
  countryScale: 1,
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
  Rasterised masks are cached for the lifetime of the page.

  createCountryCanvas fills a 1024x1024 canvas from the full polygon set on the
  main thread, and it is called from inside the render loop whenever the mask
  changes. Uncached, switching region cost a ~240ms long task and dropped
  frames. The set of masks is tiny and fixed, so just keep them.
*/
const countryCanvasCache = new Map<Exclude<CountryMask, "none">, HTMLCanvasElement>()

function createCountryCanvas(mask: Exclude<CountryMask, "none">) {
  const cached = countryCanvasCache.get(mask)
  if (cached) return cached
  const size = 1024
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext("2d")
  if (!context) throw new Error("Could not create country mask canvas")
  context.clearRect(0, 0, size, size)
  context.fillStyle = "#ffffff"
  for (const ring of countryPolygons[mask]) {
    context.beginPath()
    ring.forEach(([x, y], index) => {
      if (index === 0) context.moveTo(x * size, y * size)
      else context.lineTo(x * size, y * size)
    })
    context.closePath()
    context.fill()
  }
  countryCanvasCache.set(mask, canvas)
  return canvas
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
        countryScale: uniform("u_countryScale"),
        pointerRippleStrength: uniform("u_pointerRippleStrength"),
        foreground: uniform("u_foreground"),
        background: uniform("u_background"),
        source: uniform("u_source"),
        dither: uniform("u_dither"),
        enablePointerRipples: uniform("u_enablePointerRipples"),
        useCountryMask: uniform("u_useCountryMask"),
        countryTexture: uniform("u_countryTexture"),
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
      let activeCountryMask: CountryMask = "none"
      const timerExtension = gl.getExtension("EXT_disjoint_timer_query_webgl2") as DisjointTimerQueryExtension | null
      const pendingTimerQueries: WebGLQuery[] = []
      const countryTexture = gl.createTexture()
      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, countryTexture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]))

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

        const elapsed = now / 1000
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
        gl.uniform1f(uniforms.countryScale, props.countryScale)
        gl.uniform1f(uniforms.pointerRippleStrength, props.pointerRippleStrength)
        gl.uniform3fv(uniforms.foreground, parseColor(props.foregroundColor))
        gl.uniform3fv(uniforms.background, parseColor(props.backgroundColor))
        gl.uniform1i(uniforms.source, sourceValues[props.source])
        gl.uniform1i(uniforms.dither, ditherValues[props.dither])
        gl.uniform1i(uniforms.enablePointerRipples, props.enablePointerRipples ? 1 : 0)
        gl.uniform1i(uniforms.useCountryMask, props.countryMask === "none" ? 0 : 1)
        if (props.countryMask !== activeCountryMask && props.countryMask !== "none") {
          activeCountryMask = props.countryMask
          gl.activeTexture(gl.TEXTURE0)
          gl.bindTexture(gl.TEXTURE_2D, countryTexture)
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, createCountryCanvas(props.countryMask))
        }
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, countryTexture)
        gl.uniform1i(uniforms.countryTexture, 0)
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
        gl.deleteTexture(countryTexture)
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


