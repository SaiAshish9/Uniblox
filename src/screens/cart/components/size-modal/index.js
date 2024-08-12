import { Modal } from "antd";
import React from "react";
import { ModalBtn } from "screens/cart/styles";
import { Options, Option } from "screens/cart/styles";
import { ModalHeader } from "screens/cart/styles";
import { ModalContent } from "screens/cart/styles";
import { CloseIcon } from "../card/styles";
import CloseImg from "assets/close.svg";

const SIZES = [38, 40, 42, 44];

const SizeModal = ({ sizeModalVisible, setSizeModalVisible }) => {
  return (
    <Modal
      centered
      footer={null}
      open={sizeModalVisible}
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
  );
};

export default SizeModal;
