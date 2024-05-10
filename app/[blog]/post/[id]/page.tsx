import { fetchBlogIds, fetchBlogContent } from "@/services/blog"
import { title, subtitle } from "@/components/primitives"
import { BlogContent } from "@/components/blog-content"
import { toJpDateStr } from "@/lib/date"

export async function generateStaticParams() {
    const slaveBlogIds = await fetchBlogIds("slave")
    const neetBlogIds = await fetchBlogIds("neet")

    return slaveBlogIds
        .map((contentId) => ({ id: contentId, blog: "slave-blog" }))
        .concat(
            neetBlogIds.map((contentId) => ({
                id: contentId,
                blog: "neet-blog",
            }))
        )
}

export default async function Page({
    params,
}: {
    params: { id: string; blog: string }
}) {
    const { id, blog } = params
    const data = await fetchBlogContent(id)
    if (!data) {
        return <div>Not Found</div>
    }
    return (
        <>
            <h1 className={title()}>{data.title}</h1>
            <div className="mt-8 flex flex-col">
                <span>公開日: {toJpDateStr(data.publishedAt)}</span>
                <span>更新日: {toJpDateStr(data.revisedAt)}</span>
            </div>
            <span className={subtitle()}>{data.description}</span>
            <BlogContent data={data} />
        </>
    )
}
