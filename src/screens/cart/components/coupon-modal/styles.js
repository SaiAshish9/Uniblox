import { ModalBtn } from "screens/cart/styles";
import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  height: 44px;
  font-size: 14px;
  box-sizing: border-box;
  padding-top: 10px;
  border-radius: 4px;
  margin-bottom: 4px;
  border: 1px solid #d5d6d9;
  padding: 0px 16px;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${({ isActive }) =>
    isActive === 1 &&
    css`
      border: 1px solid #000;
    `};
  ${({ error }) =>
    error === 1 &&
    css`
      border: 1px solid #ff5722;
    `}
`;

export const Input = styled.input`
  caret-color: #ff3f6c;
  padding: 0;
  border: none;
  width: 75%;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  outline: 0;
  height: 100%;
  font-weight: 300;
`;

export const CheckText = styled.div`
  position: absolute;
  top: 11px;
  right: 16px;
  font-size: 12px;
  color: #ff9fb5;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const ErrorContainer = styled.div`
  text-align: left;
  color: #ff5722;
  font-size: 10px;
  min-height: 20px;
`;

export const ApplyButton = styled(ModalBtn)`
  margin-top: 1.8rem;
`;

export const CouponList = styled.div`
  margin-top: 1.8rem;
`;

export const CouponListItem = styled.div``;

export const CouponCodeItem = styled.div`
  display: flex;
  padding: 8px 12px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 700;
  color: #282c3f;
  border: 1px dashed #282c3f;
  border-radius: 3px;
  width: fit-content;
  cursor: pointer;
  &:hover {
    color: #ff3f6c;
    border: 1px dashed #ff3f6c;
  }
  ${({ active }) =>
    active === 1 &&
    css`
      color: #ff3f6c;
      border: 1px dashed #ff3f6c;
    `}
`;

export const CouponCodeText = styled.p`
  color: #282c3f;
  font-weight: 600;
  font-size: 14px;
  padding-top: 10px;
`;

export const CouponCodeDesc = styled.p`
  color: #282c3f;
  font-size: 12px;
  font-weight: 300;
`;
