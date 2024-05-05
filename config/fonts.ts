import {
    Fira_Code as FontMono,
    Inter as FontSans,
    Noto_Sans_Javanese as NoteSans,
} from "next/font/google"
import localFont from "next/font/local"

export const noteSans = NoteSans({
    variable: "--font-notesans",
    subsets: ["javanese", "latin-ext", "latin"],
    weight: "400",
})
// FontMRound({ subsets: ["latin"], weight: ["700"], fallback: ["SF Rounded"] })

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

export const mamelon = localFont({
    src: "./fonts/Mamelon-3-Hi-Regular.otf",
    variable: "--font-mamelon",
    display: "swap",
})

export const kimberalla = localFont({
    src: "./fonts/Kimberella-Regular.otf",
    variable: "--font-kimberalla",
    display: "swap",
})
