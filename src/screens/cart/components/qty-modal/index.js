import React from "react";
import { Modal } from "antd";
import { ModalBtn } from "screens/cart/styles";
import { Options, Option } from "screens/cart/styles";
import { ModalHeader } from "screens/cart/styles";
import { ModalContent } from "screens/cart/styles";
import { CloseIcon } from "../card/styles";
import CloseImg from "assets/close.svg";

const QtyModal = ({ qtyModalVisible, setQtyModalVisible }) => {
  return (
    <Modal
      centered
      footer={null}
      open={qtyModalVisible}
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
  );
};

export default QtyModal;
