/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://besttechnologiesltd.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/staff-qr"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/staff-qr"],
      },
    ],
  },
};
