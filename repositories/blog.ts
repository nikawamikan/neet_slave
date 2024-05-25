import { cmsClient } from "@/lib/microcms"
import { Blog } from "@/types/microcms"
import { unstable_cache } from "next/cache"

// すべてのブログ記事を取得する
export const fetchAllBlogs = unstable_cache(async () => {
    try {
        const response: Blog[] = await cmsClient.getAllContents({
            endpoint: "blog",
        })
        return response
    } catch (error) {
        return []
    }
})

// Writerごとのブログ記事を取得する
export const fetchAllBlogsByWriter = unstable_cache(async (writer: string) => {
    const blogs = await fetchAllBlogs()
    return blogs.filter((blog) => blog.writer[0] === writer)
})
