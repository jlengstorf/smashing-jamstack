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

async function getSignatures() {
  return await sendQuery({
    query: `
      query {
        allGuestBook(_size: 10000) {
          data {
            name
            date
          }
        }
      }
    `,
  }).then((result) => result.data.allGuestBook.data);
}

async function addSignature(name) {
  return await sendQuery({
    query: `
      mutation ($name: String! $date: Time!) {
        createGuestBook(data: {
          name: $name,
          date: $date
        }) {
          _id
        }
      }
    `,
    variables: { name, date: new Date().toISOString() },
  });
}

exports.getBoopCount = getBoopCount;
exports.addBoop = addBoop;
exports.getSignatures = getSignatures;
exports.addSignature = addSignature;
