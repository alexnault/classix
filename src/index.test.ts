import cx from "./index";

describe("cx", () => {
  it("undefined", () => {
    expect(cx()).toBe("");
    // @ts-expect-error Testing outside of types
    expect(cx(undefined)).toBe("");
  });

  it("null", () => {
    // @ts-expect-error Testing outside of types
    expect(cx(null)).toBe("");
  });

  it("string", () => {
    expect(cx("")).toBe("");
    expect(cx("foo")).toBe("foo");
    expect(cx("foo bar")).toBe("foo bar");
    expect(cx("foo", "bar")).toBe("foo bar");
    expect(cx("foo bar", "foo2 bar2")).toBe("foo bar foo2 bar2");
  });

  it("boolean", () => {
    expect(cx(true)).toBe("");
    expect(cx(false)).toBe("");

    expect(cx(true && "foo")).toBe("foo");
    expect(cx(false && "foo")).toBe("");

    expect(cx("foo", true && "bar")).toBe("foo bar");
    expect(cx("foo", false && "bar")).toBe("foo");

    expect(cx(true ? "foo" : "bar")).toBe("foo");
    expect(cx(false ? "foo" : "bar")).toBe("bar");

    expect(cx("foo", true ? "bar1" : "bar2")).toBe("foo bar1");
    expect(cx("foo", false ? "bar1" : "bar2")).toBe("foo bar2");
  });

  it("number", () => {
    expect(cx(7)).toBe("7");
  });

  it("object", () => {
    // @ts-expect-error Testing outside of types
    expect(cx({})).toBe("");
    // @ts-expect-error Testing outside of types
    expect(cx({ foo: "bar" })).toBe("");
  });

  it("array", () => {
    // @ts-expect-error Testing outside of types
    expect(cx([])).toBe("");
    // @ts-expect-error Testing outside of types
    expect(cx(["foo"])).toBe("");
    // @ts-expect-error Testing outside of types
    expect(cx([[["foo"]]])).toBe("");
  });

  it("function", () => {
    // @ts-expect-error Testing outside of types
    expect(cx(() => "")).toBe("");
  });
});
