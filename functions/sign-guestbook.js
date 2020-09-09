const { getSignatures, addSignature } = require('./util/fauna');

exports.handler = async (_event, context) => {
  console.log(context.clientContext);
  const { user } = context.clientContext;
  console.log(user);

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
