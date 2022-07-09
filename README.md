# classix

## Installation

```bash
npm install classix
```

## Usage

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

cx(
  "flex",
  isPrimary ? "bg-primary-100" : "bg-secondary-100",
  isLarge ? "m-4 p-4" : "m-2 py-2"
);
// => "flex bg-primary-100 m-2 p-2" *assuming isPrimary is true and isLarge is false
```

## Highlights

- Fast
- Under 1 kB minified & gzipped
- Typed with TypeScript
- Fully tested
- Zero dependencies
- Follows [semantic versioning](https://semver.org/)

## API

TODO

## Changelog

For a list of changes and releases, see the [changelog](https://github.com/alexnault/classix/releases).

## Contributing

Found a bug, have a question or looking to improve classix? Open an [issue](https://github.com/alexnault/classix/issues/new), start a [discussion](https://github.com/alexnault/classix/discussions/new) or submit a [PR](https://github.com/alexnault/classix/fork)!
