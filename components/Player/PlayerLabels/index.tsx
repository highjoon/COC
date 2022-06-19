import React from "react";
import Image from "next/image";
import { APILabel } from "types/api/labels";

interface Props {
  labels?: APILabel[];
}

const PlayerLabels: React.FC<Props> = ({ labels }) => {
  return (
    <div className="flex flex-col justify-evenly items-center w-full space-y-3 py-3">
      {labels?.map((label) => {
        return (
          <div key={label.id} className={"flex justify-start items-center w-[200px] sm:w-[250px] gap-3"}>
            <Image src={label.iconUrls.small} width={45} height={45} alt={"label"} />
            <span>{label.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerLabels;
