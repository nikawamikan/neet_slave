import { title } from "@/components/primitives"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "404",
}
export default function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-7xl justify-center">
                <h1 className={title({ color: "violet", fullWidth: true })}>
                    404
                </h1>
            </div>
            <p>ここはたぶん工事中です。ごめんね</p>
        </section>
    )
}
