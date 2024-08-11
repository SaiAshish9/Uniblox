import React from "react";
import { CardList, Container } from "./styles";
import { CardContainer, PriceContainer } from "./components";

const Cart = () => {
  return (
    <Container>
      <CardList>
        {[...Array(2).keys()].map((item, _) => (
          <CardContainer key={item} />
        ))}
      </CardList>
      <PriceContainer />
    </Container>
  );
};

export default Cart;
