import React from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
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
            <Card
                className="flex max-w-96 bg-default-100 bg-opacity-20"
                isHoverable
                isFooterBlurred
                isPressable
            >
                <div>
                    <Image
                        alt="Card background"
                        className="h-52 p-2"
                        src={blog.thumbnail.url}
                        width={400}
                        height={192}
                    />
                    <CardFooter className="flex w-full flex-auto flex-col bg-primary-100  bg-opacity-50 px-4 py-2 pb-0">
                        <h2 className="pb-2 text-large font-bold">
                            {blog.title}
                        </h2>
                        <div className="flex w-full justify-between">
                            <div className="">
                                {blog.tags.map((tag) => (
                                    <TagChip key={tag.id} tag={tag} />
                                ))}
                            </div>
                            <small>{toJpDateStr(blog.publishedAt)}</small>
                        </div>
                        <p className="line-clamp-2 h-[4em] w-full py-3 text-left">
                            {blog.description}
                        </p>
                    </CardFooter>
                </div>
            </Card>
        </NextLink>
    )
}

// 左にサムネイルがあるカード
export function SmallBlogCard({ blog, baseUrl, className }: Prop) {
    return (
        <NextLink href={`${baseUrl}/${blog.id}`} passHref>
            isPressable
            <Card
                className={`min-h-40 py-4 ${className}`}
                isHoverable
                isPressable
            >
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
