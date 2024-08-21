# React + Vite

- npm i -D eslint
- borrar eslint.config.js
- crear .eslint.cjs y agregar

  ``
  module.exports = {
  env: {
  browser: true,
  es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
  ecmaFeatures: {
  jsx: true,
  },
  ecmaVersion: "latest",
  sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
  };

``

- npm init @eslint/config
- npx eslint src/main.jsx
- instalar eslint extensión
- agregar en el .eslintrc.cjs extends: ["plugin:react/recommended", "standard", "plugin:react/jsx-runtime"],

- rules en eslintrc
  rules: {
  "no-unused-vars": "warn",
  },

- crear .prettierrc en la raíz y agregar

{
"semi": false,
"singleQuote": true,
"jsxSingleQuote": true,
"trailingComma": "none"
}

- install npm i -D eslint-config-prettier

crear .prettierignore en la raíz y agregar

dist
package-log.json

crear .eslintignore en la raíz y agregar

dist

-- agregar en el setting formatOnSave true y file
