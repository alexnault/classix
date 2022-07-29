module.exports = [
  {
    name: "CJS Minified",
    path: "dist/cjs/*.js",
    gzip: false,
    limit: "233B",
  },
  {
    name: "CJS Compressed",
    path: "dist/cjs/*.js",
    limit: "166B",
  },
  {
    name: "ESM Minified",
    path: "dist/esm/*.js",
    gzip: false,
    limit: "134B",
  },
  {
    name: "ESM Compressed",
    path: "dist/esm/*.js",
    limit: "107B",
  },
];
