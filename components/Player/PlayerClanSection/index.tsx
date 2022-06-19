import React from "react";
import Image from "next/image";
import { APIPlayerClan } from "types/api/players";

interface Props {
  role?: string;
  clan?: APIPlayerClan;
}

const PlayerClanSection: React.FC<Props> = ({ role, clan }) => {
  return (
    <div className="flex w-full h-full">
      {role === "member" ? (
        <div className="flex flex-col justify-start items-center w-full h-full lg:border-r-3 lg:border-border3">
          <p className="flex justify-center items-center text-2xl">{clan?.name}</p>
          <div className="w-32 h-32 sm:w-44 sm:h-44 relative">
            <Image src={clan?.badgeUrls.large as string} layout="fill" objectFit="contain" alt="clan-badge" />
          </div>
        </div>
      ) : (
        <div className="flex items-center text-2xl">No Clan !</div>
      )}
    </div>
  );
};

export default PlayerClanSection;
