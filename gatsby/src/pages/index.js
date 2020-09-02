import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';

export const query = graphql`
  query {
    allMoviesJson {
      nodes {
        title
        id
        poster
      }
    }
  }
`;

export default function Index({ data }) {
  const movies = data.allMoviesJson.nodes;

  return (
    <Layout>
      <h1>My Favorite Movies</h1>
      <div className="items">
        {movies.map((movie) => (
          <div className="item">
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </Layout>
  );
}
