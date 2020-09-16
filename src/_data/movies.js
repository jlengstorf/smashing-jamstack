// TODO load movies from Hasura
const fetch = require('node-fetch');

/*
query {
  movies {
    id
    title
    body
    poster
  }
}

 */

module.exports = async () => {
  const response = await fetch(
    'https://amusing-jackal-82.hasura.app/v1/graphql',
    {
      method: 'POST',
      headers: {
        'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
      },
      body: JSON.stringify({
        query: `
          query {
            movies {
              id
              title
              body
              poster
            }
          }
        `,
      }),
    }
  ).then((res) => res.json());

  console.log(response);

  return response.data.movies;
  // return [
  //   {
  //     id: 1,
  //     title: 'Test 1',
  //     poster: 'https://jason.af/fem/img/batman-v-booperman.jpg',
  //     body:
  //       'Donec enim set elit donec donec neque eu donec. Fritos elementum gravida adipiscing, sem lacus feugiat convallis nub donec. Tellus mattis gravida, set vel neque ipsum donec ligula donec sem viverra In lacus.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Test 2',
  //     poster: 'https://jason.af/fem/img/batman-v-booperman.jpg',
  //     body:
  //       'Donec enim set elit donec donec neque eu donec. Fritos elementum gravida adipiscing, sem lacus feugiat convallis nub donec. Tellus mattis gravida, set vel neque ipsum donec ligula donec sem viverra In lacus.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Test 3',
  //     poster: 'https://jason.af/fem/img/batman-v-booperman.jpg',
  //     body:
  //       'Donec enim set elit donec donec neque eu donec. Fritos elementum gravida adipiscing, sem lacus feugiat convallis nub donec. Tellus mattis gravida, set vel neque ipsum donec ligula donec sem viverra In lacus.',
  //   },
  //   {
  //     id: 4,
  //     title: 'Test 4',
  //     poster: 'https://jason.af/fem/img/batman-v-booperman.jpg',
  //     body:
  //       'Donec enim set elit donec donec neque eu donec. Fritos elementum gravida adipiscing, sem lacus feugiat convallis nub donec. Tellus mattis gravida, set vel neque ipsum donec ligula donec sem viverra In lacus.',
  //   },
  // ];
};
