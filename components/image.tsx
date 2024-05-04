import { Image as NextImage } from "@nextui-org/image"
import type { ImageProps as NextImageProps } from "@nextui-org/image/dist/image.js"

type Prop = {
    src: string
    width: string | number
    height?: string | number
    quality?: number
}

interface ImageProps extends NextImageProps {
    quality?: number
}

function imgixLoader({ src, width, height, quality }: Prop) {
    if (typeof width === "string" || typeof height === "string") return src
    const url = new URL(src)
    const params = url.searchParams
    params.set("fit", params.get("fit") || "crop")
    params.set("w", params.get("w") || width.toString())
    if (height) params.set("h", params.get("h") || height.toString())
    params.set("q", (quality || 75).toString())
    return url.href
}

export function Image(params: ImageProps) {
    const { src, width, height, quality } = params
    if (!src || !width) return null

    const imageUrl = imgixLoader({ src, width, height, quality })
    return <NextImage {...params} src={imageUrl} />
}
