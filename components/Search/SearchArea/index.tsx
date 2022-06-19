import React from "react";
import Image from "next/image";
import { SearchCard } from "components/Search";
import { TitleLogo } from "public/assets/images/logo";

const SearchArea: React.FC = () => {
  return (
    <section className="flex flex-col justify-start items-center w-full h-[400px] sm:h-[550px] gap-4 sm:gap-9 py-9 bg-homeBackground bg-no-repeat bg-center bg-cover">
      <div className="flex justify-center items-centers w-full h-40 sm:h-52 lg:h-60">
        <Image src={TitleLogo} alt="titleLogo" />
      </div>
      <SearchCard />
    </section>
  );
};

export default SearchArea;
