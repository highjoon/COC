import React from "react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { push } = useRouter();

  const logoClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    push("/");
  };

  return (
    <header className="flex items-center justify-between h-20 text-title">
      <button className="w-28 h-20 ml-8 bg-titleLogo bg-no-repeat bg-contain bg-center border-none" onClick={logoClickHandler} />
      <div className="flex items-center justify-between font-extrabold text-xl">
        <p className="cursor-pointer mr-8 opacity-50 hover:opacity-100 ease-in-out duration-200">Sign In</p>
        <p className="cursor-pointer mr-8 opacity-50 hover:opacity-100 ease-in-out duration-200">Sign Up</p>
      </div>
    </header>
  );
};

export default Header;
