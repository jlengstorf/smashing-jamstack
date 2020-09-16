const fetch = require('node-fetch');

module.exports = async () => {
  const { data } = await fetch(
    'https://lasting-snail-67.hasura.app/v1/graphql',
    {
      method: 'POST',
      headers: {
        'X-Hasura-Role': 'public',
        'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
      },
      body: JSON.stringify({
        query: `
          query {
            movies {
              id
              title
              body
              poster
            }
          }
        `,
      }),
    },
  ).then((response) => response.json());

  return data.movies;
};
