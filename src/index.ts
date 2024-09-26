export type Argument = string | boolean | null | undefined;

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

  for (; i < arguments.length; ) {
    // eslint-disable-next-line prefer-rest-params
    if ((arg = arguments[i++]) && typeof arg === "string") {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      str && (str += " ");
      str += arg;
    }
  }
  return str;
}

export { cx };
export default cx;
