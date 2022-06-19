import React from "react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { push } = useRouter();

  const logoClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    push("/");
  };

  return (
    <header className="flex items-center justify-between h-14 py-1 px-3.5 text-title">
      <button className="w-28 h-20 bg-headerLogo bg-no-repeat bg-contain bg-center border-none" onClick={logoClickHandler} />
      <div className="flex items-center justify-between font-extrabold text-xl" />
    </header>
  );
};

export default Header;
