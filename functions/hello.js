const qs = require('querystring');

exports.handler = async (event) => {
  let name = 'friend';
  try {
    const body = JSON.parse(event.body);
    name = body.name || 'friend';
  } catch (err) {
    name = qs.parse(event.body).name || 'friend';
    // quietly fail
  }

  return {
    statusCode: 200,
    body: `Hello ${name}!`,
  };
};
