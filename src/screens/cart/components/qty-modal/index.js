import React, { useEffect } from "react";
import { Modal } from "antd";
import { ModalBtn } from "screens/cart/styles";
import { Options, Option } from "screens/cart/styles";
import { ModalHeader } from "screens/cart/styles";
import { ModalContent } from "screens/cart/styles";
import { CloseIcon } from "../card/styles";
import CloseImg from "assets/close.svg";
import { useStore } from "store";
import { updateCartAtDB } from "utils/dbUtils";

const QtyModal = ({
  qtyModalVisible,
  setQtyModalVisible,
  selectedQty,
  setSelectedQty,
  selectedId,
}) => {
  const {
    state: { cart },
    actions: { updateCart },
  } = useStore();

  useEffect(() => {
    return () => {
      setSelectedQty(null);
    };
  }, []);

  async function handleSubmit() {
    const items = cart.slice();
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === selectedId) {
        items[i].qty = selectedQty;
      }
    }
    await updateCart(items);
    await updateCartAtDB(items);
    setQtyModalVisible(false);
  }
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
              <Option
                onClick={() => setSelectedQty(item)}
                selected={+(item === selectedQty)}
                key={item}
              >
                {item}
              </Option>
            ))}
        </Options>
        <ModalBtn onClick={handleSubmit}>DONE</ModalBtn>
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
