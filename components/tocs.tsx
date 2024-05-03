"use client"

import * as cheerio from "cheerio"
import { Link } from "@nextui-org/link"
import React, { useState, useEffect } from "react"
import { throttle } from "lodash"

const Scroll = () => {
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = throttle(() => {
        setScrollY(window.scrollY)
    }, 100)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])
    return scrollY
}

const renderToc = (body: string) => {
    const $ = cheerio.load(body)
    const headings = $("h1, h2, h3").toArray()
    const toc = headings.map(
        (data: { name: string; children: any[]; attribs: any }) => ({
            name: data.name,
            text: data.children[0].data as string,
            id: data.attribs.id as string,
        })
    )

    return toc
}

function TocItem(props: { data: { name: string; id: string; text: string } }) {
    const { data } = props
    const indent =
        data.name === "h1"
            ? "indent-4"
            : data.name === "h2"
              ? "indent-8"
              : "indent-12"
    // レベルに応じてインデントをつける
    return (
        <li className={indent}>
            <Link className="text-8xl" href={`#${data.id}`}>
                {data.text}
            </Link>
        </li>
    )
}

export function Toc(props: { body: string }) {
    const scrollY = Scroll()
    const { body } = props
    const toc = renderToc(body)
    if (typeof document !== "undefined") {
        const test = toc.map((data) => document.getElementById(data.id))
        test.map((data) =>
            console.log(`id ${data?.id}, y :${data?.getBoundingClientRect().y}`)
        )
    }
    return (
        <aside className="top-20">
            <h2 className="text-lg font-bold">目次</h2>
            {toc.map((data) => TocItem({ data }))}
        </aside>
    )
}
