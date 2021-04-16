module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      myColor: "#3a63ff",
    }),
    extend: {
      fontFamily: {
        permanentMarker: ["Permanent Marker"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
