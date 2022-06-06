/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useInput } from "hooks";

interface Props {
  isPlayersActive: boolean;
  isClansActive: boolean;
}

const SearchForm: React.FC<Props> = ({ isPlayersActive, isClansActive }) => {
  const [newInput, onChangenewInput, setnewInput] = useInput<string>("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setnewInput("");
  }, [isPlayersActive, isClansActive, setnewInput]);

  useEffect(() => {
    if (!newInput) return;
    let newCategory = "";
    if (isPlayersActive) newCategory = "players";
    if (isClansActive) newCategory = "clans";
    setCategory(newCategory);
  }, [newInput]);

  return (
    <div className="flex flex-col px-6 py-2 space-y-2">
      <input
        type="text"
        id="search-input"
        className="w-full h-12 rounded-md border-0 placeholder-slate-400 bg-input focus:bg-white ease-in-out duration-500 focus:outline-none md:text-md"
        placeholder={`${isPlayersActive ? "플레이어" : isClansActive ? "클랜" : ""}명 또는 태그를 입력해주세요`}
        value={newInput}
        onChange={onChangenewInput}
      />
      <Link href={`${category}/${encodeURIComponent(newInput)}`}>
        <a
          className={`${
            newInput !== "" ? "active bg-lightgray2 hover:bg-white" : "pointer-events-none cursor-not-allowed bg-lightgray"
          } w-full text-center duration-200 rounded-md`}
        >
          검색
        </a>
      </Link>
    </div>
  );
};

export default SearchForm;
