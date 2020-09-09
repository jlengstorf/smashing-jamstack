const { getSignatures, addSignature } = require('./util/fauna');

exports.handler = async (_event, context) => {
  const { user } = context.clientContext;

  if (!user || !user.app_metadata) {
    return {
      statusCode: 401,
      body: 'Unauthorized',
    };
  }

  const name = user.user_metadata.full_name || user.email;
  const result = await addSignature(name);

  console.log(result.errors);

  const signatures = await getSignatures();

  return {
    statusCode: 200,
    body: JSON.stringify(signatures),
  };
};
