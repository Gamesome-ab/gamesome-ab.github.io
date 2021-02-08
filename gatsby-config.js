module.exports = {
  siteMetadata: {
    title: `Gamesome`,
    description: `Gamesome AB is a software company. We offer consultant services and our own products.`,
    author: "@ahmadgame",
    siteUrl: "https://gamesome.io",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gamesome`,
        short_name: `Gamesome`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#DD2D5A`,
        display: `minimal-ui`,
        icon: `src/images/Gamesome-inverted.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`, // needs to be after manifest.
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146800326-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        anonymize: true,
        respectDNT: true,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
  ],
};
