import React from "react"
import { Card, CardHeader, CardBody } from "@nextui-org/card"
// import Image from "next/image"
import { Image } from "@/components/image"
// import { Image } from "@nextui-org/image"
import NextLink from "next/link"

export function BlogCard({
    params,
}: {
    params: {
        baseUrl: string
        id: string
        imageUrl: string
        title: string
        date: string
    }
}) {
    const { baseUrl, id, imageUrl, title, date } = params
    return (
        <NextLink href={`${baseUrl}/${id}`} passHref>
            <Card className="py-4">
                <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                    {/* ここらへんにタグつける */}
                    <small className="text-default-500">{date}</small>
                    <h4 className="text-large font-bold">{title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="rounded-xl object-cover"
                        src={imageUrl}
                        width={320}
                        height={200}
                    />
                </CardBody>
            </Card>
        </NextLink>
    )
}
