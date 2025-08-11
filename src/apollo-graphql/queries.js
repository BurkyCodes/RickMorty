import { gql } from "@apollo/client";

export const getCharacters = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        gender
        image
      }
    }
  }
`;

export const getEpisodes = gql`
  query Episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        id
        episode
        name
        air_date
      }
      info {
        count
      }
    }
  }
`;

export const getEpisodeById = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      characters {
        id
        name
        gender
        image
      }
      air_date
      episode
      name
    }
  }
`;

export const getCharacterById = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      image
      gender
      species
      origin {
        dimension
      }
    }
  }
`;
