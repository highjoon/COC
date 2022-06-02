import { APIBadge, APIPaging, APISeason } from "types/api";
import { APILabel } from "types/api/labels";
import { APILeague } from "types/api/leagues";

/** /players/{playerTag} */
export interface APIPlayer {
  name: string;
  tag: string;
  townHallLevel: number;
  townHallWeaponLevel?: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel?: number;
  versusTrophies?: number;
  bestVersusTrophies?: number;
  versusBattleWins?: number;
  versusBattleWinCount?: number;
  donations: number;
  donationsReceived: number;
  role?: string;
  warPreference?: "in" | "out";
  clan?: APIPlayerClan;
  league?: APILeague;
  legendStatistics?: APILegendStatistics;
  achievements: APIPlayerAchievement[];
  troops: APIPlayerItem[];
  heroes: APIPlayerItem[];
  spells: APIPlayerItem[];
  labels: APILabel[];
}

export interface APILegendStatistics {
  previousSeason?: APISeason;
  previousVersusSeason?: APISeason;
  bestVersusSeason?: APISeason;
  currentSeason?: APISeason;
  bestSeason?: APISeason;
  legendTrophies: number;
}

export interface APIPlayerClan {
  tag: string;
  name: string;
  clanLevel: number;
  badgeUrls: APIBadge;
}

export interface APIPlayerAchievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string | null;
  village: "home" | "builderBase";
}

export interface APIPlayerItem {
  name: string;
  level: number;
  maxLevel: number;
  superTroopIsActive?: boolean;
  village: "home" | "builderBase";
}

/** /players/{playerTag}/verifytoken */
export interface APIVerifyToken {
  tag: string;
  token: string;
  status: "ok" | "invalid";
}

// ************* LOCATIONS ************* //

/** /locations */
export interface APILocationList {
  items: APILocation[];
  paging: APIPaging;
}

/** /locations/{locationId} */
export interface APILocation {
  localizedName?: string;
  id: number;
  name: string;
  isCountry: boolean;
  countryCode?: string;
}

/** /locations/{locationId}/rankings/clans */
export interface APIClanRankingList {
  items: APIClanRanking[];
  paging: APIPaging;
}

export interface APIClanRanking {
  clanLevel: number;
  clanPoints: number;
  location: APILocation;
  members: number;
  tag: string;
  name: string;
  rank: number;
  previousRank: number;
  badgeUrls: APIBadge;
}

/** /locations/{locationId}/rankings/players */
export interface APIPlayerRankingList {
  items: APIPlayerRanking[];
  paging: APIPaging;
}

export interface APIPlayerRanking {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  attackWins: number;
  defenseWins: number;
  rank: number;
  previousRank: number;
  clan?: Omit<APIPlayerClan, "clanLevel">;
  league: APILeague;
}

/** /locations/{locationId}/rankings/clans-versus */
export interface APIClanVersusRankingList {
  items: APIClanVersusRanking[];
  paging: APIPaging;
}

export interface APIClanVersusRanking {
  clanLevel: number;
  location: APILocation;
  members: number;
  tag: string;
  name: string;
  rank: number;
  previousRank: number;
  badgeUrls: APIBadge;
  clanVersusPoints: number;
}

/** /locations/{locationId}/rankings/players-versus */
export interface APIPlayerVersusRankingList {
  items: APIPlayerVersusRanking[];
  paging: APIPaging;
}

export interface APIPlayerVersusRanking {
  tag: string;
  name: string;
  expLevel: number;
  versusTrophies: number;
  versusBattleWins: number;
  rank: number;
  previousRank: number;
  clan?: APIPlayerClan;
}
