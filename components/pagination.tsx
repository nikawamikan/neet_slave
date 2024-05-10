"use client"
import * as React from "react"
import { Pagination as NextPagination } from "@nextui-org/pagination"
import { useRouter, usePathname } from "next/navigation"
import { last } from "lodash"

type Prop = {
    pageCount: number
}

export function Pagination({ pageCount }: Prop) {
    // 現在のPATHを配列で取得
    const pathname = usePathname().split("/")
    // ページ数を取得
    const page = Number(pathname.pop())

    const router = useRouter()

    const handleChange = (page: number) => {
        router.push(`/${pathname.join("/")}/${page}`)
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
