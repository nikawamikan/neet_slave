import React from "react"
import { Card, CardHeader, CardBody } from "@nextui-org/card"
// import Image from "next/image"
import { Image } from "@/components/image"
// import { Image } from "@nextui-org/image"
import NextLink from "next/link"

type Prop = {
    baseUrl: string
    id: string
    imageUrl: string
    title: string
    date: string
    className?: string
}

export function BlogCard({
    baseUrl,
    id,
    imageUrl,
    title,
    date,
    className,
}: Prop) {
    return (
        <NextLink className={className} href={`${baseUrl}/${id}`} passHref>
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

// 左にサムネイルがあるカード
export function SmallBlogCard({
    baseUrl,
    id,
    imageUrl,
    title,
    date,
    className,
}: Prop) {
    return (
        <NextLink href={`${baseUrl}/${id}`} passHref>
            <Card className={`min-h-40 py-4 ${className}`}>
                <CardBody className="overflow-visible py-2">
                    <div className="flex flex-row">
                        <div className="basis-1/4">
                            <Image
                                alt="Card background"
                                className="rounded-xl object-cover"
                                src={imageUrl}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className="basis-3/4">
                            <div className="flex-col items-start px-4 pb-0 pt-2">
                                {/* ここらへんにタグつける */}
                                <small className="text-default-500">
                                    {date}
                                </small>
                                <h4 className="text-large font-bold">
                                    {title}
                                </h4>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </NextLink>
    )
}
