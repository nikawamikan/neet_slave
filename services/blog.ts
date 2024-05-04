import * as repo from "@/repositories/blog"

export async function fetchSlaveBlogDetails(limit: number, offset: number) {
    return await repo.fetchBlogDetails("nikawamikan", limit, offset)
}
export async function fetchNeetBlogDetails(limit: number, offset: number) {
    return await repo.fetchBlogDetails("nantka", limit, offset)
}

export function fetchSlaveBlogIds() {
    return repo.fetchAllBlogIds("nikawamikan")
}

export function fetchNeetBlogIds() {
    return repo.fetchAllBlogIds("nantka")
}

async function countBlogContent(writer: string) {
    return (await repo.fetchAllBlogIds(writer)).length
}

export async function countSlaveBlogContent() {
    return countBlogContent("nikawamikan")
}

export async function countNeetBlogContent() {
    return countBlogContent("nantka")
}

async function countPage(writer: string) {
    let count = Math.ceil((await countBlogContent(writer)) / 10)
    if (count === 0) count = 1
    return count
}

export async function countSlavePage() {
    return countPage("nikawamikan")
}

export async function countNeetPage() {
    return countPage("nantka")
}

export async function fetchBlogContent(id: string) {
    return await repo.fetchBlogById(id)
}
