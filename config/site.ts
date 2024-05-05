export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Neet Slave Blog",
    description:
        "社畜とニートがブログを書くサイトです。社畜は技術系とか自転車とか書きたいこと書いて、ニートはお絵かきとか日常とか書きたいこと書いて。そんな感じです。",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "SlaveBlog",
            href: "/slave-blog/1",
        },
        {
            label: "NeetBlog",
            href: "/neet-blog/1",
        },
        {
            label: "About",
            href: "/about",
        },
    ],
    siteItems: {
        slaveBlog: "/slave-blog/post",
        neetBlog: "/neet-blog/post",
    },
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
    },
    ogpBaseImages: {
        top: "https://mikan-box.imgix.net/bankan27.png",
        slaveBlog: "https://mikan-box.imgix.net/bankan27.png",
        neetBlog: "https://mikan-box.imgix.net/bankan27.png",
    },
}
