const forms = require("@tailwindcss/forms");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      "sans": ["Open Sans"],
      "serif": ["Manjari"],
    },
  },
  daisyui: {
      themes: [
        {
          algorinfo: {
            "primary": "#FBBF24",
            "secondary": "#7209B7",
            "accent": "#EB5E28",
            "neutral": "#FAFAFA",
            "base-100": "#18181b",
            "info": "#3ABFF8",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
          },
        },
      ],
    },
  plugins: [forms, require("daisyui")],
};

module.exports = config;
