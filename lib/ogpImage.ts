import { encode } from "base64-url"

const fontColor = "fefefe"
const font = "NotoSansJP-Regular"
const blodFont = "NotoSansJP-Bold"
const assetsUrl = "https://assets.imgix.net/~text"

export function GenerateOGPImage(
    imageUrl: string,
    onePhrase: string,
    title: string,
    blogName: string
) {
    const textImageUrl = new URL(assetsUrl)
    const textParams = textImageUrl.searchParams
    textParams.set("w", "560")
    textParams.set("txt64", encode(title))
    textParams.set("txt-size", "36")
    textParams.set("txt-font", font)
    textParams.set("txt-color", fontColor)

    const blogNameUrl = new URL(assetsUrl)
    const blogNameParams = blogNameUrl.searchParams
    blogNameParams.set("w", "560")
    blogNameParams.set("txt64", encode(blogName))
    blogNameParams.set("txt-size", "38")
    blogNameParams.set("txt-font", font)
    blogNameParams.set("txt-color", fontColor)
    blogNameParams.set("txt-align", "right")

    const url = new URL(imageUrl)
    const params = url.searchParams
    params.set("auto", params.get("auto") || "compress")
    params.set("fit", params.get("fit") || "crop")
    params.set("blend-mode", "normal")
    params.set("blend-y", "250")
    params.set("blend64", encode(textImageUrl.href))
    params.set("mark-y", "500")
    params.set("mark-align", "center")
    params.set("mark64", encode(blogNameUrl.href))
    params.set("txt64", encode(onePhrase))
    params.set("txt-size", "42")
    params.set("txt-font", blodFont)
    params.set("txt-color", fontColor)
    params.set("txt-x", "330")
    params.set("txt-y", "150")
    params.set("txt-width", "540")
    params.set("txt-fit", "max")

    return url.href
}
