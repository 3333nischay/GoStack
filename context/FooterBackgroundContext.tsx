"use client";

import React, { createContext, useContext, useState } from "react";

type FooterBackgroundContextType = {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
};

const FooterBackgroundContext = createContext<FooterBackgroundContextType | undefined>(undefined);

export const FooterBackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  return (
    <FooterBackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </FooterBackgroundContext.Provider>
  );
};

export const useFooterBackground = () => {
  const context = useContext(FooterBackgroundContext);
  if (!context) throw new Error("useFooterBackground must be used within FooterBackgroundProvider");
  return context;
};