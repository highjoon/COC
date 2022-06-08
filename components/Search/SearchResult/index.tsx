import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { APIPlayer } from "types/api/players";
import { PlayerClanSection, PlayerExtraInfoSection, PlayerInfoSection, PlayerLeagueSection } from "components/Player";
import { InfoCardWrapper } from "layouts";

interface Props {
  data: APIPlayer;
  isPlayer?: boolean;
}

const SearchResult: React.FC<Props> = ({ data, isPlayer }) => {
  const router = useRouter();
  const hall = router.query?.hall;

  if (data === undefined) return <></>;
  console.log(data);

  return (
    <>
      <InfoCardWrapper>
        {isPlayer && (
          <>
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
          </>
        )}
      </InfoCardWrapper>
      <InfoCardWrapper>
        <div className="flex justify-around">
          <Image
            src={`/assets/images/townHalls/th${data.townHallLevel}${data.townHallLevel >= 13 ? `-${data.townHallWeaponLevel}` : ""}.webp`}
            width={200}
            height={200}
            alt={"townhall"}
          />
        </div>
        <div>{data.troops.map((troop) => troop.village === hall && <div key={troop.name}>{troop.name}</div>)}</div>
      </InfoCardWrapper>
    </>
  );
};

export default SearchResult;
