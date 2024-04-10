module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": "off", // Desactiva la validación de prop-types
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    indent: ["error", 2], // Indentación de 2 espacios
    semi: ["error", "always"], // Punto y coma al final de cada instrucción
    quotes: ["error", "double"], // Comillas dobles para strings
    "comma-spacing": "error", // Espacio después de las comas
    "comma-style": ["error", "last"], // Comas al final de la línea
    "no-multi-spaces": "error", // No se permiten múltiples espacios en blanco
    "no-trailing-spaces": "error", // No se permiten espacios en blanco al final de las líneas
    "space-before-blocks": "error", // Espacio antes de los bloques de código
  },
};
