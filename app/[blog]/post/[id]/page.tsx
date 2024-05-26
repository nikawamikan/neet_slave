import { fetchBlogIds, fetchBlogContent } from "@/services/blog"
import { title, subtitle } from "@/components/primitives"
import { BlogContent } from "@/components/blog-content"
import { toJpDateStr } from "@/lib/date"
import { TagChip } from "@/components/tag-chip"
import { siteConfig } from "@/config/site"
import { BlogCard, SmallBlogCard } from "@/components/blog-card"
import { Blog } from "@/types/microcms"
import { TableOfContents } from "@/components/testtoc"

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

type prevNextPrep = {
    baseUrl: string
    nextContent?: Blog | null
    prevContent?: Blog | null
}

function PrevNext({ baseUrl, prevContent, nextContent }: prevNextPrep) {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
            {prevContent ? (
                <div className="m-2">
                    <h2 className={subtitle()}>前の記事</h2>
                    <SmallBlogCard baseUrl={baseUrl} blog={prevContent} />
                </div>
            ) : (
                <div />
            )}
            {nextContent ? (
                <div className="m-2">
                    <h2 className={subtitle()}>次の記事</h2>
                    <SmallBlogCard baseUrl={baseUrl} blog={nextContent} />
                </div>
            ) : (
                <div />
            )}
        </div>
    )
}

function relationalBlogCard(data: Blog, basePageUrl: string) {
    if (!data.relation || data.relation.length === 0) {
        return <div />
    }

    return (
        <div>
            <div>
                <h2 className={subtitle()}>関連記事</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {data.relation!.map((blog) => (
                    <SmallBlogCard
                        className="m-2"
                        key={blog.id}
                        baseUrl={basePageUrl}
                        blog={blog}
                    />
                ))}
            </div>
        </div>
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

    let baseTagUrl = ""
    let basePageUrl = ""
    let blogIds = []
    if (blog === "slave-blog") {
        baseTagUrl = siteConfig.siteItems.tagPage.slaveBlog
        basePageUrl = siteConfig.siteItems.postPage.slaveBlog
        blogIds = await fetchBlogIds("slave")
    } else {
        baseTagUrl = siteConfig.siteItems.tagPage.neetBlog
        basePageUrl = siteConfig.siteItems.postPage.neetBlog
        blogIds = await fetchBlogIds("neet")
    }
    const nowPageIndex = blogIds.indexOf(id)
    const prevIndex = nowPageIndex - 1
    const next = nowPageIndex + 1

    const prevContent =
        prevIndex >= 0 ? await fetchBlogContent(blogIds[prevIndex]) : null

    const nextContent =
        next < blogIds.length ? await fetchBlogContent(blogIds[next]) : null

    return (
        <>
            <div className="flex max-w-7xl gap-4 py-8 md:py-10">
                <div className="max-w-full basis-full justify-center md:basis-3/4">
                    <h1 className={title()}>{data.title}</h1>
                    <div className="my-8 flex flex-col">
                        <span>公開日: {toJpDateStr(data.publishedAt)}</span>
                        <span>更新日: {toJpDateStr(data.revisedAt)}</span>
                    </div>
                    <div className="flex">
                        {data.tags.map((tag) => (
                            <TagChip
                                key={tag.id}
                                baseUrl={baseTagUrl}
                                tag={tag}
                            />
                        ))}
                    </div>
                    <div className="mt-16">
                        <span className={subtitle()}>{data.description}</span>
                        <BlogContent data={data} />
                    </div>
                    {relationalBlogCard(data, basePageUrl)}
                </div>
                <div className="hidden basis-0 md:inline md:basis-1/4 ">
                    <TableOfContents />
                </div>
            </div>
            <div>
                <PrevNext
                    baseUrl={basePageUrl}
                    prevContent={prevContent}
                    nextContent={nextContent}
                />
            </div>
        </>
    )
}
