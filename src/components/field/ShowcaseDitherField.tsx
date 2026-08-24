import { type CSSProperties, useEffect, useRef, useState } from "react";
import type { DitherType, PatternSource, PerformanceMode } from "@/components/DitherShader";
import { cancelBoot, requestBoot } from "@/components/field/bootQueue";
import type { SectionFieldEntry, SectionKey } from "@/components/field/fieldRegistry";
import { useSectionField } from "@/components/field/fieldRegistryStore";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  style?: CSSProperties;
  section?: SectionKey;
  variant?: keyof SectionFieldEntry;
  foreground?: string;
  background?: string;
  source?: PatternSource;
  dither?: DitherType;
  cellSize?: number;
  speed?: number;
  scale?: number;
  rotation?: number;
  contrast?: number;
  balance?: number;
  scrim?: number;
  performanceMode?: PerformanceMode;
  autoScaleResolution?: boolean;
  targetFps?: number;
};

const DITHERS: Record<DitherType, number> = { random: 0, "2x2": 1, "4x4": 2, "8x8": 3 };
const SOURCES: Record<PatternSource, number> = {
  warp: 0, nebulaVeil: 1, ridges: 2, lava: 3, sunCorona: 4, smokeDiag: 5,
  smoke: 6, aurora: 7, fluid: 8, plasma: 9, marble: 10, flame: 11,
};

/*
  Where in its own cycle a source is when the page opens.

  `u_time` is `performance.now()`, so without this every field opens at t≈0 --
  and for nebulaVeil t≈0 is the single thinnest moment it ever has. Measured by
  rendering the shader below at the hero's own settings and counting lit cells,
  sweeping t from 0 to 200:

              t≈0-3   t≈50   t≈145   t≈180   t≈115-125
    desktop    7.7%   28.0%   30.2%   46.9%    10%
    mobile     6.7%   40.5%   23.7%   47.5%     7%
                ^                       ^
             the floor              the wash

  Three warped densities are INTERSECTED rather than added (see `source == 1`),
  and at t=0 they sit unwarped and near-aligned, so the intersection is almost
  all void -- outlines, no sheets. The field spends its first minute climbing
  out of a hole nobody should have been shown.

  145 is the crest worth opening on, not the 180 peak: at 180 the coverage is
  ~47% and the hero turns into the even grey wash fieldProfiles.ts warns about
  for exactly this section, with the headline fighting the field. At 145 the
  luminous sheets have formed and the frame is still mostly black, which is the
  contrast the hero is built on.

  Two things this is NOT. It is not a per-refresh seed -- it is one pinned
  number, so every visitor opens on the same frame, same as every other value
  in this system. And it is not a fix for the slow beat itself: the field still
  drifts into the dense plateau about forty seconds in, and back down to a
  trough after that. That beat is the shader's, and moving where it starts is a
  different job from flattening it.
*/
const SOURCE_PHASE: Partial<Record<PatternSource, number>> = {
  nebulaVeil: 145,
};

const VERTEX = `#version 300 es
in vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`;

const FRAGMENT = `#version 300 es
precision highp float;
out vec4 outColor;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_pixelRatio;
uniform float u_size;
uniform float u_scale;
uniform float u_rotation;
uniform float u_contrast;
uniform float u_balance;
uniform vec3 u_foreground;
uniform vec3 u_background;
uniform int u_source;
uniform int u_dither;

float hash21(vec2 p) {
  p = mod(p, 128.0);
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1, 0)), f.x),
             mix(hash21(i + vec2(0, 1)), hash21(i + vec2(1)), f.x), f.y);
}
float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.52;
  mat2 turn = mat2(0.80, -0.60, 0.60, 0.80);
  for (int i = 0; i < 5; i++) {
    sum += noise2(p) * amp;
    p = turn * p * 2.03 + 17.17;
    amp *= 0.5;
  }
  return sum;
}
float ridged(vec2 p) {
  float sum = 0.0;
  float amp = 0.55;
  mat2 turn = mat2(0.86, -0.51, 0.51, 0.86);
  for (int i = 0; i < 5; i++) {
    float ridge = 1.0 - abs(noise2(p) * 2.0 - 1.0);
    sum += ridge * ridge * amp;
    p = turn * p * 2.08 + 11.3;
    amp *= 0.5;
  }
  return sum;
}
vec2 warp2(vec2 p, float time) {
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
float filament(float f, float thinness, float mass) {
  float folded = 1.0 - abs(f * 2.0 - 1.0);
  float veins = pow(clamp(folded, 0.0, 1.0), thinness);
  return clamp(veins * (1.0 - mass) + smoothstep(0.34, 0.80, f) * mass, 0.0, 1.0);
}
float bayer2(vec2 cell) {
  vec2 p = mod(cell, 2.0);
  if (p.y < 1.0) return p.x < 1.0 ? 0.0 : 2.0;
  return p.x < 1.0 ? 3.0 : 1.0;
}
float bayer4(vec2 cell) {
  vec2 p = mod(cell, 4.0);
  float x = p.x;
  float y = p.y;
  if (y < 1.0) {
    if (x < 1.0) return 0.0; if (x < 2.0) return 8.0;
    if (x < 3.0) return 2.0; return 10.0;
  }
  if (y < 2.0) {
    if (x < 1.0) return 12.0; if (x < 2.0) return 4.0;
    if (x < 3.0) return 14.0; return 6.0;
  }
  if (y < 3.0) {
    if (x < 1.0) return 3.0; if (x < 2.0) return 11.0;
    if (x < 3.0) return 1.0; return 9.0;
  }
  if (x < 1.0) return 15.0; if (x < 2.0) return 7.0;
  if (x < 3.0) return 13.0; return 5.0;
}
float threshold(vec2 cell, int kind) {
  if (kind == 0) return mix(0.005, 0.995, hash21(cell + 71.31));
  if (kind == 1) return (bayer2(cell) + 0.5) / 4.0;
  if (kind == 2) return (bayer4(cell) + 0.5) / 16.0;
  float high = bayer2(floor(mod(cell, 8.0) / 4.0));
  return (bayer4(cell) * 4.0 + high + 0.5) / 64.0;
}
float pattern(vec2 p, float t, int source) {
  if (source == 0) {
    vec2 q = vec2(fbm(p * 0.82 + vec2(t * 0.08, 0)), fbm(p * 0.82 + vec2(5.2, -t * 0.07)));
    return fbm(p + q * 3.0);
  }
  if (source == 1) {
    vec2 drift = vec2(t * 0.025, -t * 0.018);
    vec2 w0 = warp2(p * 0.72 + drift, t * 0.55);
    vec2 w1 = warp2(p * 1.18 - drift * 0.6 + vec2(4.7, -2.1), -t * 0.38);
    float broad = fbm(w0 * 0.78);
    float folded = filament(fbm(w1 * 1.22), 5.8, 0.12);
    float lace = filament(fbm((w0 + w1) * 2.35), 11.0, 0.0);
    float chambers = smoothstep(0.42, 0.74, broad) * (0.46 + folded * 0.9);
    float voids = smoothstep(0.46, 0.72, fbm(w0 * 0.43 + vec2(9.1, 3.4)));
    float vignette = 1.0 - smoothstep(0.72, 1.42, length(p * vec2(0.62, 1.0)));
    return clamp((chambers * (1.0 - voids * 0.72) + lace * 0.42) * vignette, 0.0, 1.0);
  }
  if (source == 2) {
    float a = ridged(p * 1.35 + vec2(t * 0.018, -t * 0.012));
    float b = fbm(p * 0.62 - vec2(t * 0.01, 0));
    return smoothstep(0.24, 0.92, a * 0.88 + b * 0.22);
  }
  if (source == 3) return pow(clamp(ridged(p * 1.7 + vec2(-t * 0.008, t * 0.006)), 0.0, 1.0), 4.5);
  if (source == 4) {
    float r = length(p);
    float rays = fbm(normalize(p + vec2(0.0001)) * 5.0 + vec2(t * 0.03));
    return clamp(1.0 - smoothstep(0.12, 0.19, r) + exp(-max(r - 0.16, 0.0) * (8.0 + rays * 12.0)) * rays, 0.0, 1.0);
  }
  if (source == 5) return smoothstep(0.42, 0.78, fbm(p * 1.8 - vec2(0, t * 0.12))) * (1.0 - smoothstep(0.08, 0.5, abs(p.x + p.y)));
  if (source == 6) return smoothstep(0.34, 0.82, fbm(p * 1.65 - vec2(0, t * 0.14)));
  if (source == 7) {
    float w = fbm(p * 1.1 + vec2(t * 0.025));
    return pow(sin((p.y + p.x * 0.55 + w * 1.8 - t * 0.16) * 3.2) * 0.5 + 0.5, 2.2);
  }
  if (source == 8) return pow(1.0 - abs(fbm(p * 1.8 + vec2(t * 0.03, -t * 0.02)) * 2.0 - 1.0), 7.0);
  if (source == 9) return 0.5 + (sin(p.x * 2.3 + t * 0.52) + sin(p.y * 2.8 - t * 0.44) + sin((p.x + p.y) * 2.1 + t * 0.35)) / 6.0;
  if (source == 10) return 0.5 + 0.5 * sin((p.x * 1.7 + fbm(p * 1.9 + vec2(t * 0.04)) * 1.8 + t * 0.12) * 6.2831853);
  return smoothstep(0.34, 0.82, fbm(vec2(p.x * 2.0, p.y * 1.25 - t * 0.18)) + (0.35 - p.y) * 0.24);
}
void main() {
  float pixelSize = max(1.0, floor(u_size * u_pixelRatio + 0.5));
  vec2 cell = floor(gl_FragCoord.xy / pixelSize);
  vec2 uv = ((cell + 0.5) * pixelSize) / u_resolution - 0.5;
  uv.x *= u_resolution.x / max(u_resolution.y, 1.0);
  float angle = radians(u_rotation);
  vec2 p = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * uv * u_scale;
  float tone = pattern(p, u_time, u_source);
  tone = clamp((tone - 0.5) * u_contrast + 0.5 + u_balance, 0.0, 1.0);
  float ink = step(threshold(cell, u_dither), tone);
  outColor = vec4(mix(u_background, u_foreground, ink), 1.0);
}
`;

function rgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const value = clean.length === 3 ? clean.split("").map((x) => x + x).join("") : clean;
  const parsed = Number.parseInt(value, 16);
  if (!Number.isFinite(parsed)) return [1, 1, 1];
  return [((parsed >> 16) & 255) / 255, ((parsed >> 8) & 255) / 255, (parsed & 255) / 255];
}

function compile(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Unable to create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    throw new Error("Shader compilation failed");
  }
  return shader;
}

export function ShowcaseDitherField({
  className, style, section, variant = "desktop", foreground, background = "#020101",
  source, dither, cellSize, speed, scale, rotation, contrast, balance, scrim,
  performanceMode, autoScaleResolution, targetFps,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const redrawRef = useRef<(() => void) | null>(null);
  const [ready, setReady] = useState(false);
  const entry = useSectionField(section);
  const tuned = entry?.[variant];
  const enabled = tuned?.enabled ?? true;
  const settings = {
    source: source ?? tuned?.source ?? "ridges",
    dither: dither ?? tuned?.dither ?? "4x4",
    foreground: foreground ?? tuned?.ink ?? "#A8702B",
    background,
    cellSize: cellSize ?? tuned?.cellSize ?? 1,
    speed: speed ?? tuned?.speed ?? 1,
    scale: scale ?? tuned?.scale ?? 3.3,
    rotation: rotation ?? tuned?.rotation ?? 0,
    contrast: contrast ?? tuned?.contrast ?? 1.88,
    balance: balance ?? tuned?.balance ?? -0.48,
    scrim: scrim ?? tuned?.scrim ?? 0,
    performanceMode: performanceMode ?? tuned?.performanceMode ?? "balanced",
    autoScaleResolution: autoScaleResolution ?? tuned?.autoScaleResolution ?? false,
    targetFps: targetFps ?? tuned?.targetFps ?? 60,
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    if (!enabled) {
      setReady(false);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    let gl: WebGL2RenderingContext | null = null;
    let program: WebGLProgram | null = null;
    let vao: WebGLVertexArrayObject | null = null;
    let buffer: WebGLBuffer | null = null;
    let frame = 0;
    let nextFrameAt = 0;
    let previousFrameAt = 0;
    let adaptiveScale = 1;
    let slowFrames = 0;
    let stableFrames = 0;
    let visible = true;
    let disposed = false;
    let painted = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const boot = () => {
      if (disposed) return;
      gl = canvas.getContext("webgl2", { alpha: false, antialias: false, powerPreference: "low-power" });
      if (!gl) return;
      try {
        const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
        const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
        program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vertex);
        gl.attachShader(program, fragment);
        gl.linkProgram(program);
        gl.deleteShader(vertex);
        gl.deleteShader(fragment);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
        vao = gl.createVertexArray();
        buffer = gl.createBuffer();
        if (!vao || !buffer) return;
        gl.bindVertexArray(vao);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        const position = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      } catch {
        return;
      }
      const uniform = (name: string) => gl?.getUniformLocation(program as WebGLProgram, name) ?? null;
      const u = {
        resolution: uniform("u_resolution"), time: uniform("u_time"), ratio: uniform("u_pixelRatio"),
        size: uniform("u_size"), scale: uniform("u_scale"), rotation: uniform("u_rotation"),
        contrast: uniform("u_contrast"), balance: uniform("u_balance"),
        foreground: uniform("u_foreground"), background: uniform("u_background"),
        source: uniform("u_source"),
        dither: uniform("u_dither"),
      };
      const render = (now: number) => {
        if (disposed || !gl || !program) return;
        const current = settingsRef.current;
        const interval = 1000 / Math.max(1, current.targetFps);
        if (!reducedMotion && now < nextFrameAt) {
          frame = requestAnimationFrame(render);
          return;
        }
        nextFrameAt = now + interval;
        const elapsed = previousFrameAt ? now - previousFrameAt : interval;
        previousFrameAt = now;
        if (current.autoScaleResolution) {
          if (elapsed > interval * 1.45) {
            slowFrames += 1;
            stableFrames = 0;
          } else {
            stableFrames += 1;
            slowFrames = Math.max(0, slowFrames - 1);
          }
          if (slowFrames >= 20) {
            adaptiveScale = Math.max(0.5, adaptiveScale - 0.125);
            slowFrames = 0;
          } else if (stableFrames >= 120) {
            adaptiveScale = Math.min(1, adaptiveScale + 0.125);
            stableFrames = 0;
          }
        } else {
          adaptiveScale = 1;
          slowFrames = 0;
          stableFrames = 0;
        }
        const rect = canvas.getBoundingClientRect();
        const deviceRatio = window.devicePixelRatio || 1;
        const baseRatio = current.performanceMode === "high"
          ? Math.min(deviceRatio, 2)
          : current.performanceMode === "low"
            ? Math.min(deviceRatio, 0.75)
            : Math.min(deviceRatio, 1.25);
        const ratio = Math.max(0.5, baseRatio * adaptiveScale);
        const width = Math.max(1, Math.round(rect.width * ratio));
        const height = Math.max(1, Math.round(rect.height * ratio));
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
        }
        canvas.dataset.resolutionScale = ratio.toFixed(3);
        gl.useProgram(program);
        gl.uniform2f(u.resolution, width, height);
        gl.uniform1f(u.time, now / 1000 * current.speed + (SOURCE_PHASE[current.source] ?? 0));
        gl.uniform1f(u.ratio, ratio);
        gl.uniform1f(u.size, current.cellSize);
        gl.uniform1f(u.scale, current.scale);
        gl.uniform1f(u.rotation, current.rotation);
        gl.uniform1f(u.contrast, current.contrast);
        gl.uniform1f(u.balance, current.balance);
        gl.uniform3fv(u.foreground, rgb(current.foreground));
        gl.uniform3fv(u.background, rgb(current.background));
        gl.uniform1i(u.source, SOURCES[current.source]);
        gl.uniform1i(u.dither, DITHERS[current.dither]);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        if (!painted) {
          painted = true;
          setReady(true);
        }
        if (!reducedMotion && visible && !document.hidden) frame = requestAnimationFrame(render);
      };
      const restart = () => {
        cancelAnimationFrame(frame);
        if (visible && !document.hidden) render(performance.now());
      };
      redrawRef.current = restart;
      const observer = new IntersectionObserver(([item]) => {
        visible = item.isIntersecting;
        if (visible) restart();
        else cancelAnimationFrame(frame);
      }, { rootMargin: "160px" });
      const resizeObserver = new ResizeObserver(restart);
      observer.observe(canvas);
      resizeObserver.observe(canvas);
      document.addEventListener("visibilitychange", restart);
      render(performance.now());
      return () => {
        observer.disconnect();
        resizeObserver.disconnect();
        document.removeEventListener("visibilitychange", restart);
      };
    };
    let disconnect: (() => void) | undefined;
    const queuedBoot = () => { disconnect = boot(); };
    requestBoot(queuedBoot);
    return () => {
      cancelBoot(queuedBoot);
      disposed = true;
      redrawRef.current = null;
      cancelAnimationFrame(frame);
      disconnect?.();
      if (buffer) gl?.deleteBuffer(buffer);
      if (vao) gl?.deleteVertexArray(vao);
      if (program) gl?.deleteProgram(program);
    };
  }, [enabled]);

  useEffect(() => {
    redrawRef.current?.();
  }, [
    settings.background, settings.balance, settings.cellSize, settings.contrast,
    settings.dither, settings.foreground, settings.performanceMode, settings.rotation,
    settings.scale, settings.source, settings.speed, settings.targetFps, settings.autoScaleResolution,
  ]);

  if (!enabled) return null;
  return (
    <div
      aria-hidden="true"
      data-testid="showcase-dither-field"
      data-hero-dither="showcase"
      data-dither-source={settings.source}
      data-dither-type={settings.dither}
      data-dither-scale={settings.scale}
      data-dither-ink={settings.foreground}
      data-dither-resolution={settings.performanceMode}
      data-dither-auto-scale={settings.autoScaleResolution}
      className={cn("relative isolate overflow-hidden", className)}
      style={{ backgroundColor: background, ...style }}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-300",
          ready ? "opacity-100" : "opacity-0",
        )}
      />
      {settings.scrim > 0 ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: background, opacity: Math.min(1, Math.max(0, settings.scrim)) }}
        />
      ) : null}
    </div>
  );
}
