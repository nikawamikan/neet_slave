import * as cheerio from "cheerio"

const renderToc = (body: string) => {
    const $ = cheerio.load(body)
    const headings = $("h1, h2, h3").toArray()
    const toc = headings.map(
        (data: { name: string; children: any[]; attribs: any }) => ({
            name: data.name,
            text: data.children[0].data as string,
            id: data.attribs.id as string,
        })
    )

    return toc
}

function TocItem(props: { data: { name: string; id: string; text: string } }) {
    const { data } = props
    const indent =
        data.name === "h1"
            ? "indent-4"
            : data.name === "h2"
              ? "indent-8"
              : "indent-12"
    // レベルに応じてインデントをつける
    return (
        <li className={indent}>
            <a href={`#${data.id}`}>{data.text}</a>
        </li>
    )
}

export function Toc(props: { body: string }) {
    const { body } = props
    const toc = renderToc(body)
    return (
        <aside className="top-20">
            <h2 className="text-lg font-bold">目次</h2>
            {toc.map((data) => TocItem({ data }))}
        </aside>
    )
}
