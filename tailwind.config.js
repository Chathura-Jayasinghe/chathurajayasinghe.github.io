// tailwind.config.js
export const theme = {
    extend: {
        fontFamily: {
            sans: ['Lato'], // This overrides the default sans
        },
    },
};
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const plugins = [];
