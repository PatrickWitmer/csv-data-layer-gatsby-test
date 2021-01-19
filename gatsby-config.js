module.exports = {
  siteMetadata: {
    title: 'Testing CSV',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'orders',
        path: 'data',
      },
    },
  ],
};
