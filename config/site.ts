export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Neet Slave Blog",
	description: "Make beautiful websites regardless of your design experience.",
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
};
