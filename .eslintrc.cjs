module.exports = {
  // Indica el entorno de ejecución
  env: {
    browser: true,
    es2021: true,
  },
  // Parser para Astro
  parser: "astro-eslint-parser",
  parserOptions: {
    // Indica dónde buscará el parser los archivos Astro
    parser: "@babel-eslint/parser", // O `babel-eslint` si usas JS
    extraFileExtensions: [".astro"],
  },
  plugins: [
    "astro",
  ],
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended", // Reglas específicas para Astro
  ],
  rules: {
    // Personaliza las reglas según tus preferencias
    "no-unused-vars": "warn",
  },
};
