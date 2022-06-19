import React from "react";

interface Props {
  donations: number;
  donationsReceived: number;
  attackWins: number;
  defenseWins: number;
}

const PlayerExtraInfoSection: React.FC<Props> = ({ donations, donationsReceived, attackWins, defenseWins }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-x-10 gap-y-2 rounded-b-sm border-border3 bg-background3 font-bold text-white p-2">
      <div className="flex gap-x-1 text-xl">
        <span className="grow border-b-1 border-border1 text-left">Donations</span>
        <span className="flex grow justify-center items-center rounded-md bg-label1">{donations}</span>
      </div>
      <div className="flex gap-x-1 text-xl">
        <span className="grow border-b-1 border-border1 text-left">Received</span>
        <span className="flex grow justify-center items-center rounded-md bg-label1">{donationsReceived}</span>
      </div>
      <div className="flex gap-x-1 text-xl">
        <span className="grow border-b-1 border-border1 text-left">Attack Wins</span>
        <span className="flex grow justify-center items-center rounded-md bg-label1">{attackWins}</span>
      </div>
      <div className="flex gap-x-1 text-xl">
        <span className="grow border-b-1 border-border1 text-left">Defense Wins</span>
        <span className="flex grow justify-center items-center rounded-md bg-label1">{defenseWins}</span>
      </div>
    </div>
  );
};

export default PlayerExtraInfoSection;
