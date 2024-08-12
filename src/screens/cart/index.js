import React, { useState } from "react";
import { CardList, Container } from "./styles";
import {
  CardContainer,
  CouponModal,
  PriceContainer,
  QtyModal,
  SizeModal,
} from "./components";

const Cart = () => {
  const [sizeModalVisible, setSizeModalVisible] = useState(false);
  const [qtyModalVisible, setQtyModalVisible] = useState(false);
  const [couponModalVisible, setCouponModalVisible] = useState(false);

  return (
    <Container>
      <CardList>
        {[...Array(2).keys()].map((item, _) => (
          <CardContainer
            setQtyModalVisible={setQtyModalVisible}
            setSizeModalVisible={setSizeModalVisible}
            setCouponModalVisible={setCouponModalVisible}
            key={item}
          />
        ))}
      </CardList>
      <PriceContainer />
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
      />
    </Container>
  );
};

export default Cart;
