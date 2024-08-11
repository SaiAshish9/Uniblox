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

const CardContainer = ({ setQtyModalVisible, setSizeModalVisible }) => {
  return (
    <Container>
      <CardImg
        alt="img"
        src="https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/8717979/2019/3/20/585db9fe-1df0-458d-b218-6f514eabb9601553068826233-Mast--Harbour-Men-Shirts-4141553068825026-1.jpg"
      />
      <CardDesc>
        <CardDescText>Mast & Harbour</CardDescText>
        <CardDecSubText>
          Men Navy Blue & Red Checked Casual Sustainable Shirt
        </CardDecSubText>
        <ItemPriceContainer>
          <ItemPriceText>₹ 599</ItemPriceText>
          <ItemPriceStrike>₹ 1,999</ItemPriceStrike>
          <ItemProductPriceTag>64% OFF</ItemProductPriceTag>
        </ItemPriceContainer>
        <DropdownContainer>
          <Dropdown onClick={() => setSizeModalVisible(true)}>
            Size: 38 <MdArrowDropDown />
          </Dropdown>
          <Dropdown onClick={() => setQtyModalVisible(true)}>
            Qty: 1 <MdArrowDropDown />
          </Dropdown>
          <Duration>5 left</Duration>
        </DropdownContainer>
      </CardDesc>
      <CloseIcon alt="img" src={CloseImg} />
    </Container>
  );
};

export default CardContainer;
