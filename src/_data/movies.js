// TODO load movies from Hasura
const fetch = require('node-fetch');

/*
query {
  movies {
    id
    title
    body
    poster
  }
}

 */

module.exports = async () => {
  const response = await fetch(
    'https://amusing-jackal-82.hasura.app/v1/graphql',
    {
      method: 'POST',
      headers: {
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
    }
  ).then((res) => res.json());

  console.log(response);

  return response.data.movies;
};
