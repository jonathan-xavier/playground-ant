export type IAnimeList = {
  id: number;
  title: {
    romaji: string;
    english: string | null;
    native: string;
  };
  coverImage: {
    large: string;
    medium: string;
    color: string | null;
  };
  description: string;
  episodes: number | null;
  status: "FINISHED" | "RELEASING" | "CANCELLED" | "HIATUS";
  season: "WINTER" | "SPRING" | "SUMMER" | "FALL" | null;
  seasonYear: number | null;
  genres: string[];
  averageScore: number | null;
  popularity: number;
  studios: {
    edges: {
      node: {
        name: string;
      };
    }[];
  };
};

export type IAnimePage = {
  data: {
    Media: Anime[];
  };
};

export type AnimeTitle = {
  romaji: string;
  native: string;
  english: string | null;
};
export type Date = {
  year: number | null;
  month: number | null;
  day: number | null;
};

export type CoverImage = {
  extraLarge: string;
  color: string;
};

export type Trailer = {
  id: string;
  site: string;
  thumbnail: string;
};

export type ExternalLink = {
  site: string;
  url: string;
};

export type Ranking = {
  rank: number;
  type: string;
  season: string | null;
};

export type Studio = {
  nodes: {
    name: string;
    siteUrl: string;
  }[];
};

export type Relation = {
  edges: {
    relationType: string;
    node: {
      id: number;
      title: AnimeTitle;
      siteUrl: string;
    };
  }[];
};

export type AiringSchedule = {
  nodes: {
    episode: number;
    airingAt: number;
  }[];
};

export type Anime = {
  airingSchedule: AiringSchedule;
  averageScore: number;
  countryOfOrigin: string;
  coverImage: CoverImage;
  description: string;
  duration: number;
  endDate: Date;
  episodes: number;
  externalLinks: ExternalLink[];
  format: string;
  genres: string[];
  id: number;
  popularity: number;
  rankings: Ranking[];
  relations: Relation;
  season: string;
  source: string;
  startDate: Date;
  status: string;
  studios: Studio;
  synonyms: string[];
  title: AnimeTitle;
  trailer: Trailer;
};
