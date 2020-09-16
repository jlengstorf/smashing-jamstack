const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { movie_id, text } = JSON.parse(event.body);
  const { user } = context.clientContext;

  if (!user) {
    return {
      statusCode: 401,
      body: 'Unauthorized',
    };
  }

  await fetch('https://amusing-jackal-82.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
      'X-Hasura-Role': 'public',
      'X-Hasura-User-ID': user.sub,
    },
    body: JSON.stringify({
      query: `
        mutation MyMutation($movie: uuid!, $text: String!, $user: String!) {
          insert_comments(objects: {movie_id: $movie, text: $text, user_id: $user}) {
            affected_rows
          }
        }
        `,
      variables: {
        movie: movie_id,
        text,
        user: user.sub,
      },
    }),
  }).then((res) => res.json());

  return {
    statusCode: 200,
    body: 'ok',
  };
};
