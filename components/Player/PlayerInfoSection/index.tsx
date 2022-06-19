import React from "react";
import { PlayerLabels, PlayerBasicInfo } from "components/Player";
import { APIPlayerClan } from "types/api/players";
import { APILabel } from "types/api/labels";

interface Props {
  expLevel: number;
  name: string;
  tag: string;
  role?: string;
  clan?: APIPlayerClan;
  labels: APILabel[];
}

const PlayerInfoSection: React.FC<Props> = ({ expLevel, name, tag, role, clan, labels }) => {
  return (
    <div className="flex flex-col w-full h-full lg:border-r-3 lg:border-border3">
      <PlayerBasicInfo expLevel={expLevel} name={name} tag={tag} role={role} clan={clan} />
      <PlayerLabels labels={labels} />
    </div>
  );
};

export default PlayerInfoSection;
