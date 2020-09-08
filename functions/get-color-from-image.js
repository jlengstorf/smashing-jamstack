const jimp = require('jimp');
const color = require('color-thief-jimp');

exports.handler = async (event) => {
  const { imageURL } = JSON.parse(event.body);

  const image = await jimp.read(imageURL);
  const dominantColor = color.getColor(image);

  return {
    statusCode: 200,
    body: JSON.stringify(dominantColor),
  };
};
