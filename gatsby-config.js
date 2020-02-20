module.exports = options => {
  return {
    siteMetadata: {
      title: `Gatsby Theme TypeScript Material-UI`,
      description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
      author: `@gatsbyjs`,
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
        youtube: ''
      }
    },
    plugins: [
      `gatsby-plugin-graphql-codegen`,
      `gatsby-plugin-material-ui`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`
    ]
  };
};
