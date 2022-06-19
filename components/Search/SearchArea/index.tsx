import React from "react";
import Image from "next/image";
import { SearchCard } from "components/Search";
import { TitleLogo } from "public/assets/images/logo";

const SearchArea: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-[550px] gap-4 sm:gap-9 py-9 bg-homeBackground bg-no-repeat bg-center bg-cover">
      <div className="flex justify-center items-centers w-full h-40 sm:h-52 lg:h-60">
        <Image src={TitleLogo} alt="titleLogo" />
      </div>
      <SearchCard />
    </div>
  );
};

export default SearchArea;
