import benchmark from "benchmark";
import classnames from "classnames";
import clsx from "clsx";

import cx from "../dist/index.js";

const args = ["class1", "class2", false && "class3", true && "class4"];

new benchmark.Suite()
  .add("classnames", () => classnames(...args))
  .add("clsx", () => clsx(...args))
  .add("cx", () => cx(...args))
  .on("cycle", (event) => console.log(event.target.toString()))
  .run();
