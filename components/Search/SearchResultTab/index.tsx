import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { TownSymbol, BuilderSymbol, CapitalSymbol } from "public/assets/icons";

const buttonConfig = {
  activated:
    "flex justify-center items-center w-full py-3 gap-2 rounded-md bg-gradient-to-b from-button3 to-button4 shadow-md shadow-black text-white font-bold",
  inactivated:
    "flex justify-center items-center w-full py-3 gap-2 rounded-md bg-gradient-to-b from-button1 to-button2 shadow-md shadow-black text-white font-bold hover:bg-gradient-to-b hover:from-button3 hover:to-button4",
};

const SearchResultTab: React.FC = () => {
  const router = useRouter();
  const { hall, id } = router.query;

  const onTabClickHandler = (param: string) => {
    router.push(`${encodeURIComponent(id as string)}/?hall=${param}`);
  };

  return (
    <div className="flex w-full gap-3 px-2 sm:px-5 md:px-9 py-4 sm:py-6 text-sm sm:text-md md:text-lg lg:text-2xl">
      <button className={hall === "home" ? buttonConfig.activated : buttonConfig.inactivated} onClick={() => onTabClickHandler("home")}>
        <div className="hidden sm:block">
          <Image src={TownSymbol} width={40} height={40} alt={"townHall-symbol"} />
        </div>
        <span>Home</span>
      </button>
      <button
        className={hall === "builderBase" ? buttonConfig.activated : buttonConfig.inactivated}
        onClick={() => onTabClickHandler("builderBase")}
      >
        <div className="hidden sm:block">
          <Image src={BuilderSymbol} width={40} height={40} alt={"builder-symbol"} />
        </div>
        <span>Builder Base</span>
      </button>
      <button
        className={hall === "capital" ? buttonConfig.activated : buttonConfig.inactivated}
        onClick={() => onTabClickHandler("capital")}
      >
        <div className="hidden sm:block">
          <Image src={CapitalSymbol} width={40} height={40} alt={"clan-capital-symbol"} />
        </div>
        <span>Clan Capital</span>
      </button>
    </div>
  );
};

export default SearchResultTab;
