import { Pagination } from "@/components/pagination"
import { countPage } from "@/services/blog"

export default async function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            {children}
        </section>
    )
}
