const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { movie_id } = JSON.parse(event.body);

  const { data } = await fetch(
    'https://lasting-snail-67.hasura.app/v1/graphql',
    {
      method: 'POST',
      headers: {
        'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
        'X-Hasura-Role': 'public',
      },
      body: JSON.stringify({
        query: `
        query ($movie: uuid!) {
          comments(where: {movie: {id: {_eq: $movie}}}) {
            text
          }
        }
      `,
        variables: {
          movie: movie_id,
        },
      }),
    },
  ).then((response) => response.json());

  return {
    statusCode: 200,
    body: JSON.stringify(data.comments),
  };
};
