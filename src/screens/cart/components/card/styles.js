import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  font-size: 14px;
  border: 1px solid #eaeaec;
  border-radius: 4px;
  position: relative;
  padding: 12px 12px 0;
  margin-bottom: 8px;
  padding-bottom: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CardImg = styled.img`
  height: 148px;
  width: 111px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const CardDesc = styled.div`
  padding-left: 12px;
  position: relative;
  margin-bottom: 12px;
  justify-self: flex-start;
`;

export const CardDescText = styled.div`
  font-weight: 700;
`;

export const CardDecSubText = styled.p`
  color: #282c3f;
  font-weight: 300;
`;

export const ItemPriceContainer = styled.div`
  font-size: 14px;
  line-height: 15px;
  color: #282c3f;
  white-space: nowrap;
  margin: 10px 0 0px;
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
  color: #f16565;
  font-weight: 400;
  font-size: 12px;
  margin-left: 5px;
  white-space: nowrap;
`;

export const Duration = styled.div`
  font-size: 10px;
  padding: 2px 4px;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: #ff5722;
  font-weight: 600;
  border: 1px solid #ff5722;
  width: fit-content;
`;

export const Dropdown = styled.div`
  display: inline-block;
  white-space: nowrap;
  padding: 2px 8px;
  background: #f5f5f6;
  color: #282c3f;
  font-weight: 700;
  cursor: pointer;
  margin-right: 12px;
  border-radius: 2px;
  line-height: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0;
`;
