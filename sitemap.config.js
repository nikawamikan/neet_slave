const ignorePaths = [
    "/slave-blog/post",
    "/slave-blog",
    "/neet-blog/post",
    "/neet-blog",
]


/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://slaveneet.com",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: "./out",
    exclude: ignorePaths,
}