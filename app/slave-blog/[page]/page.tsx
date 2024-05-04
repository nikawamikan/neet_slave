import { title } from "@/components/primitives"
import { fetchSlaveBlogDetails, countSlavePage } from "@/services/blog"
import { BlogCard } from "@/components/blog-card"
import { Blog } from "@/types/microcms"
import React from "react"

export async function generateStaticParams() {
    const pageCount = await countSlavePage()
    return Array.from({ length: pageCount }, (_, i) => ({
        page: (i + 1).toString(),
    }))
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

export default async function BlogPage({
    params,
}: {
    params: { page: string }
}) {
    const { page } = params
    const pageInt = parseInt(page)
    const blogDetails = await fetchSlaveBlogDetails(10, (pageInt - 1) * 10)

    return (
        <div>
            <h1 className={title()}>社畜ブログ</h1>
            <p>自称社畜がなんだかんだいろいろ言います</p>
            <CardList blogs={blogDetails} />
        </div>
    )
}
