import React from "react";
import { Banner } from "components";
import { Header } from "components";
import { Route, Routes } from "react-router-dom";
import { Home, Cart } from "screens";
import { Container } from "./styles";

const App = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout/cart" element={<Cart />} />
      </Routes>
    </Container>
  );
};

export default App;
