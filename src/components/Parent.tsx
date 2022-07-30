import styled from "styled-components";
import Header from "./Header";
import Body from "./Body";
import { useState, useEffect } from "react";
let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

const ParentWrapper = styled.div`
  color: #666;
`;
const showMe = (val: string) => {
  return val;
};

function Parent() {
  const [countDownString, setCountDownString] = useState("");

  // useEffect(() => {
  //   countDown();
  // }, [countDownString]);

  const countDown = () => {
    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      let dateString =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        dateString = "EXPIRED";
      }
      setCountDownString(dateString);
    }, 1000);
  };

  const clickHandler = () => {
    countDown();
  };

  return (
    <ParentWrapper>
      <Header initialDate={countDownString} />
      <Body clickHandler={clickHandler} />
    </ParentWrapper>
  );
}

export default Parent;
