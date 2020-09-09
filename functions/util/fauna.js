const fetch = require('node-fetch');

async function sendQuery({ query, variables = {} }) {
  return await fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
    },
    body: JSON.stringify({ query, variables }),
  }).then((response) => response.json());
}

async function getBoopCount() {
  const result = await sendQuery({
    query: `
      query {
        allBoops(_size: 10000) {
          data {
            time
          }
        }
      }
    `,
  });

  const boopCount = result.data.allBoops.data.length;

  return boopCount;
}

async function addBoop() {
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

exports.getBoopCount = getBoopCount;
exports.addBoop = addBoop;
