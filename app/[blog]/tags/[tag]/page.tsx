import { title } from "@/components/primitives"
import type { Metadata, ResolvingMetadata } from "next"
import { fetchBlogTags, fetchBlogListByTag } from "@/services/blog"
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
        tag: tag.id,
    }))
    const neetPages = neetBlogTags.map((tag) => ({
        blog: "neet-blog",
        tag: tag.id,
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
    params: { tag: string; blog: string }
}) {
    const { blog, tag } = params
    let blogList: Blog[] = []
    if (blog !== "neet-blog") {
        blogList = await fetchBlogListByTag("slave", tag)
    } else {
        blogList = await fetchBlogListByTag("neet", tag)
    }
    console.log(blogList)

    // blogList から一意のタグを取得
    const tags = blogList.map((blog) => blog.tags).flat()
    // 重複を削除
    const uniqueTags = Array.from(new Set(tags.map((tag) => tag)))
    // tagはIDなので、IDからTAGオブジェクトをPOPする
    const tagObj = uniqueTags.find((tagData) => tagData.id === tag)
    // uniqueTagsからtagObjを削除
    const filteredTags = uniqueTags.filter((tagData) => tagData.id !== tag)
    console.log(tagObj)

    return (
        <div>
            {blog === "neet-blog" ? <NeetTop /> : <SlaveTop />}
            <div className="my-8 text-left">
                <div>
                    <p className={title()}>{tagObj?.name}</p> <p> とは？</p>
                </div>
                <p className="mt-4">{tagObj?.description}</p>
            </div>

            <BlogCardList blogs={blogList} />
        </div>
    )
}
