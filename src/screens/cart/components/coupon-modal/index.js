import React, { useState } from "react";
import { Modal } from "antd";
import { ModalHeader } from "screens/cart/styles";
import { ModalContent } from "screens/cart/styles";
import { CloseIcon } from "../card/styles";
import CloseImg from "assets/close.svg";
import {
  ApplyButton,
  CheckText,
  ErrorContainer,
  Input,
  InputContainer,
} from "./styles";

const CouponModal = ({
  couponModalVisible,
  setCouponModalVisible,
  setCoupon,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

  function handleClick() {
    if (value) {
      setCoupon(value);
    }
    setCouponModalVisible(false);
  }

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
        <InputContainer isActive={+isActive}>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => {
              setIsActive(true);
            }}
            onBlur={() => {
              setIsActive(false);
            }}
            placeholder="Enter coupon code"
          />
          <CheckText>CHECK</CheckText>
        </InputContainer>
        {error && (
          <ErrorContainer>
            <p>Sorry, this coupon is not valid for this user account.</p>
          </ErrorContainer>
        )}
        <ApplyButton onClick={handleClick}>Apply</ApplyButton>
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
