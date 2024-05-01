const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js/ts/tsx/jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        favorit: ["var(--font-favorit)", "system-ui"],
      },
      visibility: ["group-hover"],

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        moveLines: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "fade-in": "fade-in 0.9s ease-in",
        moveLines: "moveLines 2s infinite",
      },
      animationDelay: {
        "500": "0.5s",
        "1000": "1s",
      },
      height: {
        small: "225px",
        medium: "335px",
        large: "385px",
      },
    },
    plugins: [
      require("tailwindcss-animated"),
      require("tailwind-scrollbar-hide"),
    ],
  },
};

module.exports = config;
