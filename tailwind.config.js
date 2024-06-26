module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["GopherDisplay-Medium"],
      body: ["TTC"],
      button: ["TTC-Demibold"],
    },
    fontSize: {
      titleHugeDesktop: "120px",
      titleHugeMobile: "64px",
      title1: "43px",
      title2: "36px",
      title3: "32px",
      title4: "24px",
      title5: "20px",
      title6: "18px",
      altTitle1: "64px",
      altTitle3: "40px",
      altTitle4: "32px",
      btnTextMd: "22px",
      btnTextSm: "18px",
      pLg: "26px",
      pMd: "22px",
      pSm: "18px",
      linkMd: "30px",
    },
    colors: {
      darkBlack: "#111111",
      footerGrey: "#888888",
      fluoGreen: "#4BFFB3",
      softGreen: "#97FFDD",
    },
    gridTemplateColumns: {
      about: "120px 1fr",
      singleProject: "50% 45%",
      three: "repeat(3, 1fr)",
    },

    keyframes: {
      "bounce-smooth": {
        "0%, 100%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-5px)",
        },
      },
      popup: {
        "0%": {
          transform: "translateY(100px) rotate(-5deg)",
          opacity: 0.5,
        },
        "15%": {
          transform: "translateY(0px) rotate(0deg)",
          opacity: 1,
        },
        "100%": {
          transform: "translateY(100px)",
          opacity: 0,
        },
      },
    },
    animation: {
      "bounce-smooth": "bounce-smooth 1.5s ease-in-out infinite",
      popup: "popup 2.5s ease-in-out",
    },
  },
  plugins: [],
}
