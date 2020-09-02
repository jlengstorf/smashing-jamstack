const fetch = require('node-fetch');

module.exports = async () => {
  const characters = await fetch(
    'https://rickandmortyapi.com/api/character/1,2,265,183'
  ).then((res) => res.json());

  // transform the data
  const transformed = characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      isMyFavorite: character.name === 'Pickle Rick',
    };
  });

  return transformed;
};
