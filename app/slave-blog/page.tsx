import { title } from "@/components/primitives"
import { fetchBlogDetails } from "@/repositories/blog"
import { BlogCard } from "@/components/blog-card"
// 一覧表示したい感じのページ

export default async function BlogPage() {
    const data = await fetchBlogDetails("nikawamikan")
    console.log(data)

    return (
        <div>
            <h1 className={title()}>社畜ブログ</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {data?.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        params={{
                            id: blog.id,
                            imageUrl: blog.thumbnail.url,
                            title: blog.title,
                            date: blog.publishedAt,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
