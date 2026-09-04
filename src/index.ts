export type ClassName = string | boolean | null | undefined;

type FilterStrings<T extends readonly unknown[]> = T extends readonly [
  infer F,
  ...infer R,
]
  ? F extends string
    ? [F, ...FilterStrings<R>]
    : FilterStrings<R>
  : [];

type JoinStrings<T extends readonly string[]> = T extends readonly [
  infer F,
  ...infer R,
]
  ? F extends string
    ? R extends readonly string[]
      ? R["length"] extends 0
        ? F
        : `${F} ${JoinStrings<R>}`
      : F
    : never
  : "";

/**
 * Conditionally join classNames into a single string
 * @param {...String} args The expressions to evaluate
 * @returns {String} The joined classNames
 */
function cx<T extends readonly ClassName[]>(
  ...args: T
): JoinStrings<FilterStrings<T>>;
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
