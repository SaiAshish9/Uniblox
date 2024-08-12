import React, { useState } from "react";
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
  Label,
  Spacer,
  TitleContainer,
} from "./styles";
import { PiHandbagSimpleLight, PiHandbagSimpleFill } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { useStore } from "store";

const HomeContent = () => {
  const [hovered, setHovered] = useState(-1);

  const {
    state: { items },
  } = useStore();

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
      {items && (
        <TitleContainer>
          Mast Harbour Shirts <span>- {items.length} items</span>
        </TitleContainer>
      )}

      <ItemContainer>
        {items &&
          items.map((item, key) => (
            <Item
              key={item.desc + key}
              onMouseEnter={() => {
                setHovered(key);
              }}
              onMouseLeave={() => {
                setHovered(-1);
              }}
            >
              <ItemImg hovered={+(hovered === key)} src={item.img} alt="img" />
              {hovered !== key && (
                <Label>
                  <span>{item.rating}</span>
                  <Spacer />
                  <IoStar color="#009692" />
                  <Spacer />
                  <div>|</div>
                  <Spacer />
                  <span>{item.count}</span>
                </Label>
              )}
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
