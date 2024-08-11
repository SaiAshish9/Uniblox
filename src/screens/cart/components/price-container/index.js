import React from "react";
import {
  CouponText,
  GreenSpanCont,
  OrderSummary,
  OrderSummaryItem,
  PaymentModeContainer,
  PriceBtn,
  PriceDesc,
  PriceSpan1,
  PriceText1,
  ShippingDetailsContainer,
  TotalPriceContainer,
} from "./styles";

const DATA = [
  {
    text1: <span>Total MRP</span>,
    text2: <span>₹4,098</span>,
  },
  {
    text1: <span>Discount on MRP</span>,
    text2: <GreenSpanCont>- ₹3,000</GreenSpanCont>,
  },
  {
    text1: <span>Coupon Discount</span>,
    text2: <CouponText>Apply Coupon</CouponText>,
  },
  {
    text1: <span>Platform Fee</span>,
    text2: <GreenSpanCont>FREE</GreenSpanCont>,
  },
  {
    text1: (
      <div>
        <span>Shipping Fee</span>
        <br />
        <PriceSpan1>Free shipping for you</PriceSpan1>
      </div>
    ),
    text2: <GreenSpanCont top>FREE</GreenSpanCont>,
  },
];

const PriceContainer = () => {
  return (
    <PriceDesc>
      <PriceText1>PRICE DETAILS (2 Items)</PriceText1>
      <OrderSummary>
        {DATA.map((item, key) => (
          <OrderSummaryItem key={key}>
            {item.text1}
            {item.text2}
          </OrderSummaryItem>
        ))}
        <ShippingDetailsContainer>
          <PriceText1>SHIPPING DETAILS</PriceText1>
          <OrderSummaryItem>
            Sai Ashish <br /> +91 8920125544 <br /> R.K. Puram, New Delhi, India{" "}
            <br /> 110067
          </OrderSummaryItem>
        </ShippingDetailsContainer>

        <PaymentModeContainer>
          <span>Payment Mode</span>
          <span>Cash on Delivery (Cash/UPI)</span>
        </PaymentModeContainer>
        <TotalPriceContainer>
          <span>Total Amount</span>
          <span>₹1,098</span>
        </TotalPriceContainer>
      </OrderSummary>
      <PriceBtn>PLACE ORDER</PriceBtn>
    </PriceDesc>
  );
};

export default PriceContainer;
