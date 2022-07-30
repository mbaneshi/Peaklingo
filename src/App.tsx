import { memo } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";

import Parent from "./components/Parent";

function App() {
  return (
    <>
      <GlobalStyles />
      <Parent />
    </>
  );
}

export default memo(App);
///TODO
//!add Hamburger menu
//? add theme
