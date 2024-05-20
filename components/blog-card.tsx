import React from "react"
import { Card, CardHeader, CardBody } from "@nextui-org/card"
// import Image from "next/image"
import { Image } from "@/components/image"
// import { Image } from "@nextui-org/image"
import NextLink from "next/link"
import { toJpDateStr } from "@/lib/date"
import { TagChip } from "@/components/tag-chip"
import { Blog } from "@/types/microcms"

type Prop = {
    blog: Blog
    baseUrl: string
    className?: string
}

export function BlogCard({ blog, baseUrl, className }: Prop) {
    return (
        <NextLink className={className} href={`${baseUrl}/${blog.id}`} passHref>
            <Card className="flex w-full py-4" isHoverable>
                <CardBody className="place-items-center overflow-visible py-2">
                    <div className="relative">
                        <Image
                            alt="Card background "
                            className="h-48 rounded-xl object-cover"
                            src={blog.thumbnail.url}
                            width={400}
                            height={192}
                        />
                        <h4 className="absolute left-1 top-1 z-10 rounded-full bg-primary px-2 text-large font-bold text-primary-foreground">
                            {blog.title}
                        </h4>
                    </div>
                </CardBody>
                <CardHeader className="flex w-full flex-auto flex-col px-4 pb-0 pt-2">
                    <div className="flex w-full justify-between">
                        <div className="">
                            {blog.tags.map((tag) => (
                                <TagChip key={tag.id} tag={tag} />
                            ))}
                        </div>
                        <small className="text-default-500">
                            {toJpDateStr(blog.publishedAt)}
                        </small>
                    </div>
                    <div>
                        <p className="text-left text-default-500">
                            {blog.description}
                        </p>
                    </div>
                </CardHeader>
            </Card>
        </NextLink>
    )
}

// 左にサムネイルがあるカード
export function SmallBlogCard({ blog, baseUrl, className }: Prop) {
    return (
        <NextLink href={`${baseUrl}/${blog.id}`} passHref>
            <Card className={`min-h-40 py-4 ${className}`} isHoverable>
                <CardBody className="overflow-visible py-2">
                    <div className="flex flex-row">
                        <div className="basis-1/4">
                            <Image
                                alt="Card background"
                                className="rounded-xl object-cover"
                                src={blog.thumbnail.url}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className="basis-3/4">
                            <div className="flex-col items-start px-4 pb-0 pt-2">
                                {/* ここらへんにタグつける */}
                                <small className="text-default-500">
                                    {toJpDateStr(blog.publishedAt)}
                                </small>
                                <h4 className="text-large font-bold">
                                    {blog.title}
                                </h4>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </NextLink>
    )
}
