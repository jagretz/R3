module.exports = {
    "extends": [
        "airbnb/rules/react",
        "airbnb/rules/react-a11y"
    ],
    "rules": {
        "react/jsx-indent": ["error", 4],
        "jsx-a11y/label-has-for": [
            2,
            {
                components: ["Label"],
                required: {
                    every: ["nesting", "id"]
                },
                allowChildren: true
            }
        ]
    }
};
