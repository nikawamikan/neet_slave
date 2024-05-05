import { Config } from "tailwindcss"
import { nextui } from "@nextui-org/theme"
import { themes } from "./config/theme"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                makinas: ["var(--font-makinas)"],
                mrounded: ["var(--font-mrounded"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                itemspin: "itemspin 3s linear infinite",
                wiggle: "wiggle 1s ease-in-out infinite",
            },
            keyframes: {
                itemspin: {
                    "0%": { transform: "rotate(0deg)" },
                    "50%": { transform: "rotate(180deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-5deg)" },
                    "50%": { transform: "rotate(5deg)" },
                },
            },
        },
    },
    plugins: [
        nextui({
            themes: themes,
        }),
    ],
}
export default config
