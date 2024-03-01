const SITE_URL = process.env.SITE_URL || 'https://www.pingorarust.com'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000,
    alternateRefs: [
        {
            href: SITE_URL,
            hreflang: 'en-US',
        },
        // {
        //     href: SITE_URL + '/de-DE',
        //     hreflang: 'de-DE',
        // },
        // {
        //     href: SITE_URL + '/zh-CN',
        //     hreflang: 'zh-CN',
        // },
    ],
    robotsTxtOptions: {
        policies: [
          {
            userAgent: '*',
            disallow: ['/api'],
          },
        ],
      },
}