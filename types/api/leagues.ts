import { APIIcon, APIPaging } from "types/api";
import { APIPlayerRanking } from "types/api/players";

/** /leagues */
export interface APILeagueList {
  items: APILeague[];
  paging: APIPaging;
}

/** /leagues/{leagueId} */
export interface APILeague {
  id: number;
  name: string;
  iconUrls: APIIcon;
}

/** /leagues/{leagueId}/seasons/{seasonId} */
export interface APIPlayerSeasonRankingList {
  items: Omit<APIPlayerRanking, "league">[];
  paging: APIPaging;
}

/** /leagues/{leagueId}/seasons */
export interface APILeagueSeasonList {
  items: {
    id: string;
  }[];
  paging: APIPaging;
}

/** /warleagues */
export interface APIWarLeagueList {
  items: APIWarLeague[];
  paging: APIPaging;
}

/** /warleagues/{leagueId} */
export interface APIWarLeague {
  id: number;
  name: string;
}
