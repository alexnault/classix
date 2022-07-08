const { Suite } = require("benchmark");
const classnames = require("classnames");
const clsx = require("clsx");

const cx = require("../dist/index.js").default;

const args = ["class1", "class2", false && "class3", true && "class4"];

new Suite()
  .add("classnames", () => classnames(...args))
  .add("clsx", () => clsx(...args))
  .add("cx", () => cx(...args))
  .on("cycle", (event) => console.log(event.target.toString()))
  .run();
