import { APIBadge, APIPaging } from "types/api";
import { APILocation } from "types/api/players";
import { APILabel } from "types/api/labels";
import { APILeague, APIWarLeague } from "types/api/leagues";

/** /clans?name={name}&limit={limit} */
export interface APIClanList {
  items: Omit<APIClan, "memberList">[];
  paging: APIPaging;
}

export interface APIChatLanguage {
  name: string;
  id: number;
  languageCode: string;
}

/** /clans/{clanTag} */
export interface APIClan {
  tag: string;
  name: string;
  type: "open" | "inviteOnly" | "closed";
  description: string;
  location?: APILocation;
  chatLanguage?: APIChatLanguage;
  badgeUrls: APIBadge;
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  requiredTrophies: number;
  requiredTownhallLevel?: number;
  requiredVersusTrophies?: number;
  warFrequency: "always" | "moreThanOncePerWeek" | "oncePerWeek" | "lessThanOncePerWeek" | "never" | "unknown";
  warWinStreak: number;
  warWins: number;
  warTies?: number;
  warLosses?: number;
  isWarLogPublic: boolean;
  warLeague?: APIWarLeague;
  members: number;
  labels: APILabel[];
  memberList: APIClanMember[];
}

export interface APIClanMember {
  name: string;
  tag: string;
  role: "member" | "admin" | "coLeader" | "leader";
  expLevel: number;
  league: APILeague;
  trophies: number;
  versusTrophies?: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
}

/** /clans/{clanTag}/members */
export interface APIClanMemberList {
  items: APIClanMember[];
  paging: APIPaging;
}

/** /clans/{clanTag}/currentwar and /clanwarleagues/wars/{warTag} */
export interface APIClanWar {
  state: "notInWar" | "preparation" | "inWar" | "warEnded";
  teamSize: number;
  startTime: string;
  preparationStartTime: string;
  endTime: string;
  clan: APIWarClan;
  opponent: APIWarClan;
  /** This property is not available for CWL */
  attacksPerMember?: number;
}

export interface APIWarClan {
  tag: string;
  name: string;
  badgeUrls: APIBadge;
  clanLevel: number;
  attacks: number;
  stars: number;
  destructionPercentage: number;
  members: APIClanWarMember[];
}

export interface APIClanWarMember {
  tag: string;
  name: string;
  mapPosition: number;
  townhallLevel: number;
  opponentAttacks: number;
  bestOpponentAttack?: APIClanWarAttack;
  attacks?: APIClanWarAttack[];
}

export interface APIClanWarAttack {
  order: number;
  attackerTag: string;
  defenderTag: string;
  stars: number;
  duration: number;
  destructionPercentage: number;
}

export interface APIWarLogClan {
  tag?: string;
  name?: string;
  badgeUrls: APIBadge;
  clanLevel: number;
  attacks?: number;
  stars: number;
  destructionPercentage: number;
  expEarned?: number;
}

export interface APIClanWarLogEntry {
  result: "win" | "lose" | "tie" | null;
  endTime: string;
  teamSize: number;
  attacksPerMember?: number;
  clan: APIWarLogClan;
  opponent: APIWarLogClan;
}

/** /clans/{clanTag}/warlog */
export interface APIClanWarLog {
  items: APIClanWarLogEntry[];
  paging: APIPaging;
}

/** /clans/{clanTag}/currentwar/leaguegroup */
export interface APIClanWarLeagueGroup {
  state: "notInWar" | "preparation" | "inWar" | "ended";
  season: string;
  clans: APIClanWarLeagueClan[];
  rounds: APIClanWarLeagueRound[];
}

export interface APIClanWarLeagueClan {
  name: string;
  tag: string;
  clanLevel: number;
  badgeUrls: APIBadge;
  members: APIClanWarLeagueClanMember[];
}

export interface APIClanWarLeagueClanMember {
  name: string;
  tag: string;
  townHallLevel: number;
}

export interface APIClanWarLeagueRound {
  warTags: string[];
}
