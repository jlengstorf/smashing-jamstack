const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { movie_id } = JSON.parse(event.body);

  const { data } = await fetch(
    'https://amusing-jackal-82.hasura.app/v1/graphql',
    {
      method: 'POST',
      headers: {
        'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
        'X-Hasura-Role': 'public',
      },
      body: JSON.stringify({
        query: `
          query ($movie: uuid!) {
            comments(where: {movie_id: {_eq: $movie}}) {
              text
            }
          }
        `,
        variables: { movie: movie_id },
      }),
    }
  ).then((res) => res.json());

  return {
    statusCode: 200,
    body: JSON.stringify(data.comments),
  };
};
