import { title } from "@/components/primitives"

export default function NotFound() {
    return (
        <>
            <title>404</title>
            <h1 className={title()}>404</h1>
            <p>私の知る限りそのページは存在しないようです。</p>
        </>
    )
}
