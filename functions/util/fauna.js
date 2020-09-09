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

async function getBoopCount() {
  return await sendQuery({
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
        allGuestBook {
          data {
            name
            date
          }
        }
      }
    `,
  })
    .then((response) => response.json())
    .then((result) => result.data.allGuestBook.data);
}

async function addSignature(name) {
  await sendQuery({
    query: `
      mutation ($name: String! $date: Time!) {
        createGuestBook(data: {
          name: $name,
          date: $time
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
