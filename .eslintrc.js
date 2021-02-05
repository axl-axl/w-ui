module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "semi": "error",
        "no-extra-parens": 2,
        "curly": 2,
        "eqeqeq": 2,
        "no-use-before-define": 2,
        "space-infix-ops": 2,
    }
};
