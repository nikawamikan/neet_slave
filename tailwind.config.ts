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
          background: "#F4F7F7",
          primary: "#0070f3",
          secondary: "#ff0080",
        }
      },
      dark: {
        colors: {
          background: "#111111",
          primary: "#0070f3",
          secondary: "#ff0080",
        }
      },
    }
  })],
};
export default config;
