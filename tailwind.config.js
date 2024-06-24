/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Grotesk', 'sans-serif'], // Utilisée pour les titres
        'grotesk-light': ['Grotesk-Light', 'sans-serif'],
        'grotesk-medium': ['Grotesk-Medium', 'sans-serif'],
        'grotesk-semibold': ['Grotesk-SemiBold', 'sans-serif'],
      },
      colors: {
        primary: '#063dcc', // Couleur principale
        BgLight: '#F3EEDD', // Fond principal
        accent: '#EF8354', // Couleur secondaire
        BgLightVariant: '#fffeee', // Variante de fond
      },
    }
  },
  plugins: [],
}
