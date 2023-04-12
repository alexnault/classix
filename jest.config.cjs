/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
