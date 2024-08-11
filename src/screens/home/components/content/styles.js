import styled, { css } from "styled-components";

export const Container = styled.div``;

export const TitleContainer = styled.div`
  font-size: 14px;
  padding: 20px 0;
  padding-left: 25px;
  color: #282c3f;
  font-size: 16px;
  font-weight: 700;
  span {
    color: #878b94;
    font-weight: 300;
  }
  border-bottom: 1px solid #e9e9ed;
`;

export const ItemContainer = styled.div`
  padding-top: 24px;
  padding-left: 15px;
  padding-right: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const Item = styled.div`
  width: 210px;
  margin: 0 10px 30px;
  &:hover {
    box-shadow: 0 2px 16px 4px rgba(40, 44, 63, 0.07);
  }
  height: 350px;
  position: relative;
`;

export const ItemImg = styled.img`
  cursor: pointer;
  width: 210px;
  position: absolute;
  top: 0px;
  z-index: 1;
  height: 280px;
`;

export const ItemDesc = styled.div`
  padding: 0 10px;
  position: absolute;
  bottom: 0px;
  z-index: 2;
  background: #fff;
  ${({ hovered }) =>
    +hovered === 1
      ? css`
          height: 95px;
        `
      : css`
          height: 75px;
        `};
  width: 190px;
  overflow: hidden;
`;

export const ItemBrand = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  color: #282c3f;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.5rem;
`;

export const ItemProduct = styled.p`
  color: #535766;
  font-size: 14px;
  line-height: 1;
  margin-bottom: 0;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 300;
  display: block;
  width: fit-content;
  max-width: 200px;
`;

export const ItemPriceContainer = styled.div`
  font-size: 14px;
  line-height: 15px;
  color: #282c3f;
  white-space: nowrap;
  margin: 10px 0 6px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
`;

export const ItemPriceText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #282c3f;
`;

export const ItemPriceStrike = styled.p`
  text-decoration: line-through;
  color: #7e818c;
  font-weight: 300;
  margin-left: 5px;
  font-size: 12px;
`;

export const ItemProductPriceTag = styled.p`
  color: #ff905a;
  font-weight: 400;
  font-size: 12px;
  margin-left: 5px;
  white-space: nowrap;
`;

export const ADDTOCARTBTN = styled.div`
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #d4d5d9;
  &:hover {
    border: 1px solid #000;
  }
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  span {
    margin-left: 0.4rem;
    position: relative;
    bottom: 1px;
  }
`;

export const AddToCartContainer = styled.div`
  margin: 0.5rem 0;
  width: 190px;
`;
