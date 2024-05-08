import { cmsClient } from "@/lib/microcms"
import { Blog } from "@/types/microcms"

// すべてのブログ記事を取得する
export async function fetchAllBlogs(writer: string) {
    try {
        const response: Blog[] = await cmsClient.getAllContents({
            endpoint: "blog",
            queries: { filters: `writer[contains]${writer}` },
        })
        return response
    } catch (error) {
        return []
    }
}

// 特定のIDのブログ記事を取得する
export async function fetchBlogById(id: string) {
    try {
        const response: Blog = await cmsClient.get({
            endpoint: "blog",
            contentId: id,
        })
        return response
    } catch (error) {
        console.error("Error retrieving blog elements:", error)
    }
}

// 特定のユーザーのブログ記事のIDを全て取得する
export async function fetchAllBlogIds(writer: string) {
    return fetchAllBlogs(writer).then((blogs) => blogs.map((blog) => blog.id))
}

// ブログのTAG一覧を取得する
export async function fetchBlogTags(writer: string) {
    const blogs = await fetchAllBlogs(writer)
    const tags = blogs.map((blog) => blog.tags).flat()
    return Array.from(new Set(tags))
}

// タグごとにブログ記事の一覧を取得する
export async function fetchBlogListByTag(writer: string, tag_id: string) {
    try {
        const response: Blog[] = await cmsClient.getAllContents({
            endpoint: "blog",
            queries: {
                filters: `tags[contains]${tag_id},writer[contains]${writer}`,
                fields: "id,title,description,thumbnail,publishedAt,writer,tags",
            },
        })
        return response
    } catch (error) {
        return []
    }
}

// ブログ記事の一覧を取得する
export async function fetchBlogList(
    writer: string,
    limit: number,
    offset: number
) {
    try {
        const response: { contents: Blog[] } = await cmsClient.get({
            endpoint: "blog",
            queries: {
                filters: `writer[contains]${writer}`,
                fields: "id,title,description,thumbnail,publishedAt,writer,tags",
                limit: limit,
                offset: offset,
            },
        })
        return response.contents
    } catch (error) {
        return []
    }
}
