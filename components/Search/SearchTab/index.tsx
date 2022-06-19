import React, { MouseEventHandler } from "react";

interface Props {
  isPlayersActive: boolean;
  isClansActive: boolean;
  toggleIsPlayersActive: MouseEventHandler<HTMLButtonElement>;
  toggleIsClansActive: MouseEventHandler<HTMLButtonElement>;
}

const SearchTab: React.FC<Props> = ({ isPlayersActive, isClansActive, toggleIsPlayersActive, toggleIsClansActive }) => {
  return (
    <div className="flex justify-center items-center w-full h-24 text-sm sm:text-lg">
      <button
        className={`w-1/2 h-full rounded-tl-md ${
          isPlayersActive ? "bg-white" : "hover:bg-lightgray2 hover:text-white"
        } font-bold transition duration-200 ease focus:outline-none`}
        onClick={toggleIsPlayersActive}
      >
        Players
      </button>
      <button
        className={`w-1/2 h-full rounded-tr-md ${
          isClansActive ? "bg-white" : "hover:bg-lightgray2 hover:text-white"
        } font-bold transition duration-200 ease focus:outline-none`}
        onClick={toggleIsClansActive}
      >
        Clans
      </button>
    </div>
  );
};

export default SearchTab;
