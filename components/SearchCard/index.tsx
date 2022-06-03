import React, { FormEvent } from "react";
import { SearchForm, SearchTab } from "components";

const SearchCard: React.FC = () => {
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col place-content-between w-[600px] h-36 bg-layout shadow-xl rounded-md">
      <SearchTab />
      <SearchForm onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default SearchCard;
