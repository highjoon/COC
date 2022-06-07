import React from "react";
import { APIPlayer } from "types/api/players";
import { PlayerClanSection, PlayerExtraInfoSection, PlayerInfoSection, PlayerLeagueSection } from "components/Player";

interface Props {
  data: APIPlayer;
  isPlayer?: boolean;
}

const SearchResult: React.FC<Props> = ({ data, isPlayer }) => {
  if (data === undefined) return <></>;
  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center w-full text-center rounded-md bg-gradient-to-b from-background1 to-background2 border-border2 border-3">
      {isPlayer && (
        <div className="flex flex-col justify-center items-center w-full text-center rounded-md bg-gradient-to-b from-background1 to-background2 border-border2 border-3">
          <div className="flex justify-between items-center w-full px-6 py-2">
            <PlayerInfoSection
              expLevel={data.expLevel}
              name={data.name}
              tag={data.tag}
              role={data.role}
              clan={data.clan}
              labels={data.labels}
            />
            <PlayerClanSection role={data.role} clan={data.clan} />
            <PlayerLeagueSection league={data.league} bestTrophies={data.bestTrophies} warStars={data.warStars} />
          </div>
          <PlayerExtraInfoSection
            donations={data.donations}
            donationsReceived={data.donationsReceived}
            attackWins={data.attackWins}
            defenseWins={data.defenseWins}
          />
        </div>
      )}
    </div>
  );
};

export default SearchResult;
