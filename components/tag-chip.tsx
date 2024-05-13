import { Chip } from "@nextui-org/chip"
import { Tag } from "@/types/microcms"
import NextLink from "next/link"

type Prop = {
    className?: string
    baseUrl: string
    tag: Tag
}

export function TagChip({ className, baseUrl, tag }: Prop) {
    return (
        <Chip
            className={`m-2 ${className ? className : ""}`}
            color="primary"
            size="md"
        >
            <NextLink href={`${baseUrl}/${tag.id}`}>{tag.name}</NextLink>
        </Chip>
    )
}
