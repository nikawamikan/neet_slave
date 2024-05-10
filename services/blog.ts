import * as repo from "@/repositories/blog"

const SLAVE = "slave"
const NEET = "neet"

export type writers = typeof SLAVE | typeof NEET

export async function fetchBlogList(
    writer: writers,
    limit: number,
    offset: number
) {
    return await repo.fetchBlogList(writer, limit, offset)
}

export async function fetchBlogListByTag(writer: writers, tag_id: string) {
    return await repo.fetchBlogListByTag(writer, tag_id)
}

export function fetchBlogIds(writer: writers) {
    return repo.fetchAllBlogIds(writer)
}

export async function countBlogContent(writer: writers) {
    return (await repo.fetchAllBlogIds(writer)).length
}

export async function countPage(writer: writers) {
    let count = Math.ceil((await countBlogContent(writer)) / 10)
    if (count === 0) count = 1
    return count
}

export async function fetchBlogContent(id: string) {
    return await repo.fetchBlogById(id)
}

export async function fetchBlogTags(writer: writers) {
    return await repo.fetchBlogTags(writer)
}
