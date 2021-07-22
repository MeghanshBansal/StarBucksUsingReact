module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        code: "0 0 0 2px rgb(185, 28, 28)",
      },
      minWidth: {
        half: "50%",
        minimum: "35px",
        24: "24px",
        card: "calc(100%-128px)",
        768: "768px",
        16: "16.66667%",
      },
      minHeight: {
        minimum: "35px",
        24: "24px",
      },
      maxWidth: {
        fourtimes: "400%",
        8: "8rem",
        540: "540px",
        1440:"1440px",
      },
      borderRadius: {
        small: "50px",
      },
      backgroundColor: {
        greenheader: "#1e3932",
        bannercolor: "#d4e9e2",
        bannerlink: "#008248",
        cardcolor: "#f3f1e7",
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
      margin: {
        16: "16.66667%",
      },
      textColor: {
        gold: "#cba258",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
