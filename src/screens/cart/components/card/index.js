import React from "react";
import {
  CardDecSubText,
  CardDesc,
  CardDescText,
  CardImg,
  CloseIcon,
  Container,
  Dropdown,
  DropdownContainer,
  Duration,
  ItemPriceContainer,
  ItemPriceStrike,
  ItemPriceText,
  ItemProductPriceTag,
} from "./styles";
import CloseImg from "assets/close.svg";
import { MdArrowDropDown } from "react-icons/md";
import { useStore } from "store";
import { updateCartAtDB } from "utils/dbUtils";

const CardContainer = ({ setQtyModalVisible, setSizeModalVisible, item }) => {
  const {
    state: { cart },
    actions: { updateCart },
  } = useStore();

  async function handleClose(e) {
    e.preventDefault();
    e.stopPropagation();
    const cartUpdated = cart.filter((x) => x.id !== item.id);
    await updateCart(cartUpdated);
    await updateCartAtDB(cartUpdated);
  }

  return (
    <Container>
      <CardImg alt="img" src={item.img} />
      <CardDesc>
        <CardDescText>{item.title}</CardDescText>
        <CardDecSubText>{item.desc}</CardDecSubText>
        <ItemPriceContainer>
          <ItemPriceText>{item.price}</ItemPriceText>
          <ItemPriceStrike>{item.strikePrice}</ItemPriceStrike>
          <ItemProductPriceTag>{item.per}</ItemProductPriceTag>
        </ItemPriceContainer>
        <DropdownContainer>
          <Dropdown onClick={() => setSizeModalVisible(true)}>
            Size: {item.size} <MdArrowDropDown />
          </Dropdown>
          <Dropdown onClick={() => setQtyModalVisible(true)}>
            Qty: 1 <MdArrowDropDown />
          </Dropdown>
          <Duration>Low Stock</Duration>
        </DropdownContainer>
      </CardDesc>
      <CloseIcon alt="img" src={CloseImg} onClick={handleClose} />
    </Container>
  );
};

export default CardContainer;
