module.exports = {
    rules: {
        "jsx-a11y/label-has-for": [
            2,
            {
                components: ["Label"],
                required: {
                    every: ["nesting", "id"]
                },
                allowChildren: true
            }
        ],
        "no-console": ["error", { allow: ["info", "warn", "error"] }]
    }
};
