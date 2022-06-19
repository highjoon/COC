import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { APIPlayer } from "types/api/players";
import { PlayerClanSection, PlayerExtraInfoSection, PlayerInfoSection, PlayerLeagueSection } from "components/Player";
import { InfoCard, ImageCard } from "components/Common";

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
      <InfoCard flexCol={true}>
        {isPlayer && (
          <>
            <div className="flex flex-col md:flex-row justify-between items-center w-full px-3 py-2 gap-3">
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
      </InfoCard>
      <InfoCard flexCol={false}>
        <div className="flex flex-col grow-[0.1] justify-evenly items-center h-full pl-3 pb-3 pt-3">
          <Image
            src={`/assets/images/townHalls/th${data.townHallLevel}${data.townHallLevel >= 13 ? `-${data.townHallWeaponLevel}` : ""}.webp`}
            width={350}
            height={350}
            alt={data.townHallLevel.toString()}
          />
          <div className="flex flex-col w-full gap-3">
            <ImageCard title={"Heroes"} villiage={hall} data={data} sort={"heroes"} />
            <ImageCard title={"Pets"} villiage={hall} data={data} sort={"troops"} isPet={true} />
          </div>
        </div>
        <div className="flex flex-col grow-[0.9] items-center p-3 gap-3">
          <ImageCard title={"Troops"} villiage={hall} data={data} sort={"troops"} />
          <ImageCard title={"Spells"} villiage={hall} data={data} sort={"spells"} />
        </div>
      </InfoCard>
    </>
  );
};

export default SearchResult;
