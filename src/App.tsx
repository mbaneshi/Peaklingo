import { memo } from "react";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Globalstyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { base, light, dark, solarizedLight, solarizedDark } from "./Themes";

import Parent from "./components/Parent";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={themeToggler}>Switch Theme</button>
        <Parent />
      </>
    </ThemeProvider>
  );
}

export default memo(App);
///TODO
//!add Hamburger menu
//? add theme
