import React, { MouseEventHandler } from "react";

interface Props {
  isPlayersActive: boolean;
  isClansActive: boolean;
  toggleIsPlayersActive: MouseEventHandler<HTMLButtonElement>;
  toggleIsClansActive: MouseEventHandler<HTMLButtonElement>;
}

const SearchTab: React.FC<Props> = ({ isPlayersActive, isClansActive, toggleIsPlayersActive, toggleIsClansActive }) => {
  return (
    <div className="flex justify-center items-center w-full h-24">
      <button
        className={`w-1/2 h-full rounded-tl-md ${
          isPlayersActive ? "bg-white text-layout" : "text-input hover:bg-lightgray2 hover:text-black"
        } font-bold transition duration-200 ease focus:outline-none`}
        onClick={toggleIsPlayersActive}
      >
        플레이어 검색
      </button>
      <button
        className={`w-1/2 h-full rounded-tr-md ${
          isClansActive ? "bg-white text-layout" : "text-input hover:bg-lightgray2 hover:text-black"
        } font-bold transition duration-200 ease focus:outline-none`}
        onClick={toggleIsClansActive}
      >
        클랜 검색
      </button>
    </div>
  );
};

export default SearchTab;
