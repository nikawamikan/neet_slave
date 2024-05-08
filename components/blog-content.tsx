import { Blog } from "@/types/microcms"
import { load } from "cheerio"
import hljs from "highlight.js"
import "highlight.js/styles/tokyo-night-dark.css"
import "@/styles/blog.css"

// import "@/styles/blog.css"

export function BlogContent(params: { data: Blog }) {
    const { data } = params
    let content = data.content
    if (!data.content) {
        content = "記事ないっぽい"
    }
    const $ = load(content)
    $("pre code").each((_, elm) => {
        const className = $(elm).attr("class")
        const language = className?.replace("language-", "")
        let result
        if (language) {
            try {
                result = hljs.highlight($(elm).text(), { language })
            } catch {
                result = hljs.highlightAuto($(elm).text())
            }
        } else {
            result = hljs.highlightAuto($(elm).text())
        }
        $(elm).html(result.value)
        $(elm).addClass("hljs")
    })
    content = $.html()

    return (
        <div
            className="blogContent mb-36"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}
