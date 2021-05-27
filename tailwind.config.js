module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      myColor: "#3a63ff",
      myBgColor: "#343334",
    }),
    backgroundImage: (theme) => ({
      hero: "url('https://user-images.githubusercontent.com/38108288/98447858-84feb880-20fe-11eb-8067-2825f5d4a2a2.jpg')",
    }),
    extend: {
      fontFamily: {
        permanentMarker: ["Permanent Marker"],
        codePro: ['Source Code Pro']
      },
      colors: {
        myColor: "#3a63ff",
      },
    },
    backgroundPosition: {
      centerCustom: "40% 25%"
    }
  },
  variants: {
    extend: {
      fontSize: ['hover'],
    },
  },
  plugins: [],
};
