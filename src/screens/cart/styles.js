import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 980px;
  margin: auto;
  padding: 0 10px 16px;
  min-height: 320px;
  color: #282c3f;
  min-height: 320px;
`;

export const CardList = styled.div`
  display: inline-block;
  min-height: 540px;
  width: 64%;
  padding-right: 20px;
  border-right: 1px solid #eaeaec;
  padding-top: 32px;
  height: 100%;
`;

export const ModalContent = styled.div`
  max-width: 306px;
`;

export const ModalHeader = styled.div`
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid #f5f5f6;
  color: #282c3f;
  padding-bottom: 0.5rem;
`;

export const ModalBtn = styled.div`
  font-size: 14px;
  padding: 10px 16px;
  letter-spacing: 1px;
  font-weight: 700;
  max-width: 100%;
  border-radius: 2px;
  border-width: 0px;
  background-color: rgb(255, 63, 108);
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

export const Option = styled.div`
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  position: relative;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #535766;
  color: #282c3f;
  border-radius: 50px;
  margin-right: 12px;
  margin-bottom: 16px;
  ${({ selected }) =>
    selected &&
    css`
      color: #ff3f6c;
      border: 1px solid #ff3f6c;
    `};
  &:hover {
    color: #ff3f6c;
    border: 1px solid #ff3f6c;
  }
`;

export const EmptyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  min-height: 540px;
  p {
    color: #282c3f;
    font-weight: 500;
    font-size: 14px;
  }
`;
