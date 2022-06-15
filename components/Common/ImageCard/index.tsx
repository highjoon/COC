import React from "react";
import Image from "next/image";
import { APIPlayer, APIPlayerItem } from "types/api/players";
import { imageUrls, pets } from "lib/utils";

interface Props {
  title: string;
  villiage?: string | string[];
  data: APIPlayer;
  sort: string;
  gridCols?: number;
  isPet?: boolean;
}

type gridColumnsType = {
  [key: number]: string;
};

const gridColumns: gridColumnsType = {
  0: "grid gap-3",
  4: "grid grid-cols-4 gap-3",
  8: "grid grid-cols-8 gap-3",
};

const ImageCard: React.FC<Props> = ({ title, villiage, data, sort, gridCols, isPet }) => {
  if (isPet && data[sort][data[sort].length - 1].name !== "Unicorn") {
    return <></>;
  }
  return (
    <div className="flex flex-col w-full text-left p-3 bg-background5/80 rounded-md">
      <p>{title}</p>
      <div className={gridColumns[gridCols ?? 0]}>
        {data[sort].map(
          (item: APIPlayerItem) =>
            item.village === villiage &&
            (isPet ? pets.includes(item.name) : !pets.includes(item.name)) && (
              <div
                key={item.name}
                className={`w-16 h-16 rounded-md border-2 ${
                  item.superTroopIsActive ? "border-pink" : "border-black"
                } bg-background3 relative`}
              >
                <Image
                  src={`${imageUrls[sort]}${villiage}/${item.name.replace(/ |\./gi, "")}.webp`}
                  layout="fill"
                  objectFit="cover"
                  alt={item.name}
                />
                <div
                  className={`absolute left-0 bottom-0 text-sm leading-none ${
                    item.level === item.maxLevel ? "bg-maxLevel" : "bg-layout"
                  } p-1 text-center rounded-sm`}
                >
                  <span>{item.level}</span>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default ImageCard;
