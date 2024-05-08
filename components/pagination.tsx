"use client"
import * as React from "react"
import { Pagination as NextPagination } from "@nextui-org/pagination"
import { useRouter, usePathname } from "next/navigation"
import { last } from "lodash"

type Prop = {
    pageCount: number
}

export function Pagination({ pageCount }: Prop) {
    // 現在のPATHを取得
    const pathname = usePathname()
    // ページ数を取得
    const page = Number(last(pathname.split("/")))

    const router = useRouter()

    const handleChange = (page: number) => {
        router.push(`/slave-blog/${page}`)
    }

    return (
        <>
            <NextPagination
                disableCursorAnimation
                showControls
                radius="full"
                total={pageCount}
                initialPage={page}
                onChange={handleChange}
            />
        </>
    )
}
