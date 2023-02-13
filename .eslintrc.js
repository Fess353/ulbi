// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "i18next", "react"],
  root: true,
  rules: {
    "i18next/no-literal-string": ['error', {markupOnly: true}] //только в jsx
  }
};
