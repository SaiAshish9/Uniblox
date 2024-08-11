import React, { act, useState } from "react";
import {
  ADDTOCARTBTN,
  AddToCartContainer,
  Container,
  Item,
  ItemBrand,
  ItemContainer,
  ItemDesc,
  ItemImg,
  ItemPriceContainer,
  ItemPriceStrike,
  ItemPriceText,
  ItemProduct,
  ItemProductPriceTag,
  TitleContainer,
} from "./styles";
import { PiHandbagSimpleLight, PiHandbagSimpleFill } from "react-icons/pi";
import DATA from "data/data.json";

const HomeContent = () => {
  const [hovered, setHovered] = useState(-1);

  function renderHoveredContent(active, item) {
    if (!active) {
      return (
        <>
          <ItemBrand>{item.title}</ItemBrand>
          <ItemProduct>{item.desc}</ItemProduct>
        </>
      );
    }

    return (
      <AddToCartContainer>
        <ADDTOCARTBTN>
          <PiHandbagSimpleLight size={16} />
          <span>ADD TO CART</span>
        </ADDTOCARTBTN>
        <ItemProduct>Sizes: {item.size}</ItemProduct>
      </AddToCartContainer>
    );
  }

  return (
    <Container>
      <TitleContainer>
        Mast Harbour Shirts <span>- 2161 items</span>
      </TitleContainer>
      <ItemContainer>
        {DATA.map((item, key) => (
          <Item
            key={item.title}
            onMouseEnter={() => {
              setHovered(key);
            }}
            onMouseLeave={() => {
              setHovered(-1);
            }}
          >
            <ItemImg hovered={+(hovered === key)} src={item.img} alt="img" />
            <ItemDesc hovered={+(hovered === key)}>
              {renderHoveredContent(hovered === key, item)}
              <ItemPriceContainer>
                <ItemPriceText>{item.price}</ItemPriceText>
                <ItemPriceStrike>{item.strikePrice}</ItemPriceStrike>
                <ItemProductPriceTag>{item.per}</ItemProductPriceTag>
              </ItemPriceContainer>
            </ItemDesc>
          </Item>
        ))}
      </ItemContainer>
    </Container>
  );
};

export default HomeContent;
