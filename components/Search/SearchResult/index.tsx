import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { PlayerClanSection, PlayerExtraInfoSection, PlayerInfoSection, PlayerLeagueSection } from "components/Player";
import { InfoCard, ImageCard } from "components/Common";
import Loading from "components/Loading";
import { useGetPlayerInfo } from "hooks";

type Props = {
  isPlayer: boolean;
};

const SearchResult: React.FC<Props> = ({ isPlayer }) => {
  const router = useRouter();
  const { hall, id } = router.query;
  const { data, isLoading } = useGetPlayerInfo(id as string);

  if (data === undefined || isLoading) return <Loading />;

  return (
    <>
      <InfoCard flexCol={true}>
        {isPlayer && (
          <>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full px-3 py-2 gap-3">
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
      {hall !== "capital" && (
        <InfoCard flexCol={false}>
          <div className="flex flex-col grow-[0.1] justify-start items-center h-full p-3">
            {hall === "home" && (
              <Image
                src={`/assets/images/townHalls/th${data.townHallLevel}${
                  data.townHallLevel >= 13 ? `-${data.townHallWeaponLevel}` : ""
                }.webp`}
                width={350}
                height={350}
                alt={data.townHallLevel.toString()}
              />
            )}

            <div className="flex flex-col w-full gap-3">
              <ImageCard title={"Heroes"} villiage={hall} sort={"heroes"} isHeroes={true} />
              {hall === "home" && <ImageCard title={"Pets"} villiage={hall} sort={"troops"} isPet={true} />}
            </div>
          </div>
          <div className="flex flex-col grow-[0.9] items-center p-3 gap-3">
            {hall !== "capital" && <ImageCard title={"Troops"} villiage={hall} sort={"troops"} />}
            {hall === "home" && <ImageCard title={"Spells"} villiage={hall} sort={"spells"} />}
          </div>
        </InfoCard>
      )}
    </>
  );
};

export default SearchResult;
