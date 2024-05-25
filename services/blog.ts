import * as repo from "@/repositories/blog"
import { Blog } from "@/types/microcms"
import { map } from "lodash"
import { unstable_cache } from "next/cache"

const SLAVE = "slave"
const NEET = "neet"

export type writers = typeof SLAVE | typeof NEET

export const fetchBlogList = unstable_cache(
    async (writer: writers, limit: number, offset: number) => {
        const blogs = await repo.fetchAllBlogsByWriter(writer)
        return blogs.slice(offset, offset + limit)
    }
)

export const fetchBlogIds = unstable_cache(async (writer: writers) => {
    return (await repo.fetchAllBlogsByWriter(writer)).map((blog) => blog.id)
})

export const countBlogContent = unstable_cache(async (writer: writers) => {
    return (await fetchBlogIds(writer)).length
})

export const countPage = unstable_cache(async (writer: writers) => {
    let count = Math.ceil((await countBlogContent(writer)) / 10)
    if (count === 0) count = 1
    return count
})

const fetchBlogMap = unstable_cache(async () => {
    const blogs = await repo.fetchAllBlogs()
    return blogs.reduce(
        (acc, blog) => {
            acc[blog.id] = blog
            return acc
        },
        {} as Record<string, Blog>
    )
})

export const fetchBlogContent = async (id: string) => {
    return (await fetchBlogMap())[id]
}

export const fetchBlogTags = unstable_cache(async (writer: writers) => {
    const blogs = await repo.fetchAllBlogsByWriter(writer)
    const tags = blogs.map((blog) => blog.tags).flat()
    const uniqueTags = map(tags, "id")
        .filter((x, i, self) => self.indexOf(x) === i)
        .map((tag_id) => tags.find((tag) => tag.id === tag_id))
    return uniqueTags as Blog["tags"]
})

export const fetchBlogTagMap = unstable_cache(async (writer: writers) => {
    const tags = await fetchBlogTags(writer)
    return tags.reduce(
        (acc, tag) => {
            acc[tag.id] = tag
            return acc
        },
        {} as Record<string, Blog["tags"][0]>
    )
})

export const fetchBlogListByTag = unstable_cache(
    async (writer: writers, tag_id: string) => {
        const blogs = await repo.fetchAllBlogsByWriter(writer)
        return blogs.filter((blog) =>
            blog.tags.some((tag) => tag.id === tag_id)
        )
    }
)

export const fetchBlogListByTagWithLimit = unstable_cache(
    async (writer: writers, tag_id: string, limit: number, offset: number) => {
        const blogs = await fetchBlogListByTag(writer, tag_id)
        return blogs.slice(offset, offset + limit)
    }
)

export const countBlogContentWithTag = unstable_cache(
    async (writer: writers, tag_id: string) => {
        return (await fetchBlogListByTag(writer, tag_id)).length
    }
)

export const countPageWithTag = unstable_cache(
    async (writer: writers, tag_id: string) => {
        let count = Math.ceil(
            (await countBlogContentWithTag(writer, tag_id)) / 10
        )
        if (count === 0) count = 1
        return count
    }
)
