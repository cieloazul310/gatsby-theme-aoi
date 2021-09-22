module.exports = (options) => {
  return {
    siteMetadata: {
      title: `Gatsby Theme TypeScript Material-UI`,
      description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
      author: `@gatsbyjs`,
      siteUrl: '',
      baseUrl: '',
      keywords: ['Gatsby', 'TypeScript', 'Material-UI'],
      lang: '',
      social: {
        mail: '',
        twitter: '',
        github: '',
        facebook: '',
        gitlab: '',
        linkedin: '',
        medium: '',
        pocket: '',
        tumblr: '',
        instagram: '',
        vimeo: '',
        youtube: '',
      },
    },
    plugins: [
      {
        resolve: `gatsby-theme-aoi-top-layout`,
        options: {
          siteId: options.siteId,
        },
      },
      `gatsby-plugin-react-helmet`,
    ],
  };
};
