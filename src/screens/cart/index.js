import React, { useState } from "react";
import {
  CardList,
  Container,
  ModalBtn,
  ModalContent,
  ModalHeader,
  Options,
  Option,
} from "./styles";
import { CardContainer, PriceContainer } from "./components";
import { Modal } from "antd";
import CloseImg from "assets/close.svg";
import { CloseIcon } from "./components/card/styles";

const SIZES = [38, 40, 42, 44];

const Cart = () => {
  const [sizeModalVisibile, setSizeModalVisible] = useState(false);
  const [qtyModalVisibile, setQtyModalVisible] = useState(false);
  const [couponModalVisible, setCouponModalVisible] = useState(false);

  return (
    <Container>
      <CardList>
        {[...Array(2).keys()].map((item, _) => (
          <CardContainer
            setQtyModalVisible={setQtyModalVisible}
            setSizeModalVisible={setSizeModalVisible}
            key={item}
          />
        ))}
      </CardList>
      <PriceContainer />
      <Modal
        centered
        footer={null}
        open={sizeModalVisibile}
        maskClosable={true}
        destroyOnClose
        closable={false}
        width={306}
        onCancel={() => setSizeModalVisible(false)}
      >
        <ModalContent>
          <ModalHeader>Select Size</ModalHeader>
          <Options>
            {SIZES.map((item, _) => (
              <Option selected={+(item === 38)} key={item}>
                {item}
              </Option>
            ))}
          </Options>
          <ModalBtn>DONE</ModalBtn>
          <CloseIcon
            onClick={() => setSizeModalVisible(false)}
            alt="img"
            src={CloseImg}
          />
        </ModalContent>
      </Modal>
      <Modal
        centered
        footer={null}
        open={qtyModalVisibile}
        maskClosable={true}
        destroyOnClose
        closable={false}
        width={306}
        onCancel={() => setQtyModalVisible(false)}
      >
        {" "}
        <ModalContent>
          <ModalHeader>Select Quantity</ModalHeader>
          <Options>
            {[...Array(10).keys()]
              .map((x) => x + 1)
              .map((item, _) => (
                <Option selected={+(item === 1)} key={item}>
                  {item}
                </Option>
              ))}
          </Options>
          <ModalBtn>DONE</ModalBtn>
          <CloseIcon
            onClick={() => setQtyModalVisible(false)}
            alt="img"
            src={CloseImg}
          />
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Cart;
