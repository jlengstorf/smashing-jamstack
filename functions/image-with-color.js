const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { query } = JSON.parse(event.body);

  const { results } = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
      },
    },
  ).then((response) => response.json());

  const photo = results[0];

  const colorArray = await fetch(
    `${process.env.URL}/.netlify/functions/get-color-from-image`,
    {
      method: 'POST',
      body: JSON.stringify({ imageURL: photo.urls.small }),
    },
  ).then((response) => response.json());

  return {
    statusCode: 200,
    body: JSON.stringify({ photo, colorArray }),
  };
};
