import React from "react";
import Image from "next/image";
import { APIPlayerClan } from "types/api/players";

interface Props {
  expLevel?: number;
  name?: string;
  tag?: string;
  role?: string;
  clan?: APIPlayerClan;
}

const PlayerBasicInfo: React.FC<Props> = ({ expLevel, name, tag, role, clan }) => {
  return (
    <div className="flex justify-start space-x-4">
      <div className="flex justify-start">
        <p className="flex justify-center items-center">
          <span className="text-xs">LV.</span> {expLevel}
        </p>
      </div>
      <div className="flex flex-col items-start text-sm space-y-1">
        <p className="text-2xl">{name}</p>
        <p>{tag}</p>
        {role === "member" ? (
          <div className="flex justify-center items-center">
            <span>Member of&nbsp;</span>
            <Image src={clan?.badgeUrls.small as string} width={20} height={20} alt={"clan-badge"} />
            <span>{clan?.name}</span>
          </div>
        ) : (
          <div>No Clan</div>
        )}
      </div>
    </div>
  );
};

export default PlayerBasicInfo;
