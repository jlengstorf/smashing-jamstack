exports.handler = async (event) => {
  const { name = 'friend' } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: `Hello ${name}!`,
  };
};
