/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/views/**/*.ejs',
    './public/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          '50': "#f4f4f4",
          '100': "#f0f0f0",
          '200': "#e2e2e2",
          '300': "#909090",
          '400': "#707070",
          '500': "#505050",
          '600': "#404040",
          '700': "#262626",
          '800': "#101010",
          '900': "#0a0a0a",
          '950': "#010101"
        },
        gray: {
          '50': "#f4f4f4",
          '100': "#f0f0f0",
          '200': "#e2e2e2",
          '300': "#909090",
          '400': "#707070",
          '500': "#505050",
          '600': "#404040",
          '700': "#262626",
          '800': "#101010",
          '900': "#0a0a0a",
          '950': "#010101"
        },
        pallete: {
          '0': '#cc9e79',
          '1': '#a6988a',
          '2': '#bfb2a4',
          '3': '#e0cbb2',
          '4': '#d9d0c2',
          '5': '#f1e3d3',
          '6': '#e6e5e0',
          '7': '#b8bab6',
          '8': '#a6b4b2',
          '9': '#a2a9a2',
        },
      },
    },
  },
  plugins: [
  ],
}

