"use client"

import { useRouter, usePathname } from "next/navigation"

export default function Redirect() {
    const router = useRouter()
    const pathname = usePathname().split("/")
    if (pathname.length !== 2) {
        pathname.pop()
    }
    const url = `${pathname.join("/")}/1`
    router.push(url)
    return <></>
}
