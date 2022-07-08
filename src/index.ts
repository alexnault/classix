type Argument = string | boolean | number;

export function cx(...args: Argument[]): string {
  let str = "",
    i = 0,
    arg: unknown,
    val: string | number;

  while (i < args.length) {
    if ((arg = args[i++])) {
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
