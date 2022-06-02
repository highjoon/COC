import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-20 bg-header text-title">
      <button className="w-28 h-20 ml-8 bg-titleLogo bg-no-repeat bg-contain bg-center border-none" />
      <div className="flex items-center justify-between font-extrabold text-xl">
        <p className="cursor-pointer mr-8">Sign In</p>
        <p className="cursor-pointer mr-8">Sign Up</p>
      </div>
    </header>
  );
};

export default Header;
