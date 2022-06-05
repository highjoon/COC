import React, { useEffect } from "react";
import { useInput, useDebounce } from "hooks";

interface Props {
  isPlayersActive: boolean;
  isClansActive: boolean;
}

const SearchForm: React.FC<Props> = ({ isPlayersActive, isClansActive }) => {
  const [newInput, onChangenewInput, setnewInput] = useInput<string>("");
  const value = useDebounce(newInput);

  useEffect(() => {
    setnewInput("");
  }, [isPlayersActive, isClansActive, setnewInput]);

  useEffect(() => {
    if (!value) return;
    let category = "";
    if (isPlayersActive) category = "players";
    if (isClansActive) category = "clans";
    console.log(value, category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <input
        type="text"
        id="search-input"
        className="w-[550px] h-12 rounded-md px-6 py-2 bg-input focus:bg-white ease-in-out duration-200 border-0 placeholder-slate-400 focus:outline-none md:text-md"
        placeholder="Enter Name or Tag"
        value={newInput}
        onChange={onChangenewInput}
      />
    </div>
  );
};

export default SearchForm;
