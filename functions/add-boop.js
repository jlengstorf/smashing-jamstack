const { addBoop, getBoopCount } = require('./util/fauna');

exports.handler = async () => {
  await addBoop();
  const count = await getBoopCount();

  return {
    statusCode: 200,
    body: JSON.stringify(count),
  };
};
