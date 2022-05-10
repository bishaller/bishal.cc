module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true
  },
  siteMetadata: {
    title: "Bishal Mishra, Product Designer | UX Designer",
    titleTemplate: "Bishal UX Designer",
    description:
      "Bishal is a UX and a Product Designer experienced in designing cross-platform applications and various user bases from small to large scale.",
    url: "https://bishal.cc", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@bishaller",
    author: `@bishaller`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-json`,
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
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
      },
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
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/about/`, `/writings/`],
      },
    },
  ],
}
