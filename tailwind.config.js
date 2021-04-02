const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            steel: colors.blueGray,
            coolGray: colors.coolGray,
            gray: colors.trueGray,
            black: colors.black,
            red: colors.red,
            rose: colors.rose,
            pink: colors.pink,
            amber: colors.amber,
            orange: colors.orange,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            blue: colors.blue,
            cyan: colors.cyan,
            teal: colors.teal,
            indigo: colors.indigo,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            emerald: colors.emerald,
            lightBlue: colors.lightBlue,
            violet: colors.violet
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss-animatecss')({
            classes: ['animate__animated', , 'animate__bounceOutDown', 'animate__bounceInUp'],
        }),
        require('tailwindcss-absolute-center')({
            variants: ['responsive'],
        }),
    ],
};
