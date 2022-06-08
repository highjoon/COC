import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { TownSymbol, BuilderSymbol, CapitalSymbol } from "public/assets/icons";

interface Props {
  id?: string;
}

const SearchResultTab: React.FC<Props> = ({ id }) => {
  const router = useRouter();

  const onTabClickHandler = (param: string) => {
    router.push(`${encodeURIComponent(id as string)}/?hall=${param}`);
  };

  return (
    <div className="flex w-full space-x-7 px-7 py-5">
      <button
        className="flex justify-center items-center w-full py-3 space-x-2 rounded-md bg-gradient-to-b from-button1 to-button2 shadow-md shadow-black text-white font-bold text-lg hover:bg-gradient-to-b hover:from-button3 hover:to-button4"
        onClick={() => onTabClickHandler("home")}
      >
        <Image src={TownSymbol} width={40} height={40} alt={"townHall-symbol"} />
        <span>마을</span>
      </button>
      <button
        className="flex justify-center items-center w-full py-3 space-x-2 rounded-md bg-gradient-to-b from-button1 to-button2 shadow-md shadow-black text-white font-bold text-lg hover:bg-gradient-to-b hover:from-button3 hover:to-button4"
        onClick={() => onTabClickHandler("builderBase")}
      >
        <Image src={BuilderSymbol} width={40} height={40} alt={"builder-symbol"} />
        <span>장인기지</span>
      </button>
      <button
        className="flex justify-center items-center w-full py-3 space-x-2 rounded-md bg-gradient-to-b from-button1 to-button2 shadow-md shadow-black text-white font-bold text-lg hover:bg-gradient-to-b hover:from-button3 hover:to-button4"
        onClick={() => onTabClickHandler("capital")}
      >
        <Image src={CapitalSymbol} width={40} height={40} alt={"clan-capital-symbol"} />
        <span>클랜 캐피탈</span>
      </button>
    </div>
  );
};

export default SearchResultTab;
