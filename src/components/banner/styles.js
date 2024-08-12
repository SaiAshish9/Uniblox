import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #535766;
  ${({ ishome }) =>
    ishome === 1
      ? css`
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
          background: linear-gradient(90deg, #f9f9ff, #dee8ff);
        `
      : css`
          border-bottom: 1px solid #e9e9ed;
        `}
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-weight: 300;
  position: relative;
  bottom: 3px;
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-left: 15px;
  padding: 0px;
`;

export const TimeIntervalText = styled.p`
  color: #ff3f6c;
  font-size: 20px;
  margin-right: 2px;
  align-self: flex-end;
  position: relative;
  top: 1.5px;

  ${({ b }) =>
    b === 1 &&
    css`
      color: #535766;
      margin: 0 6px;
    `}
  ${({ ishome }) =>
    ishome === 0 &&
    css`
      color: #f16565;
      font-weight: 700;
      font-size: 14px;
      padding: 2px 4px;
      border-radius: 8px;
      background-color: #fdf2dc;
    `}
`;

export const PreText = styled.p`
  margin: 0em;
  font-size: 16px;
  position: relative;
  top: 1px;
  ${({ ishome }) =>
    ishome === 0 &&
    css`
      font-weight: 600;
    `}
`;

export const TimelineSymbol = styled.p`
  color: #535766;
  font-size: 13px;
  margin-left: 6px;
`;
