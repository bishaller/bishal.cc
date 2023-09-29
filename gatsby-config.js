module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true,
    DEV_SSR: false,
  },
  siteMetadata: {
    title: "Bishal Mishra — Product Designer, UX Designer, bishal.cc",
    titleTemplate: "Bishal UX Designer",
    description:
      "Bishal is a UX and a Product Designer experienced in designing cross-platform applications and various user bases from small to large scale.",
    siteUrl: "https://bishal.cc", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@bishaller",
    author: `@bishaller`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
          trackingIds: [
              "UA-149450148-1", // Google Analytics / GA
          ],
          pluginConfig: {
              head: true,
          },
      },
  },
  {
    resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-lottie"]
      },
  },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-json`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.bishal.cc',
        sitemap: 'https://www.bishal.cc/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
        src: 'https://browser.sentry-cdn.com/5.15.4/bundle.min.js',
        integrity:
          'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
        crossorigin: 'anonymous',
        onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-gifs"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/json`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bishal Mishra`,
        short_name: `Bishal`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2A60EC`,
        display: `minimal-ui`,
        icon: `src/images/bishal_mishra_favicon.png`, // This path is relative to the root of the site.
        cache_busting_mode: "none",
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/about/`, `/writings/`],
      },
    },
  ],
}
