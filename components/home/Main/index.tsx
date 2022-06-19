import React from "react";
import { SearchArea } from "components/Search";
import GoldPass from "components/GoldPass";

const Main: React.FC = () => {
  return (
    <section className="flex flex-col justify-center">
      <SearchArea />
      <GoldPass />
    </section>
  );
};

export default Main;
