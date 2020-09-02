const fetch = require('node-fetch');

module.exports = async () => {
  const characters = await fetch(
    'https://rickandmortyapi.com/api/character/1,2,265,183'
  ).then((res) => res.json());

  return characters;
};
