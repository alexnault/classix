import benchmark from "benchmark";
import classnames from "classnames";
import { clsx } from "clsx";
import { cx } from "classix";

import { cx as cxLocal } from "../dist/esm/classix.js";

new benchmark.Suite()
  .add("classnames", () => classnames("class1", true && "class2"))
  .add("clsx", () => clsx("class1", true && "class2"))
  .add("classix", () => cx("class1", true && "class2"))
  .add("classix (local)", () => cxLocal("class1", true && "class2"))
  .on("cycle", (event) => console.log(event.target.toString()))
  .run();
