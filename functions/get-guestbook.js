const { getSignatures } = require('./util/fauna');

exports.handler = async () => {
  const signatures = await getSignatures();

  return {
    statusCode: 200,
    body: JSON.stringify(signatures),
  };
};
