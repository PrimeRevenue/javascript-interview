module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
        mocha: true
    },
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    rules: {
        "prettier/prettier": "error",
        "no-console": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                args: "all",
                argsIgnorePattern: "^_.*"
            }
        ],
        "object-property-newline": [
            "error",
            {
                allowAllPropertiesOnSameLine: false
            }
        ],
        semi: ["error", "always"],
        "@typescript-eslint/camelcase": [
            "error",
            {
                properties: "never"
            }
        ] // specifically because of the salesforce fields - IP_Address__c
    }
};
