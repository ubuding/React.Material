/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ["Orbitron"],
        Medium: ["Urbanist-Medium"],
      },
    },
  },
  plugins: [],
};
