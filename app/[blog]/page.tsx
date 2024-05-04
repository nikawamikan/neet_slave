import Redirect from "@/components/redirect"

export async function generateStaticParams() {
    return [{ blog: "slave-blog" }, { blog: "neet-blog" }]
}

export default function Page() {
    return <Redirect />
}
