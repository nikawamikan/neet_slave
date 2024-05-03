import { Blog } from "@/models/microcms"
import { load } from "cheerio"
import hljs from "highlight.js"
import "highlight.js/styles/tokyo-night-dark.css"
import "@/styles/blog.css"

// import "@/styles/blog.css"

export function BlogContent(params: { data: Blog }) {
    const { data } = params
    const $ = load(data.content)
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
    const content = $.html()

    return (
        <div
            className="blogContent mb-36"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}
