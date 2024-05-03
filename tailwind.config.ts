import { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        itemspin: "itemspin 3s linear infinite",
      },
      keyframes: {
        itemspin: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#f4faff",
          foreground: "#373535",
          divider: "#c1c7cc",
          focus: "#FFA500",
          primary: {
            DEFAULT: "#3778b8",
            foreground: "#d8ffff",
          },
          secondary: {
            DEFAULT: "#ff7600",
            foreground: "#904a00",
          },
          // success: {
          //   DEFAULT: "#00c851",
          //   foreground: "#F4F7F7",
          // },
          // warning: {
          //   DEFAULT: "#ffbb33",
          //   foreground: "#F4F7F7",
          // },
          // danger: {
          //   DEFAULT: "#ff4444",
          //   foreground: "#F4F7F7",
          // },
        }
      },
      dark: {
        colors: {
          background: "#0B1E3F",
          foreground: "#efefef",
          divider: "#c1c7cc",
          focus: "#FFA500",
          primary: {
            DEFAULT: "#3676c6",
            foreground: "#dbffff",
          },
          secondary: {
            DEFAULT: "#ff7600",
            foreground: "#8d1000",
          },
          // success: {
          //   DEFAULT: "#00c851",
          //   foreground: "#F4F7F7",
          // },
          // warning: {
          //   DEFAULT: "#ffbb33",
          //   foreground: "#F4F7F7",
          // },
          // danger: {
          //   DEFAULT: "#ff4444",
          //   foreground: "#F4F7F7",
          // },
        }
      }
    }
  })],
};
export default config;
