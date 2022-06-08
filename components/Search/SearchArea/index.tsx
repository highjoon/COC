import React from "react";
import Image from "next/image";
import { SearchCard } from "components/Search";
import { TitleLogo } from "public/assets/images/logo";

const SearchArea: React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly items-center w-full h-[550px] py-9 bg-homeBackground bg-no-repeat bg-center bg-cover">
      <Image src={TitleLogo} alt="titleLogo" width={850} height={250} />
      <SearchCard />
    </div>
  );
};

export default SearchArea;
