import React, { useState } from "react";

const SearchTab: React.FC = () => {
  const [isPlayersActive, setIsPlayersActive] = useState<boolean>(true);
  const [isClansActive, setIsClansActive] = useState<boolean>(false);

  const toggleIsPlayersActive = () => {
    setIsPlayersActive(true);
    setIsClansActive(false);
  };

  const toggleIsClansActive = () => {
    setIsClansActive(true);
    setIsPlayersActive(false);
  };

  return (
    <div className="flex justify-center items-center w-full h-24">
      <button
        className={`w-1/2 h-full rounded-tl-md ${
          isPlayersActive ? "bg-white text-layout" : "text-input hover:bg-lightgray hover:text-black"
        } font-bold transition duration-200 ease focus:outline-none`}
        onClick={toggleIsPlayersActive}
      >
        Players
      </button>
      <button
        className={`w-1/2 h-full rounded-tr-md ${
          isClansActive ? "bg-white text-layout" : "text-input hover:bg-lightgray hover:text-black"
        } font-bold transition duration-200 ease focus:outline-none`}
        onClick={toggleIsClansActive}
      >
        Clans
      </button>
    </div>
  );
};

export default SearchTab;
