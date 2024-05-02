import { GetStaticProps, GetStaticPropsContext } from "next"
import { cmsClient } from "@/lib/microcms"

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    // getStaticPathsで用意した[id].tsxのid部分が入っています
    const id = context.params?.id

    // microCMSのAPIを叩きます
    const data = await cmsClient
        .get({
            endpoint: "blog",
            // ページ用に1件取得するのでcontentIdを指定します
            contentId: String(id),
        })
        .catch((err) => console.error(err))

    if (!data) {
        return {
            // データがないとき404ページになります
            notFound: true,
        }
    }

    return {
        props: {
            data,
        },
    }
}
