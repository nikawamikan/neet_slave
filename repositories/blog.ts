import { cmsClient } from "@/lib/microcms"
import { Blog } from "@/types/microcms";

// 特定のIDのブログ記事を取得する
export async function fetchBlogById(id: string) {
    try {
        const response: Blog = await cmsClient.get({
            endpoint: 'blog',
            contentId: id,
        })
        return response

    } catch (error) {
        console.error('Error retrieving blog elements:', error);
    }
}

// 特定のユーザーのブログ記事のIDを全て取得する
export async function fetchAllBlogIds(writer: string) {
    try {
        const response: Blog[] = await cmsClient.getAllContents({
            endpoint: 'blog',
            queries: { filters: `writer[contains]${writer}`, fields: 'id' },
        })
        return response.map((blog) => blog.id)

    } catch (error) {
        return []
    }

}

export async function fetchBlogDetails(writer: string, limit: number, offset: number) {
    try {
        const response: { contents: Blog[] } = await cmsClient.get({
            endpoint: 'blog',
            queries: { filters: `writer[contains]${writer}`, fields: 'id,title,description,thumbnail,publishedAt,writer', limit: limit, offset: offset },
        })
        return response.contents

    } catch (error) {
        return []
    }
}
