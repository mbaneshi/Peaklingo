import { memo, useEffect } from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Globalstyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { slide as Menu } from "react-burger-menu";

import Parent from "./components/Parent";
let styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

function App() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const handleOnOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {}, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={themeToggler}>Switch Theme</button>
        <Menu
          isOpen={isOpen}
          width={"20%"}
          onOpen={handleOnOpen}
          styles={styles}
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Menu>
        <Parent />
      </>
    </ThemeProvider>
  );
}

export default memo(App);
///TODO
//!add Hamburger menu
//? add theme
