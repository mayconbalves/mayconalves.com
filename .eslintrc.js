module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "root": true,
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "ignorePatterns": ["**/*.js", "gatsby-browser.tsx", "gatsby-node.ts", "gatsby-config.ts"],
  "rules": {
    "max-len": ["error", { "code": 100 }],
    "linebreak-style": ["error", "unix"],
    "space-before-function-paren": ["error", "never"],
    "indent": ["error", 2],
    "no-anonymous-exports-page-templates": "off",
    "limited-exports-page-templates": "off",
    "trailingComma": "off",
    "semi": "off",
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off"
  }
};
