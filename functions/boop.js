const fetch = require('node-fetch');

async function sendQuery({ query, variables = {} }) {
  return await fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
    },
    body: JSON.stringify({ query, variables }),
  });
}

exports.handler = async (event) => {
  const body = event.body ? JSON.parse(event.body) : {};

  if (body.add) {
    await sendQuery({
      query: `
        mutation ($time: Time!) {
          createBoop(data: { time: $time }) {
            time
          }
        }
      `,
      variables: { time: new Date().toISOString() },
    });
  }

  const count = await sendQuery({
    query: `
      query {
        allBoops {
          data {
            _id
          }
        }
      }
    `,
  })
    .then((response) => response.json())
    .then((result) => result.data.allBoops.data.length);

  return {
    statusCode: 200,
    body: JSON.stringify(count),
  };
};
