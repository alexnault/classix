import { performance } from "node:perf_hooks";
import classnames from "classnames";
import { clsx } from "clsx";
import { cx } from "classix";

import { cx as cxLocal } from "../dist/esm/classix.mjs";

function logResult(name, ms) {
  const millionsOfOpsPerSecond = (
    (100_000_000 * 1000) /
    ms /
    1_000_000
  ).toFixed(1);
  console.log(`${name}: ${millionsOfOpsPerSecond}M ops/s`);
}

// Repetition of code was used as to not affect performance
function benchClassnamesObject() {
  const start = performance.now();
  for (let i = 0; i < 100_000_000; i++) {
    classnames("class-1", { "class-2": true });
  }
  const stop = performance.now();
  logResult("classnames (object)", stop - start);
}

function benchClassnames() {
  const start = performance.now();
  for (let i = 0; i < 100_000_000; i++) {
    classnames("class-1", true && "class-2");
  }
  const stop = performance.now();
  logResult("classnames", stop - start);
}

function benchClsxObject() {
  const start = performance.now();
  for (let i = 0; i < 100_000_000; i++) {
    clsx("class-1", { "class-2": true });
  }
  const stop = performance.now();
  logResult("clsx (object)", stop - start);
}

function benchClsx() {
  const start = performance.now();
  for (let i = 0; i < 100_000_000; i++) {
    clsx("class-1", true && "class-2");
  }
  const stop = performance.now();
  logResult("clsx", stop - start);
}

function benchClassix() {
  const start = performance.now();
  for (let i = 0; i < 100_000_000; i++) {
    cx("class-1", true && "class-2");
  }
  const stop = performance.now();
  logResult("classix", stop - start);
}

function benchClassixLocal() {
  const start = performance.now();
  for (let i = 0; i < 100_000_000; i++) {
    cxLocal("class-1", true && "class-2");
  }
  const stop = performance.now();
  logResult("classix (local)", stop - start);
}

benchClassnamesObject();
benchClassnames();
benchClsxObject();
benchClsx();
benchClassix();
benchClassixLocal();
