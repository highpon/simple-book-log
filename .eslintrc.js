{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  "rules": {
    "import/order": [
      "warn",
      {
        "alphabetize": { "caseInsensitive": true, "order": "asc" },
        "groups": ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
        "pathGroups": [
          {
            "group": "builtin",
            "pattern": "react",
            "position": "before"
          },
          {
            "group": "builtin",
            "pattern": "next/**",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react", "next"]
      }
    ]
  }
}
