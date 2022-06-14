import React from "react";

interface Props {
  children?: React.ReactNode;
  flexCol: boolean;
  justify?: string;
}

const InfoCard: React.FC<Props> = ({ children, flexCol, justify }) => {
  return (
    <div
      className={`${flexCol ? "flex flex-col" : "flex"} justify-${
        justify ? justify : "center"
      } w-full rounded-md bg-gradient-to-b from-background1 to-background2 border-border2 border-3`}
    >
      {children}
    </div>
  );
};

export default InfoCard;
