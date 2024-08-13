import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { ModalHeader } from "screens/cart/styles";
import { ModalContent } from "screens/cart/styles";
import { CloseIcon } from "../card/styles";
import CloseImg from "assets/close.svg";
import {
  ApplyButton,
  CheckText,
  CouponCodeDesc,
  CouponCodeItem,
  CouponCodeText,
  CouponList,
  CouponListItem,
  ErrorContainer,
  Input,
  InputContainer,
} from "./styles";
import { useStore } from "store";

const CouponModal = ({
  couponModalVisible,
  setCouponModalVisible,
  setCoupon,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [verified, setVerified] = useState(false);
  const [suggestion, setSuggestion] = useState(null);

  const {
    state: { coupons, user },
  } = useStore();

  function handleClick() {
    if (value && coupons?.length > 0) {
      setCoupon(coupons.filter((x) => x.id === value)[0]);
    }
    setCouponModalVisible(false);
  }

  function handleCheck() {
    if (!verified) {
      if (
        coupons &&
        user &&
        user.appliedCoupons?.length > 0 &&
        coupons
          .filter(
            (element) =>
              !user.appliedCoupons.map((x) => x.id).includes(element.id)
          )
          .map((x) => x.id)
          .includes(value)
      ) {
        setVerified(true);
      } else if (
        coupons &&
        !user.appliedCoupons &&
        coupons.map((x) => x.id).includes(value)
      ) {
        setVerified(true);
      } else {
        setError(1);
      }
    }
  }

  function handleInputChange(e) {
    if (e.target.value === suggestion?.id) {
      setVerified(true);
    } else {
      setVerified(false);
    }
    setValue(e.target.value);
    setError(null);
  }

  useEffect(() => {
    try {
      if (coupons?.length > 0 && user && Object.keys(user).length > 0) {
        if (user.appliedCoupons?.length > 0) {
          setSuggestion(
            coupons.filter(
              (element) =>
                !user.appliedCoupons.map((x) => x.id).includes(element.id)
            )[0]
          );
        } else {
          setSuggestion(coupons[0]);
        }
      }
    } catch (e) {}
  }, [coupons, user]);

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
        <InputContainer error={error} isActive={+isActive}>
          <Input
            value={value}
            onChange={(e) => handleInputChange(e)}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            placeholder="Enter coupon code"
          />
          <CheckText onClick={handleCheck}>
            {verified ? "VERIFIED" : "CHECK"}
          </CheckText>
        </InputContainer>
        {error && (
          <ErrorContainer>
            <p>Sorry, this coupon is not valid for this user account.</p>
          </ErrorContainer>
        )}
        {suggestion && (
          <CouponList>
            <CouponListItem>
              <CouponCodeItem
                active={+(value === suggestion.id)}
                onClick={() => {
                  setValue(suggestion.id);
                  setVerified(true);
                }}
              >
                {suggestion.id}
              </CouponCodeItem>
              <CouponCodeText>
                Save {suggestion.discountPercentage}%
              </CouponCodeText>
              <CouponCodeDesc>
                Expires on:{" "}
                {new Date(suggestion.expirationDate).toLocaleDateString()}
              </CouponCodeDesc>
            </CouponListItem>
          </CouponList>
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
