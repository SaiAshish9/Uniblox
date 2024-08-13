import styled, { css } from "styled-components";

export const PriceDesc = styled.div`
  display: inline-block;
  width: 35%;
  padding: 24px 0 0 16px;
  height: 100%;
`;

export const PriceText1 = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin: 8px 0 16px;
  color: #535766;
`;

export const OrderSummary = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const OrderSummaryItem = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
`;

export const PaymentModeContainer = styled.div`
  font-weight: 700;
  font-size: 15px;
  padding: 16px 0;
  border-top: 1px solid #eaeaec;
  color: #3e4152;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalPriceContainer = styled.div`
  font-weight: 700;
  font-size: 15px;
  padding-top: 16px;
  border-top: 1px solid #eaeaec;
  color: #3e4152;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceBtn = styled.div`
  font-size: 14px;
  padding: 10px 16px;
  letter-spacing: 1px;
  font-weight: 700;
  border-radius: 2px;
  border-width: 0px;
  background-color: rgb(255, 63, 108);
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GreenSpanCont = styled.span`
  color: #03a685;
  ${({ top }) =>
    top === 1 &&
    css`
      align-self: flex-start;
    `}
`;

export const CouponText = styled.p`
  color: #ff3f6c;
  ${({ isorder }) =>
    isorder !== 1 &&
    css`
      cursor: pointer;
    `}
`;

export const PriceSpan1 = styled.span`
  color: #686b79;
  font-size: 12px;
`;

export const PriceSpanCont = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShippingDetailsContainer = styled.div`
  border-top: 1px solid #eaeaec;
`;
