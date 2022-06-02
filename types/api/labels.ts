import { APIIcon, APIPaging } from "types/api";

export interface APILabel {
  id: number;
  name: string;
  iconUrls: APIIcon;
}

/** /labels/clans and /labels/players */
export interface APILabelList {
  items: APILabel[];
  paging: APIPaging;
}
