import { Blog } from "@/types/microcms"
import { BlogCard } from "./blog-card"
import { siteConfig } from "@/config/site"

export function BlogCardList({ blogs }: { blogs: Array<Blog> }) {
    if (blogs.length === 0) {
        return <p>記事がありません</p>
    }

    return (
        <div className="grid grid-cols-1 gap-4 pt-20 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    baseUrl={
                        blog.writer[0] === "slave"
                            ? siteConfig.siteItems.postPage.slaveBlog
                            : siteConfig.siteItems.postPage.neetBlog
                    }
                    id={blog.id}
                    imageUrl={blog.thumbnail.url}
                    title={blog.title}
                    date={blog.publishedAt}
                />
            ))}
        </div>
    )
}
