module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "import/no-unresolved": "off",
    camelcase: "warn",
    "simple-import-sort/sort": "warn",
    "sort-imports": "off",
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "warn",
    "import/no-absolute-path": "warn",
    "import/no-unused-modules": "warn",
    "import/no-deprecated": "warn",
    "import/no-self-import": "error",
    "max-len": ["warn", { code: 170, tabWidth: 2, ignoreUrls: true }],
  },
  overrides: [
    {
      files: "**/*.ts",
      rules: {
        "import/order": [
          "off",
          {
            "newlines-between": "always",
          },
        ],
      },
    },
  ],
};
