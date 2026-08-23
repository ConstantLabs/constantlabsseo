/*
  One field boots at a time.

  Creating a WebGL2 context and linking the program is tens of milliseconds of
  main thread work. When two fields cross the reveal threshold in the same frame
  that cost stacks into one visible stall. This queue hands out one boot per idle
  slot, so the work lands between frames and never doubles up.

  The deadline matters more than the idleness. A field that never boots because
  the page never goes idle is a blank rectangle, which is why requestIdleCallback
  is given a timeout and Safari falls back to a short timer.
*/

function whenIdle(run: () => void) {
  const idle = (
    window as typeof window & {
      requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
    }
  ).requestIdleCallback;
  if (typeof idle === "function") {
    idle(run, { timeout: 500 });
    return;
  }
  window.setTimeout(run, 24);
}

const queue: Array<() => void> = [];
let pending = false;

function drain() {
  pending = false;
  const next = queue.shift();
  if (!next) return;
  next();
  if (queue.length) schedule();
}

function schedule() {
  if (pending) return;
  pending = true;
  whenIdle(drain);
}

export function requestBoot(boot: () => void) {
  queue.push(boot);
  schedule();
}

export function cancelBoot(boot: () => void) {
  const index = queue.indexOf(boot);
  if (index !== -1) queue.splice(index, 1);
}
