/** @type {import("tailwindcss").Config} */

export default {
  content: ["./src/**/*.vue", "index.html"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      display: ["Orbitron Variable", "Orbitron", "sans-serif"],
      body: ["Quicksand Variable", "Quicksand", "system-ui", "sans-serif"],
      pixel: ['"Press Start 2P"', "monospace"],
    },
    extend: {
      colors: {
        // Night-sky surfaces, darkest to lightest
        arcade: {
          950: "#070a10",
          900: "#0b0f17",
          850: "#0f141e",
          800: "#131a26",
          700: "#1a2232",
          600: "#253046",
          500: "#3a4760",
          400: "#6b7891",
          300: "#9aa6bd",
          200: "#c6cfdf",
          100: "#e6ebf5",
        },
        neon: {
          cyan: "#22e5ff",
          magenta: "#ff2bd6",
          violet: "#8b5cf6",
          gold: "#ffd23f",
          lime: "#7dff6b",
        },
      },
      boxShadow: {
        "glow-sm": "0 0 0 1px rgb(34 229 255 / 0.35), 0 0 12px rgb(34 229 255 / 0.25)",
        glow: "0 0 0 1px rgb(34 229 255 / 0.5), 0 0 24px rgb(34 229 255 / 0.3)",
        "glow-magenta": "0 0 0 1px rgb(255 43 214 / 0.5), 0 0 24px rgb(255 43 214 / 0.3)",
        panel: "0 12px 32px rgb(0 0 0 / 0.5), inset 0 1px 0 rgb(255 255 255 / 0.06)",
      },
      dropShadow: {
        neon: ["0 0 6px rgb(34 229 255 / 0.55)", "0 0 18px rgb(34 229 255 / 0.25)"],
      },
      animation: {
        "scale-up": "scaleUp 0.35s cubic-bezier(.2,.8,.2,1) both",
        blink: "blink 1.1s steps(1) infinite",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.96) translateY(6px)", opacity: "0" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}
