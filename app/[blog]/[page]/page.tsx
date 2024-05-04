import { title } from "@/components/primitives"
import {
    fetchSlaveBlogDetails,
    fetchNeetBlogDetails,
    countSlavePage,
    countNeetPage,
} from "@/services/blog"
import { BlogCard } from "@/components/blog-card"
import { Blog } from "@/types/microcms"
import React from "react"
import { siteConfig } from "@/config/site"

export async function generateStaticParams() {
    const pageSlaveCount = await countSlavePage()
    const pageNeetCount = await countNeetPage()
    const slavePages = Array.from({ length: pageSlaveCount }, (_, i) => ({
        blog: "slave-blog",
        page: (i + 1).toString(),
    }))
    const neetPages = Array.from({ length: pageNeetCount }, (_, i) => ({
        blog: "neet-blog",
        page: (i + 1).toString(),
    }))

    return slavePages.concat(neetPages)
}

function CardList({ blogs }: { blogs: Array<Blog> }) {
    if (blogs.length === 0) {
        return <p>記事がありません</p>
    }

    return (
        <div className="grid grid-cols-1 gap-4 pt-20 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    params={{
                        baseUrl:
                            blog.writer[0] === "nikawamikan"
                                ? siteConfig.siteItems.slaveBlog
                                : siteConfig.siteItems.neetBlog,
                        id: blog.id,
                        imageUrl: blog.thumbnail.url,
                        title: blog.title,
                        date: blog.publishedAt,
                    }}
                />
            ))}
        </div>
    )
}

function SlaveTop() {
    return (
        <div>
            <h1 className={title()}>社畜ブログ</h1>
            <p>自称社畜がなんだかんだいろいろ言います</p>
        </div>
    )
}

function NeetTop() {
    return (
        <div>
            <h1 className={title()}>ニートブログ</h1>
            <p>自称ニートがなんだかんだいろいろ言います</p>
        </div>
    )
}

export default async function BlogPage({
    params,
}: {
    params: { page: string; blog: string }
}) {
    const { blog, page } = params
    const pageInt = parseInt(page)
    let blogDetails: Blog[] = []
    if (blog !== "neet-blog") {
        blogDetails = await fetchSlaveBlogDetails(10, (pageInt - 1) * 10)
    } else {
        blogDetails = await fetchNeetBlogDetails(10, (pageInt - 1) * 10)
    }

    return (
        <div>
            {blog === "neet-blog" ? <NeetTop /> : <SlaveTop />}
            <CardList blogs={blogDetails} />
        </div>
    )
}
