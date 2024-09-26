/* eslint-disable no-constant-binary-expression */
import { performance } from "node:perf_hooks";
import classnames from "classnames";
import { clsx } from "clsx";
import { cx } from "classix";

import { cx as cxLocal } from "../dist/esm/classix.mjs";

const NB_RUN = 100_000_000;

function logResult(name, ms) {
  const millionsOfOpsPerSecond = ((NB_RUN * 1000) / ms / 1_000_000).toFixed(1);
  console.log(`${name}: ${millionsOfOpsPerSecond}M ops/s`);
}

// Repetition of code was used as to not affect performance
let start = 0;
let stop = 0;

start = performance.now();
for (let i = 0; i < NB_RUN; i++) {
  classnames("class-1", { "class-2": true });
}
stop = performance.now();
logResult("classnames (object)", stop - start);

//

start = performance.now();
for (let i = 0; i < NB_RUN; i++) {
  classnames("class-1", true && "class-2");
}
stop = performance.now();
logResult("classnames", stop - start);

//

start = performance.now();
for (let i = 0; i < NB_RUN; i++) {
  clsx("class-1", { "class-2": true });
}
stop = performance.now();
logResult("clsx (object)", stop - start);

//

start = performance.now();
for (let i = 0; i < NB_RUN; i++) {
  clsx("class-1", true && "class-2");
}
stop = performance.now();
logResult("clsx", stop - start);

//

start = performance.now();
for (let i = 0; i < NB_RUN; i++) {
  cx("class-1", true && "class-2");
}
stop = performance.now();
logResult("classix", stop - start);

//

start = performance.now();
for (let i = 0; i < NB_RUN; i++) {
  cxLocal("class-1", true && "class-2");
}
stop = performance.now();
logResult("classix (local)", stop - start);
