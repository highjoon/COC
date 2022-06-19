import React from "react";
import Image from "next/image";
import { APIPlayerClan } from "types/api/players";

interface Props {
  role?: string;
  clan?: APIPlayerClan;
}

const PlayerClanSection: React.FC<Props> = ({ role, clan }) => {
  return (
    <div className="flex justify-center w-full h-full md:border-r-3 md:border-border3">
      {role === "member" ? (
        <div className="flex flex-col justify-start items-center text-2xl">
          {clan?.name}
          <Image src={clan?.badgeUrls.large as string} width={200} height={200} alt={"clan-badge"} />
        </div>
      ) : (
        <div className="flex items-center text-2xl">No Clan !</div>
      )}
    </div>
  );
};

export default PlayerClanSection;
