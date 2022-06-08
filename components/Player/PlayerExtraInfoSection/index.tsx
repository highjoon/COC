import React from "react";

interface Props {
  donations: number;
  donationsReceived: number;
  attackWins: number;
  defenseWins: number;
}

const PlayerExtraInfoSection: React.FC<Props> = ({ donations, donationsReceived, attackWins, defenseWins }) => {
  return (
    <div className="w-full">
      <div className="flex w-full space-x-10 rounded-b-sm border-border3 bg-background3 font-bold text-white px-2 py-2">
        <div className="flex grow justify-between space-x-1">
          <span className="grow-2 border-b-1 border-border1 text-left">Donations</span>
          <span className="flex justify-center items-center grow-1 rounded-md bg-label1 text-lg">{donations}</span>
        </div>
        <div className="flex grow justify-between space-x-1">
          <span className="grow-2 border-b-1 border-border1 text-left">Received</span>
          <span className="flex justify-center items-center grow-1 rounded-md bg-label1 text-lg">{donationsReceived}</span>
        </div>
        <div className="flex grow justify-between space-x-1">
          <span className="grow-2 border-b-1 border-border1 text-left">Attack Wins</span>
          <span className="flex justify-center items-center grow-1 rounded-md bg-label1 text-lg">{attackWins}</span>
        </div>
        <div className="flex grow justify-between space-x-1">
          <span className="grow-2 border-b-1 border-border1 text-left">Defense Wins</span>
          <span className="flex justify-center items-center grow-1 rounded-md bg-label1 text-lg">{defenseWins}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerExtraInfoSection;
