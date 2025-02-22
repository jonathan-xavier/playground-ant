import { httpClient } from "../http-client/http-client";
import { IAnimePage } from "../interfaces/anime";



// const query = `
//   query {
//     Page(page: 1, perPage: 3) {
//       media(type: ANIME, sort: POPULARITY_DESC) {
//         id
//         title {
//           romaji
//           english
//           native
//         }
//         coverImage {
//           large
//         }
//       }
//     }
//   }
// `;

const query = `
query {
  Media(id: 180812) {
    id
    title {
      romaji
      native
      english
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    status
    season
    format
    genres
    synonyms
    duration
    popularity
    episodes
    source
    countryOfOrigin
    averageScore
    description
    coverImage {
      extraLarge
      color
    }
    trailer {
      id
      site
      thumbnail
    }
    externalLinks {
      site
      url
    }
    rankings {
      rank
      type
      season
    }
    studios {
      nodes {
        name
        siteUrl
      }
    }
    relations {
      edges {
        relationType
        node {
          id
          title {
            romaji
            native
            english
          }
          siteUrl
        }
      }
    }
    airingSchedule {
      nodes {
        episode
        airingAt
      }
    }
  }
}
`
;
const getSearchAnime = async (searchQuery: string) => {
  return httpClient.get(`https://api.jikan.moe/v4/anime?q=${searchQuery}`);
};
// async getGenres(genre: string) {
//     return httpClient.get(`https://api.jikan.moe/v4/genres/anime`);

// }

const getAllAnimeAl = async () => {
  const { data } = await httpClient.post<IAnimePage>("https://graphql.anilist.co",{ query },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  console.log(data)
    
  return data.data.Media;
};

export { getSearchAnime, getAllAnimeAl };
