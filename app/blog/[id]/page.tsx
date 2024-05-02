import { cmsClient } from "@/lib/microcms"
import { Blog } from "@/model/microcms"
type Params = {
    id: string
}

export async function generateStaticParams() {
    const data = await cmsClient.getAllContents({
        endpoint: "blog",
        queries: { fields: "id" },
    })
    console.log(data)

    // ページIDをすべて取得して返す
    return data
}

export default async function Page(params: { params: Params }) {
    const data: Blog = await cmsClient.get({
        endpoint: "blog",
        contentId: params.params.id,
    })
    console.log(data.createdAt.toString())
    return (
        <>
            <div>title: {data.title}</div>
            <br />
            <div>created at: {data.createdAt.toString()}</div>
            <br />
            <div>id: {data.id}</div>
            <br />
            <div>description: {data.description}</div>
            <br />
            {/*  data.content を HTML として表示 */}
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
            <br />
        </>
    )
}
