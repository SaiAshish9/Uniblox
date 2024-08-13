import React, { useEffect, useState } from "react";
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
import { useStore } from "store";
import { nanoid } from "nanoid";
import API from "utils/api";
import { updateCartAtDB } from "utils/dbUtils";
import { updateOrdersAtDB } from "utils/dbUtils";
import { getOrdersFromDB } from "utils/dbUtils";

const buildData = (cart, amount, discount) => [
  {
    text1: <span>Total MRP</span>,
    text2: <span>₹{cart?.length > 0 ? amount.toLocaleString() : 0}</span>,
  },
  {
    text1: <span>Discount on MRP</span>,
    text2: (
      <GreenSpanCont>
        - ₹{cart?.length > 0 ? discount.toLocaleString() : 0}
      </GreenSpanCont>
    ),
  },
  {
    text1: <span>Coupon Discount</span>,
    text2: <CouponText>Apply Coupon</CouponText>,
    coupon: true,
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
    text2: <GreenSpanCont top={1}>FREE</GreenSpanCont>,
  },
];

const PriceContainer = ({ setCouponModalVisible, coupon, isOrder }) => {
  const {
    state: { cart, user },
    actions: { updateCart, updateOrders },
  } = useStore();

  const [amount, setAmount] = useState(0);
  const [totalDiscountOnMRP, setTotalDiscountOnMRP] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cart && cart.length > 0) {
      const tempAmount = cart.reduce(
        (a, b) => a + +b.price.split("Rs. ")[1] * b.qty,
        0
      );
      const tempDiscountOnMRP = cart.reduce(
        (a, b) =>
          a +
          (+b.strikePrice.split("Rs. ")[1] - +b.price.split("Rs. ")[1]) * b.qty,
        0
      );
      setAmount(tempAmount);
      setTotalDiscountOnMRP(tempDiscountOnMRP);
      if (coupon) {
        setTotalAmount(
          (tempAmount * (1 - coupon.discountPercentage / 100)).toFixed(2)
        );
      } else {
        setTotalAmount(tempAmount);
      }
    }
  }, [cart, coupon]);

  async function handleOrder() {
    try {
      if (cart === null || cart?.length === 0) return;
      const existingOrders = await getOrdersFromDB();
      let payload = [];
      const temp = {
        cart,
        amount,
        totalDiscountOnMRP,
        coupon,
        totalAmount,
        id: nanoid(),
        userId: user.id,
      };
      if (existingOrders?.length > 0) {
        payload = [...existingOrders, temp];
      } else {
        payload = [temp];
      }
      await updateOrders(payload);
      await updateOrdersAtDB(payload);
      await updateCart(null);
      await updateCartAtDB([]);
      setTotalAmount(null);
    } catch (e) {
      console.error("Error:", e);
    }
  }

  return (
    <PriceDesc>
      <PriceText1>PRICE DETAILS ({cart?.length ?? 0} Items)</PriceText1>
      <OrderSummary>
        {buildData(cart, amount, totalDiscountOnMRP).map((item, key) => (
          <OrderSummaryItem key={key}>
            {item.text1}
            <span
              onClick={() => {
                if (item.coupon && !isOrder) {
                  setCouponModalVisible(true);
                }
              }}
            >
              {coupon && item.coupon ? (
                <CouponText isorder={+isOrder}>{coupon.id}</CouponText>
              ) : (
                item.text2
              )}
            </span>
          </OrderSummaryItem>
        ))}
        {user && (
          <ShippingDetailsContainer>
            <PriceText1>SHIPPING DETAILS</PriceText1>
            <OrderSummaryItem>
              {user.name} <br /> {user.phoneNumber} <br />{" "}
              {user.address[0].type} <br />
              {user.address[0].locality}, {user.address[0].city},{" "}
              {user.address[0].country} <br /> {user.address[0].pinCode}
            </OrderSummaryItem>
          </ShippingDetailsContainer>
        )}

        <PaymentModeContainer>
          <span>Payment Mode</span>
          <span>Cash on Delivery (Cash/UPI)</span>
        </PaymentModeContainer>
        <TotalPriceContainer>
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </TotalPriceContainer>
      </OrderSummary>
      {!isOrder && <PriceBtn onClick={handleOrder}>PLACE ORDER</PriceBtn>}
    </PriceDesc>
  );
};

export default PriceContainer;
