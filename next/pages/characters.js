import React from 'react';

export async function getStaticProps() {
  const characters = await fetch(
    'https://rickandmortyapi.com/api/character/1,2,265,183'
  ).then((res) => res.json());

  return {
    props: {
      characters,
    },
  };
}

export default function Index({ characters }) {
  return (
    <>
      <h1>Rick & Morty Characters</h1>
      <div className="items">
        {characters.map((character) => (
          <div className="item" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
