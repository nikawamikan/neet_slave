import { fetchSlaveBlogIds, fetchBlogById } from "@/repositories/blog"
import { title, subtitle } from "@/components/primitives"
import { Toc } from "@/components/tocs"
import { BlogContent } from "@/components/blogContent"
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
    const data = await fetchBlogById(id)
    if (!data) {
        return <div>Not Found</div>
    }
    return (
        <>
            <h1 className={title()}>{data.title}</h1>
            <div className="mt-8 flex flex-col">
                <span className="w-1/2">公開日: {toJpDateStr(data.publishedAt)}</span>
                <span className="w-1/2">更新日: {toJpDateStr(data.revisedAt)}</span>
            </div>
            <br />
            <span className={subtitle()}>{data.description}</span>
            <br />
            <Toc body={data.content} />
            <br />
            <BlogContent data={data} />
            <br />
        </>
    )
}
