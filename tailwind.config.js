module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}', './public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                bms: {
                    50: '#edf1fc',
                    100: '#d3d4e1',
                    200: '#b6b8c9',
                    300: '#989bb2',
                    400: '#7c7f9b',
                    500: '#636582',
                    600: '#4c4f66',
                    700: '#363849',
                    800: '#2b3147',
                    900: '#0a0a16',
                },
                signin: {
                    50: '#ffe3eb',
                    100: '#ffb3c2',
                    200: '#fb8399',
                    300: '#f95370',
                    400: '#f62448',
                    500: '#dc0d2f',
                    600: '#ac0624',
                    700: '#7c031a',
                    800: '#4c000e',
                    900: '#1f0003',

                },
            },
        },
    },


    variants: {
        extend: {},
    },
    plugins: [],
}