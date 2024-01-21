import { createContext, useState } from "react";

export const context = createContext();

const Context = ({ children }) => {
  const [isLight, setIsLight] = useState(false);
  return <context.Provider value={{isLight, setIsLight}}>{children}</context.Provider>;
};

export default Context;
