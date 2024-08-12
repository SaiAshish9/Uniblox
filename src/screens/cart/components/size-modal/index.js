import { Modal } from "antd";
import React, { useEffect } from "react";
import { ModalBtn } from "screens/cart/styles";
import { Options, Option } from "screens/cart/styles";
import { ModalHeader } from "screens/cart/styles";
import { ModalContent } from "screens/cart/styles";
import { CloseIcon } from "../card/styles";
import CloseImg from "assets/close.svg";
import { useStore } from "store";
import { updateCartAtDB } from "utils/dbUtils";

const SIZES = [38, 40, 42, 44];

const SizeModal = ({
  sizeModalVisible,
  setSizeModalVisible,
  selectedSize,
  setSelectedSize,
  selectedId,
}) => {
  const {
    state: { cart },
    actions: { updateCart },
  } = useStore();

  useEffect(() => {
    return () => {
      setSelectedSize(null);
    };
  }, []);

  async function handleSubmit() {
    const items = cart.slice();
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === selectedId) {
        items[i].size = selectedSize;
      }
    }
    await updateCart(items);
    await updateCartAtDB(items);
    setSizeModalVisible(false);
  }

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
            <Option
              onClick={() => setSelectedSize(item)}
              selected={+(item === selectedSize)}
              key={item}
            >
              {item}
            </Option>
          ))}
        </Options>
        <ModalBtn onClick={handleSubmit}>DONE</ModalBtn>
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
