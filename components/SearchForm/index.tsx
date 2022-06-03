import React, { FormEvent } from "react";

interface Props {
  onSubmitHandler: (e: FormEvent) => void;
}

const SearchForm: React.FC<Props> = ({ onSubmitHandler }) => {
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col justify-center items-center h-full">
      <input
        type="text"
        className="w-[550px] h-12 rounded-md px-6 py-2 bg-input focus:bg-white ease-in-out duration-200 border-0 placeholder-slate-400 focus:outline-none md:text-md"
        placeholder="Enter Name or Tag"
      />
    </form>
  );
};

export default SearchForm;
