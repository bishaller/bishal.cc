module.exports = {
  siteMetadata: {
    title: "Bishal Mishra, UX & Product Designer",
    titleTemplate: "Bishal UX Designer",
    description:
      "Bishal is a UX and a Product Designer experienced in designing cross-platform applications and various user bases from small to large scale.",
    url: "https://bishal.cc", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@bishaller",
    author: `@bishaller`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: false,
        basePath: `/notes`,
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    { resolve: `gatsby-theme-blog` },
  ],
}
