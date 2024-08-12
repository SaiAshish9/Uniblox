import React from "react";
import { Modal } from "antd";
import { ModalBtn } from "screens/cart/styles";
import { ModalHeader } from "screens/cart/styles";
import { ModalContent } from "screens/cart/styles";
import { CloseIcon } from "../card/styles";
import CloseImg from "assets/close.svg";

const CouponModal = ({ couponModalVisible, setCouponModalVisible }) => {
  return (
    <Modal
      centered
      footer={null}
      open={couponModalVisible}
      maskClosable={true}
      destroyOnClose
      closable={false}
      width={306}
      onCancel={() => setCouponModalVisible(false)}
    >
      {" "}
      <ModalContent>
        <ModalHeader>Apply Coupon</ModalHeader>

        <ModalBtn>Apply</ModalBtn>
        <CloseIcon
          onClick={() => setCouponModalVisible(false)}
          alt="img"
          src={CloseImg}
        />
      </ModalContent>
    </Modal>
  );
};

export default CouponModal;
