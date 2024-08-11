import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  InnerContent,
  PreText,
  TimeIntervalText,
  TimelineSymbol,
} from "./styles";

const Banner = () => {
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60 * 1000); // 1 day in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return [hours, minutes, seconds];
  };

  return (
    <Container>
      <Content>
        <PreText>Sale Ends In</PreText>
        <InnerContent>
          <TimeIntervalText>{formatTime(timeRemaining)[0]}</TimeIntervalText>
          <TimelineSymbol> H</TimelineSymbol>
          <TimeIntervalText b={1}>:</TimeIntervalText>
          <TimeIntervalText>{formatTime(timeRemaining)[1]}</TimeIntervalText>
          <TimelineSymbol> M</TimelineSymbol>
          <TimeIntervalText b={1}>:</TimeIntervalText>
          <TimeIntervalText>{formatTime(timeRemaining)[2]}</TimeIntervalText>
          <TimelineSymbol> S</TimelineSymbol>
        </InnerContent>
      </Content>
    </Container>
  );
};

export default Banner;
