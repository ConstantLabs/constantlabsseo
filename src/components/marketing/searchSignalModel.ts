export interface SignalPoint {
  x: number;
  clicks: number;
  impressions: number;
}

const clamp = (value: number) => Math.min(1, Math.max(0, value));

function createRandom(seed: number) {
  let state = seed >>> 0 || 1;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

/** Builds normalized search-performance signals for presentation-only charts. */
export function buildSignalSeries(seed = 17, count = 32): SignalPoint[] {
  const length = Math.max(1, Math.floor(count));
  const random = createRandom(seed);

  return Array.from({ length }, (_, index) => {
    const x = length === 1 ? 0 : index / (length - 1);
    const growth = 0.09 + 0.67 * Math.pow(x, 1.55) + 0.11 * x;
    const noise = (random() - 0.5) * (0.07 - 0.035 * x);
    const clicks = clamp(growth + noise);
    const visibilityLift = 0.13 + 0.09 * (1 - x) + random() * 0.035;

    return {
      x,
      clicks,
      impressions: clamp(Math.max(clicks, clicks + visibilityLift)),
    };
  });
}
