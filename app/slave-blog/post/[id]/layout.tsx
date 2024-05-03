import { TableOfContents } from "@/components/testtoc"

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex max-w-7xl gap-4 py-8 md:py-10">
            <div className="inline-block  basis-full justify-center text-left md:basis-3/4 ">
                {children}
            </div>
            <div className="hidden basis-0 md:inline md:basis-1/4 ">
                <TableOfContents />
            </div>
        </section>
    )
}
