import React from "react";
import Image from "next/image";
import { Trophy, WarStar } from "public/assets/icons";
import { APILeague } from "types/api/leagues";

interface Props {
  league?: APILeague;
  bestTrophies: number;
  warStars: number;
}

const PlayerLeagueSection: React.FC<Props> = ({ league, warStars, bestTrophies }) => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <div className="text-xl">{league?.name}</div>
      <Image src={league?.iconUrls?.medium as string} width={150} height={150} alt={"league-icon"} />
      <div className="flex justify-around w-full py-3">
        <div className="flex flex-col">
          <p>War Stars</p>
          <div className="flex items-center w-20 space-x-2">
            <Image src={WarStar} width={25} height={25} alt={"label"} />
            <span className="flex justify-start">{warStars}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Trophies</p>
          <div className="flex items-center w-20 space-x-2">
            <Image src={Trophy} width={25} height={25} alt={"label"} />
            <span className="flex justify-start">{bestTrophies}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerLeagueSection;