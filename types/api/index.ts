export interface APIPaging {
  cursors?: APICursors;
}

export interface APICursors {
  after?: string;
  before?: string;
}

export interface APIIcon {
  small: string;
  tiny?: string;
  medium?: string;
}

export interface APIBadge {
  small: string;
  large: string;
  medium: string;
}

export interface APISeason {
  id: string;
  rank: number;
  trophies: number;
}
