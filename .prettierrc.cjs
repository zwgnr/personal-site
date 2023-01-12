module.exports = {
    bracketSameLine: true,
    printWidth: 100,
    plugins: [
        require("prettier-plugin-astro"),
        require("prettier-plugin-tailwindcss")
    ],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro"
            }
        }
    ]
}
