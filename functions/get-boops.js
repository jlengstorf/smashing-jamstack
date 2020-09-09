const { getBoopCount } = require('./util/fauna');

exports.handler = async () => {
  const count = await getBoopCount();

  return {
    statusCode: 200,
    body: JSON.stringify(count),
  };
};
