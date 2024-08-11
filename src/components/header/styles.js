import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 2px;
  padding: 0 3rem;
`;

export const BadgeContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  height: 2rem;
  cursor: pointer;
  margin-left: 1.5rem;
`;

export const Badge = styled.div`
  background: #ff3f6c;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  top: -6px;
  right: -10px;
`;

export const LabelsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 3rem;
`;

export const Label = styled.p`
  color: #282c3f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  padding: 0 28px;
  padding-top: 3px;
  cursor: pointer;
  height: 80px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid #fff;
  &:hover {
    border-bottom: 3px solid ${({ bgcolor }) => bgcolor};
  }
`;

export const LabelLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
