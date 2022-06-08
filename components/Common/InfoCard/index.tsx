import React from "react";

interface Props {
  children?: React.ReactNode;
  flexCol: boolean;
  justify?: string;
}

const InfoCard: React.FC<Props> = ({ children, flexCol, justify }) => {
  return (
    <div
      className={`flex ${flexCol ? "flex-col" : ""} justify-${
        justify ? justify : "center"
      } flex-wrap items-center w-full text-center rounded-md bg-gradient-to-b from-background1 to-background2 border-border2 border-3`}
    >
      {children}
    </div>
  );
};

export default InfoCard;
