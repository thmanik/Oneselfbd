const path = require("path");

const buildNextLintCommand = (filenames) =>
  `next lint --fix --no-cache --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

// Function to build Prettier command
const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, buildNextLintCommand],
  "*.{js,jsx,ts,tsx,css,json,md}": [buildPrettierCommand],
};
