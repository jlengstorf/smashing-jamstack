const jimp = require('jimp');
const colorThief = require('color-thief-jimp');

exports.handler = async (event) => {
  const { imageURL } = JSON.parse(event.body);

  const image = await jimp.read(imageURL);
  const dominantColor = colorThief.getColor(image);

  return {
    statusCode: 200,
    body: JSON.stringify(dominantColor),
  };
};
