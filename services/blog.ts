import * as repo from "@/repositories/blog"

const SLAVE = "nikawamikan"
const NEET = "nantka"

export async function fetchSlaveBlogList(limit: number, offset: number) {
    return await repo.fetchBlogList(SLAVE, limit, offset)
}
export async function fetchNeetBlogList(limit: number, offset: number) {
    return await repo.fetchBlogList(NEET, limit, offset)
}

export async function fetchSlaveBlogListByTag(tag_id: string) {
    return await repo.fetchBlogListByTag(SLAVE, tag_id)
}

export async function fetchNeetBlogListByTag(tag_id: string) {
    return await repo.fetchBlogListByTag(NEET, tag_id)
}

export function fetchSlaveBlogIds() {
    return repo.fetchAllBlogIds(SLAVE)
}

export function fetchNeetBlogIds() {
    return repo.fetchAllBlogIds(NEET)
}

async function countBlogContent(writer: string) {
    return (await repo.fetchAllBlogIds(writer)).length
}

export async function countSlaveBlogContent() {
    return countBlogContent(SLAVE)
}

export async function countNeetBlogContent() {
    return countBlogContent(NEET)
}

async function countPage(writer: string) {
    let count = Math.ceil((await countBlogContent(writer)) / 10)
    if (count === 0) count = 1
    return count
}

export async function countSlavePage() {
    return countPage(SLAVE)
}

export async function countNeetPage() {
    return countPage(NEET)
}

export async function fetchBlogContent(id: string) {
    return await repo.fetchBlogById(id)
}

export async function fetchSlaveBlogTags() {
    return await repo.fetchBlogTags(SLAVE)
}

export async function fetchNeetBlogTags() {
    return await repo.fetchBlogTags(NEET)
}
