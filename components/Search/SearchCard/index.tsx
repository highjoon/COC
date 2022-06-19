import React, { useCallback, useState } from "react";
import { SearchForm, SearchTab } from "components/Search";

const SearchCard: React.FC = () => {
  const [isPlayersActive, setIsPlayersActive] = useState<boolean>(true);
  const [isClansActive, setIsClansActive] = useState<boolean>(false);

  const toggleIsPlayersActive = useCallback(() => {
    setIsPlayersActive(true);
    setIsClansActive(false);
  }, [setIsClansActive, setIsPlayersActive]);

  const toggleIsClansActive = useCallback(() => {
    setIsClansActive(true);
    setIsPlayersActive(false);
  }, [setIsClansActive, setIsPlayersActive]);

  return (
    <div className="w-full px-2 sm:w-[550px]">
      <div className="flex flex-col place-content-between h-36 bg-layout shadow-xl rounded-md">
        <SearchTab
          isPlayersActive={isPlayersActive}
          isClansActive={isClansActive}
          toggleIsPlayersActive={toggleIsPlayersActive}
          toggleIsClansActive={toggleIsClansActive}
        />
        <SearchForm isPlayersActive={isPlayersActive} isClansActive={isClansActive} />
      </div>
    </div>
  );
};

export default SearchCard;
