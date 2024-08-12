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
import { useNavigate } from "react-router-dom";
import { updateCartAtDB } from "utils/dbUtils";

const HomeContent = () => {
  const [hovered, setHovered] = useState(-1);
  const navigate = useNavigate();

  const {
    state: { items, cart },
    actions: { updateCart },
  } = useStore();

  const isNotPresentAtCart = (presentCart, item) =>
    !presentCart ||
    (presentCart && !presentCart.map((x) => x.id).includes(item.id));

  async function handleCardItemUpdate(item) {
    let cartUpdated = [];
    if (!cart) {
      cartUpdated = [item];
    } else if (cart && !cart.map((x) => x.id).includes(item.id)) {
      cartUpdated = [...cart, item];
    } else {
      navigate("/checkout/cart");
      return;
    }
    await updateCart(cartUpdated);
    await updateCartAtDB(cartUpdated);
  }

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
        <ADDTOCARTBTN onClick={async () => await handleCardItemUpdate(item)}>
          {isNotPresentAtCart(cart, item) ? (
            <PiHandbagSimpleLight size={16} />
          ) : (
            <PiHandbagSimpleFill size={16} />
          )}

          <span>
            {isNotPresentAtCart(cart, item) ? "ADD TO CART" : "GO TO CART"}{" "}
          </span>
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
