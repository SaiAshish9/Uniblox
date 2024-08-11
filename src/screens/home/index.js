import React from "react";
import { Container } from "./styles";
import { Banner } from "components";
import { HomeContent } from "./components";

const Home = () => {
  return (
    <Container>
      <Banner />
      <HomeContent />
    </Container>
  );
};

export default Home;
