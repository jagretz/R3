module.exports = {
    // "extends": [
    //     "airbnb",
    //     "airbnb-base/rules/es6",
    //     "airbnb-base/rules/imports",
    //     "prettier"
    // ],
    env: { browser: true },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        "arrow-parens": ["error", "as-needed", { requireForBlockBody: false }],
        "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: false }],
        "func-names": "off",
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1
                }
            }
        ],
        "no-bitwise": ["error", { allow: ["~"] }],
        "no-console": ["error", { allow: ["info", "warn", "error"] }],
        "no-debugger": "error",
        "no-plusplus": "off",
        "no-param-reassign": "off",
        "no-prototype-builtins": "warn",
        "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
        "no-use-before-define": ["error", { functions: false }],
        "max-len": "off",
        quotes: ["error", "double", { avoidEscape: true }],
        "space-before-function-paren": ["error", { anonymous: "never", named: "never", asyncArrow: "ignore" }],
        "spaced-comment": "off"
    }
};
