import { title } from "@/components/primitives"
import type { Metadata, ResolvingMetadata } from "next"
import {
    fetchBlogTags,
    fetchBlogListByTag,
    fetchBlogTagMap,
    writers,
} from "@/services/blog"
import { BlogCardList } from "@/components/blog-card-list"
import { Blog } from "@/types/microcms"
import React from "react"
import { siteConfig } from "@/config/site"
import { GenerateOGPImage } from "@/lib/ogpImage"

export async function generateStaticParams() {
    const slaveBlogTags = await fetchBlogTags("slave")
    const neetBlogTags = await fetchBlogTags("neet")
    const slavePages = slaveBlogTags.map((tag) => ({
        blog: "slave-blog",
        tagId: tag.id,
    }))
    const neetPages = neetBlogTags.map((tag) => ({
        blog: "neet-blog",
        tagId: tag.id,
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
                    "ここは社畜のタグ一覧ページ なんにもいいことないけど 見ていってね",
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
            <h1 className={title()}>社畜のタグ検索ページ</h1>
        </div>
    )
}

function NeetTop() {
    return (
        <div>
            <h1 className={title()}>ニートのタグ検索ページ</h1>
        </div>
    )
}

export default async function BlogPage({
    params,
}: {
    params: { tagId: string; blog: string }
}) {
    const { blog, tagId } = params
    let writer: writers = "slave"
    if (blog === "neet-blog") {
        writer = "neet"
    }
    const blogList = await fetchBlogListByTag(writer, tagId)
    const thisTag = (await fetchBlogTagMap(writer))[tagId]
    const filteredTags = (await fetchBlogTags(writer)).filter(
        (tagData) => tagData.id !== tagId
    )

    return (
        <div>
            {blog === "neet-blog" ? <NeetTop /> : <SlaveTop />}
            <div className="my-8 text-left">
                <div>
                    <p className={title()}>{thisTag?.name}</p> <p> とは？</p>
                </div>
                <p className="mt-4">{thisTag?.description}</p>
            </div>

            <BlogCardList blogs={blogList} />
        </div>
    )
}
