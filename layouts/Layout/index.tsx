import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="w-full h-screen bg-layout font-supercell font-bold text-md">{children}</div>;
};

export default Layout;
