const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { query } = JSON.parse(event.body);

  const { results } = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
      },
    }
  ).then((response) => response.json());

  return {
    statusCode: 200,
    body: JSON.stringify(results),
  };
};
