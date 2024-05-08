"use client"

import { useEffect } from "react"
import tocbot from "tocbot"
import "@/styles/toc.css"

export const TableOfContents: React.FC = () => {
    useEffect(() => {
        tocbot.init({
            tocSelector: ".toc",
            contentSelector: ".blogContent", // 目次を抽出したい要素のクラス名
            headingSelector: "h1, h2, h3, h5, h6",
            scrollSmoothOffset: -60,
            headingsOffset: 60,
            scrollSmoothDuration: 300,
        })

        return () => tocbot.destroy()
    }, [])

    return (
        <div className="sticky top-24">
            <h3 className="font-bold">目次</h3>
            <div className="toc" />
        </div>
    )
}
