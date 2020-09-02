import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';

export const query = graphql`
  query {
    rickAndMorty {
      charactersByIds(ids: "1,2,265,183") {
        name
        id
        image
      }
    }
  }
`;

export default function Characters({ data }) {
  const characters = data.rickAndMorty.charactersByIds;

  return (
    <Layout>
      <h1>Rick & Morty Characters</h1>
      <div className="items">
        {characters.map((character) => (
          <div className="item">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        ))}
      </div>
    </Layout>
  );
}
