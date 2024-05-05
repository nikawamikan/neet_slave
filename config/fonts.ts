import {
    Fira_Code as FontMono,
    Inter as FontSans,
    M_PLUS_Rounded_1c as FontMRound,
} from "next/font/google"
import localFont from "next/font/local"

export const fontMRound = FontMRound({
    variable: "--font-mrounded",
    subsets: ["latin"],
    style: "normal",
    weight: "300",
})

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export const makinas = localFont({
    src: "./fonts/Makinas-4-Square.otf",
    variable: "--font-makinas",
    display: "swap",
})
