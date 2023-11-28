/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary': '#268573',
                'primary-washed': '#94c1ba',
                'primary-dark': '#172a27',
            },
            fontFamily: {
                handwriting: 'Sue Ellen Francisco',
            },
        },
    },
    plugins: [],
}
