import { encode } from "base64-url"
import { themes } from "@/config/theme"

const imageColor = themes.dark.colors.background.replace("#", "")
const alphaImageColor = "C9" + imageColor

export function GenerateOGPImage(imageUrl: string, title: string) {
    const textImageUrl = new URL("https://assets.imgix.net/~text")
    const textParams = textImageUrl.searchParams
    textParams.set("w", "560")
    textParams.set("h", "560")
    textParams.set("txt-align", "middle")
    textParams.set("txt-shad", "10")
    textParams.set("txt64", encode(title))
    textParams.set("txt-pad", "30")
    textParams.set("txt-size", "36")
    textParams.set("txt-font", "Hiragino Sans W5")
    textParams.set("txt-color", "fefefe")
    textParams.set("bg", alphaImageColor)

    const url = new URL("https://mikan-box.imgix.net/bankan27.png")
    const params = url.searchParams
    params.set("auto", params.get("auto") || "compress")
    params.set("fit", params.get("fit") || "crop")
    params.set("w", "1200")
    params.set("h", "630")
    params.set("border", `15,${alphaImageColor}`)
    params.set("blend-mode", "normal")
    params.set("blend64", encode(textImageUrl.href))

    return url.href
}
