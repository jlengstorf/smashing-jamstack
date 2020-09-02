import React from 'react';

export async function getStaticProps() {
  const { default: movies } = await import('../data/movies.json');

  return {
    props: {
      movies,
    },
  };
}

export default function Index({ movies }) {
  return (
    <>
      <h1>My Favorite Movies</h1>
      <div className="items">
        {movies.map((movie) => (
          <div className="item" key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
