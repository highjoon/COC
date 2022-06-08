import React from "react";

interface Props {
  children?: React.ReactNode;
}

const InfoCardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full text-center rounded-md bg-gradient-to-b from-background1 to-background2 border-border2 border-3">
      {children}
    </div>
  );
};

export default InfoCardWrapper;
