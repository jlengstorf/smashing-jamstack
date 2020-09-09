const { getSignatures, addSignature } = require('./util/fauna');

exports.handler = async (_event, context) => {
  const { user } = context.clientContext;

  if (!user || !user.app_metadata) {
    return {
      statusCode: 401,
      body: 'Unauthorized',
    };
  }

  await addSignature(user.email);
  const signatures = await getSignatures();

  return {
    statusCode: 200,
    body: JSON.stringify(signatures),
  };
};
