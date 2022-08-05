const benchmark = require("benchmark");
const classnames = require("classnames");
const { clsx } = require("clsx");
const { cx } = require("classix");

const { cx: cxLocal } = require("../dist/cjs/classix.js");

new benchmark.Suite()
  .add("classnames", () => classnames("class1", true && "class2"))
  .add("clsx", () => clsx("class1", true && "class2"))
  .add("classix", () => cx("class1", true && "class2"))
  .add("classix (local)", () => cxLocal("class1", true && "class2"))
  .on("cycle", (event) => console.log(event.target.toString()))
  .run();
