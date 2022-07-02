/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      textPrimary: "#FDFFFE",
      textSecondary: "#4B4B52",
      secondary: "#f5f7fc",
      backgroundPrimary: "#202161",
      backgroundSecondary: "#F5F7FC",
      cardBackground: "#FEFEFF",
      taskColor: "#934292",
      icons: "#fefeff"
    },
    extend: {
      animation: {
        fade: 'fadeIn 5s ease-out-in',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { scale: 0 },
          '100%': { scale: 100 },
        },
      }),
    },
  },
  plugins: [],
}
