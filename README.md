![Banner](media/banner.jpg)

# classix

![NPM version](https://img.shields.io/npm/v/classix?style=flat-square)
![Build](https://img.shields.io/github/actions/workflow/status/alexnault/classix/ci-and-publish.yml?branch=main&style=flat-square)
![Test coverage](https://img.shields.io/codecov/c/github/alexnault/classix?style=flat-square)
![Monthly downloads](https://img.shields.io/npm/dm/classix?style=flat-square)

The [fastest](#performance) and [tiniest](#size) utility for conditionally joining classNames.

## Installation

```bash
npm install classix
```

## Usage

Use any amount of string expressions and classix will join them like so:

```js
import cx from "classix";
// or
import { cx } from "classix";

cx("class1", "class2");
// => "class1 class2"

cx("class1 class2", "class3", "class4 class5");
// => "class1 class2 class3 class4 class5"

cx("class1", true && "class2");
// => "class1 class2"

cx(false && "class1", "class2");
// => "class2"

cx(true ? "class1" : "class2");
// => "class1"

cx("class1", false ? "class2" : "class3");
// => "class1 class3"

cx(...["class1", "class2", "class3"]);
// => class1 class2 class3

cx(
  "flex",
  isPrimary ? "bg-primary-100" : "bg-secondary-100",
  isLarge ? "m-4 p-4" : "m-2 p-2"
);
// => "flex bg-primary-100 m-2 p-2" *assuming isPrimary is true and isLarge is false
```

## Comparison

Compared to other libraries, classix only allows string expressions as arguments:

```js
// 🚫
clsx({ "class-1": isPrimary });
// ✅
cx(isPrimary && "class-1");

// 🚫
clsx({ "class-1": isPrimary && isLarge, "class-2": !isPrimary || !isLarge });
// ✅
cx(isPrimary && isLarge ? "class-1" : "class-2");
```

String expressions have a few benefits over objects:

- A faster typing experience
- A more intuitive syntax (conditions first)
- `else` support through ternary operators

What's more, by leveraging them, classix provides:

- A simpler and consistent API
- [A smaller library size](#size)
- [Better performance](#performance)

### Size

![Size comparison chart](media/size.png)

Sources: [classix](https://bundlejs.com/api?q=classix), [clsx](https://bundlejs.com/api?q=clsx), [classnames](https://bundlejs.com/api?q=classnames)

### Performance

![Performance comparison chart](media/perf.png)

Sources: Ran [benchmark](benchmark/) on an AMD Ryzen 5 5600x.

## Highlights

- Supports all major browsers
- Supports all versions of Node.js
- Works with both ES Modules and CommonJS
- Zero dependencies
- Fully typed with TypeScript
- Fully tested
- [Semver](https://semver.org/) compliant

## Migrating to classix

If you are using `classnames` or `clsx`, you can migrate to `classix` by changing your `imports`:

```diff
- import classnames from 'classnames';
+ import cx from 'classix';
```

And if you were using object arguments, you'll have to convert them to string arguments:

```diff
- classnames({ 'class-1': cond1, 'class-2': cond2 });
+ cx(cond1 && 'class-1', cond2 && 'class-2')
```

That's it!

## Some love ❤️

> "This looks great. I agree that the object notation is not great and not worth the perf hit." — @jmeistrich

> "It looks good! I like the idea that you can’t pass objects and is simple and minimal. I will use it on my next application instead of classnames." — @m0ment98

> "Thank you for creating and maintaining this package! It is great." — @charkour

## Changelog

For a list of changes and releases, see the [changelog](https://github.com/alexnault/classix/releases).

## Contributing

Found a bug, have a question or looking to improve classix? Open an [issue](https://github.com/alexnault/classix/issues/new), start a [discussion](https://github.com/alexnault/classix/discussions/new) or submit a [PR](https://github.com/alexnault/classix/fork)!
