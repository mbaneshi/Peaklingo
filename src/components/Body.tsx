import styled from "styled-components";
import React from "react";

const BodyWrapper = styled.div`
  color: #666;
  width: 900px;
  height: 900px;
`;

function Body(props: any) {
  const clickHandler = props.clickHandler;
  return (
    <BodyWrapper>
      <button onClick={() => clickHandler()}>Start countDown</button>
    </BodyWrapper>
  );
}

export default Body;
