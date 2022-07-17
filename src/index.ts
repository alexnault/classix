type Argument = string | boolean | number;

/**
 * Conditionally join classNames into a single string
 * @param {...String} args The expressions to evaluate
 * @returns {String} The joined classNames
 */
function cx(...args: Argument[]): string;
function cx(): string {
  let str = "",
    i = 0,
    arg: unknown;

  while (i < arguments.length) {
    if (
      (arg = arguments[i++]) &&
      (typeof arg === "string" || typeof arg === "number")
    ) {
      str && (str += " ");
      str += arg;
    }
  }
  return str;
}

export { cx };
export default cx;
