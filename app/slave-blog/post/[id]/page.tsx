import { fetchSlaveBlogIds, fetchBlogContent } from "@/services/blog"
import { title, subtitle } from "@/components/primitives"
import { BlogContent } from "@/components/blog-content"
import { toJpDateStr } from "@/lib/date"

export async function generateStaticParams() {
    const ids = await fetchSlaveBlogIds()
    // ページIDをすべて取得して返す
    if (!ids) {
        console.error("Error retrieving blog ids")
        return []
    }
    return ids.map((contentId) => ({ id: contentId }))
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params
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
