export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "SlaveBlog",
			href: "/slave-blog",
		},
		{
			label: "NeetBlog",
			href: "/neet-blog",
		},
		{
			label: "About",
			href: "/about",
		},
	],
	siteItems: {
		slaveBlog: "/slave-blog/post",
	},
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev",
	},
};
