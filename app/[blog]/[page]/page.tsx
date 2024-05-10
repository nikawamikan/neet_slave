import { title } from "@/components/primitives"
import type { Metadata, ResolvingMetadata } from "next"
import { fetchBlogList, countPage } from "@/services/blog"
import { BlogCardList } from "@/components/blog-card-list"
import { Blog } from "@/types/microcms"
import React from "react"
import { siteConfig } from "@/config/site"
import { GenerateOGPImage } from "@/lib/ogpImage"
import { Pagination } from "@/components/pagination"

export async function generateStaticParams() {
    const pageSlaveCount = await countPage("slave")
    const pageNeetCount = await countPage("neet")
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

export async function generateMetadata({
    params,
}: {
    params: { blog: string; page: string }
}): Promise<Metadata> {
    const { blog, page } = params
    return {
        title: blog,
        description: "ブログ一覧ページ",
        openGraph: {
            title: blog,
            description: "ブログ一覧ページ",
            type: "website",
            url: `https://neet-slave-blog.com/${blog}/${page}`,
            images: [
                GenerateOGPImage(
                    siteConfig.ogpBaseImages.top,
                    "ブログ一覧ページ",
                    "ここは社畜のブログページ なんにもいいことないけど 見ていってね",
                    "SlaveBlog"
                ),
            ],
            siteName: "Neet Slave Blog",
        },
    }
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
    let blogList: Blog[] = []
    let pageCount = 0
    if (blog === "slave-blog") {
        blogList = await fetchBlogList("slave", 10, (pageInt - 1) * 10)
        pageCount = await countPage("slave")
    } else {
        blogList = await fetchBlogList("neet", 10, (pageInt - 1) * 10)
        pageCount = await countPage("neet")
    }
    return (
        <div>
            <div className="inline-block max-w-7xl justify-center text-center">
                {blog === "slave-blog" ? <SlaveTop /> : <NeetTop />}
                <BlogCardList blogs={blogList} />
            </div>
            <div className="mt-12 grid place-content-center">
                <Pagination pageCount={pageCount} />
            </div>
        </div>
    )
}
