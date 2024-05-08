import { Chip } from "@nextui-org/chip"
import NextLink from "next/link"

export function TagChip({ baseUrl, tag }: { baseUrl: string; tag: string }) {
    return (
        <Chip color="secondary" size="md">
            <NextLink href={`${baseUrl}/${tag}`}></NextLink>
        </Chip>
    )
}
