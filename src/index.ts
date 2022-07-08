export function cx(): string {
  let str = "",
    i = 0,
    arg: unknown,
    val: string | number;

  while (i < arguments.length) {
    if ((arg = arguments[i++])) {
      if (
        (val = typeof arg === "string" || typeof arg === "number" ? arg : "")
      ) {
        str && (str += " ");
        str += val;
      }
    }
  }
  return str;
}

export default cx;
