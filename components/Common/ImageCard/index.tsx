import React from "react";
import Image from "next/image";
import { APIPlayer, APIPlayerItem } from "types/api/players";

interface Props {
  title: string;
  villiage?: string | string[];
  data: APIPlayer;
  sort: string;
}

const ImageCard: React.FC<Props> = ({ title, villiage, data, sort }) => {
  const sort2 = sort;
  return (
    <div className="flex flex-col text-left p-3 space-y-4 bg-background5/80 rounded-md">
      <p>{title}</p>
      <div className="grid grid-cols-10 gap-3">
        {data[sort2].map(
          (troop: APIPlayerItem) =>
            troop.village === villiage && (
              <Image
                key={troop.name}
                className="rounded-md"
                src={`/assets/images/troops/${villiage}/${troop.name.replace(/ |\./gi, "")}.webp`}
                width={45}
                height={45}
                alt={troop.name}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default ImageCard;
