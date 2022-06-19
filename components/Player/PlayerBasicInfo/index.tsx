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
    <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-center lg:items-end lg:gap-4">
      <p className="text-lg lg:text-sm">LV.{expLevel}</p>
      <div className="flex flex-col items-center xl:items-start gap-y-1">
        <p className="text-3xl">{name}</p>
        <p>{tag}</p>
        {role === "member" ? (
          <div className="flex flex-col lg:flex-row">
            Member of&nbsp;
            <span className="flex justify-center items-center gap-1">
              <Image src={clan?.badgeUrls.small as string} width={20} height={20} alt={"clan-badge"} />
              {clan?.name}
            </span>
          </div>
        ) : (
          <div className="text-3xl">No Clan</div>
        )}
      </div>
    </div>
  );
};

export default PlayerBasicInfo;
