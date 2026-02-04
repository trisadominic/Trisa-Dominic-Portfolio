/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#22d3ee", // Cyan 400
                secondary: "#111827", // Gray 900
                accent: "#06b6d4", // Cyan 500
                dark: "#000000", // Black
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
