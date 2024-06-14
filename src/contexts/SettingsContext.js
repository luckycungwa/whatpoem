import React, { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [font, setFont] = useState(["Poppins"]);
  const [background, setBackground] = useState("#F9F9F9");
  const [theme, setTheme] = useState("");

  return (
    // Global State management
    <SettingsContext.Provider
      value={{ font, setFont, background, setBackground, theme, setTheme }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
