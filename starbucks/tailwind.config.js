module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        half: "50%",
        minimum: "35px",
      },
      minHeight: {
        minimum: "35px",
      },
      maxWidth: {
        fourtimes: "400%",
      },
      borderRadius: {
        small: "50px",
      },
      backgroundColor: {
        greenheader: "#1e3932",
        bannercolor: "#d4e9e2",
        bannerlink: "#008248",
      },
      backgroundImage: {
        bannerImage:
          "url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')",
      },
      display: {
        no: "none",
      },
      padding: {
        supermax: "133.33%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
