module.exports = {
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'RickAndMorty',
        fieldName: 'rickAndMorty',
        url: 'https://rickandmortyapi.com/graphql/',
      },
    },
  ],
};
