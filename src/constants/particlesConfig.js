export const particlesConfig = {
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        size: 70,
        opacity: 0.1,
      },
    },
  },
  fullScreen: {
    enable: false,
  },
  detectRetina: true,
  background: {
    color: "#111111",
  },
  fpsLimit: 60,
  particles: {
    move: {
      enable: true,
      straight: false,
    },
    number: {
      value: 200,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 150,
    },
    stroke: {
      opacity: 0.1,
      color: {
        value: "#2BFFE6",
      },
      width: 8,
    },
    color: {
      value: "#111111",
    },

    rotate: {
      path: true,
      value: 180,
    },
  },
}
