// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "i18next", "react"],
  root: true,
  rules: {
    "i18next/no-literal-string": [
      "error",
      { markupOnly: true, ignoreAttribute: ["data-testid", "to"] },
    ],
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        "i18next/no-literal-string": 'off',
      }
    }
  ]
};
