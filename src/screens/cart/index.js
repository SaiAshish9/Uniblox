import React, { useState } from "react";
import { CardList, Container, EmptyContainer } from "./styles";
import {
  CardContainer,
  CouponModal,
  PriceContainer,
  QtyModal,
  SizeModal,
} from "./components";
import { useStore } from "store";
import { TbMoodEmpty } from "react-icons/tb";

const Cart = () => {
  const [sizeModalVisible, setSizeModalVisible] = useState(false);
  const [qtyModalVisible, setQtyModalVisible] = useState(false);
  const [couponModalVisible, setCouponModalVisible] = useState(false);
  const [coupon, setCoupon] = useState(null);

  const {
    state: { cart },
  } = useStore();

  return (
    <Container>
      <CardList>
        {cart?.length > 0 ? (
          cart.map((item, _) => (
            <CardContainer
              setQtyModalVisible={setQtyModalVisible}
              setSizeModalVisible={setSizeModalVisible}
              setCouponModalVisible={setCouponModalVisible}
              item={item}
              key={item.id}
            />
          ))
        ) : (
          <EmptyContainer>
            <TbMoodEmpty size={24} color="#ff3f6c" />
            <p>Empty Cart!</p>
          </EmptyContainer>
        )}
      </CardList>
      <PriceContainer
        coupon={coupon}
        setCouponModalVisible={setCouponModalVisible}
      />
      <QtyModal
        qtyModalVisible={qtyModalVisible}
        setQtyModalVisible={setQtyModalVisible}
      />
      <SizeModal
        sizeModalVisible={sizeModalVisible}
        setSizeModalVisible={setSizeModalVisible}
      />
      <CouponModal
        couponModalVisible={couponModalVisible}
        setCouponModalVisible={setCouponModalVisible}
        setCoupon={setCoupon}
      />
    </Container>
  );
};

export default Cart;
