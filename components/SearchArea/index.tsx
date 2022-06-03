import React from "react";
import { SearchCard } from "components";

const SearchArea: React.FC = () => {
  return (
    <div className="flex justify-center items-end w-full h-[550px] py-9 bg-homeBackground bg-no-repeat bg-center bg-cover">
      <SearchCard />
    </div>
  );
};

export default SearchArea;
