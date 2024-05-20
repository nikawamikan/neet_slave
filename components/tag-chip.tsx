import { Chip } from "@nextui-org/chip"
import { Tag } from "@/types/microcms"
import NextLink from "next/link"

type Prop = {
    className?: string
    baseUrl?: string
    tag: Tag
}

export function TagChip({ className, baseUrl, tag }: Prop) {
    return (
        <Chip
            className={`mr-2 ${className ? className : ""}`}
            color="primary"
            size="md"
        >
            {baseUrl ? (
                <NextLink href={`${baseUrl}/${tag.id}`}>{tag.name}</NextLink>
            ) : (
                <div>{tag.name}</div>
            )}
        </Chip>
    )
}
