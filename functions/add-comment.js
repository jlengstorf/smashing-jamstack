const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { movie_id, text } = JSON.parse(event.body);
  const { user } = context.clientContext;
  console.log(context);

  if (!user) {
    return {
      statusCode: 401,
      body: 'Unauthorized',
    };
  }

  const data = await fetch('https://lasting-snail-67.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'X-Hasura-Role': 'user',
      'X-Hasura-User-ID': user.sub,
    },
    body: JSON.stringify({
      query: `
          mutation ($movie: uuid! $text: String!, $user: String!) {
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
  }).then((response) => response.json());

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
