import React from "react";
import { shallow } from "enzyme";
import CardContainer from "./CardContainer";
import {
  CardDecSubText,
  CardDescText,
  CardImg,
  CloseIcon,
  Container,
  Dropdown,
} from "./styles";
import { useStore } from "store";
import { updateCartAtDB } from "utils/dbUtils";

jest.mock("store", () => ({
  useStore: jest.fn(),
}));

jest.mock("utils/dbUtils", () => ({
  updateCartAtDB: jest.fn(),
}));

describe("CardContainer", () => {
  const mockSetQtyModalVisible = jest.fn();
  const mockSetSizeModalVisible = jest.fn();
  const mockSetSelectedSize = jest.fn();
  const mockSetSelectedId = jest.fn();
  const mockSetSelectedQty = jest.fn();
  const mockUpdateCart = jest.fn();

  const defaultProps = {
    setQtyModalVisible: mockSetQtyModalVisible,
    setSizeModalVisible: mockSetSizeModalVisible,
    item: {
      id: "1",
      img: "img-src",
      title: "Item Title",
      desc: "Item Description",
      price: "$10",
      strikePrice: "$15",
      per: "per unit",
      size: 42,
      qty: 1,
    },
    setSelectedSize: mockSetSelectedSize,
    setSelectedId: mockSetSelectedId,
    setSelectedQty: mockSetSelectedQty,
    isOrder: false,
  };

  beforeEach(() => {
    useStore.mockReturnValue({
      state: { cart: [] },
      actions: { updateCart: mockUpdateCart },
    });
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<CardContainer {...defaultProps} />);
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(CardImg).prop("src")).toEqual(defaultProps.item.img);
    expect(wrapper.find(CardDescText).text()).toEqual(defaultProps.item.title);
    expect(wrapper.find(CardDecSubText).text()).toEqual(defaultProps.item.desc);
  });

  it("should call setSizeModalVisible and setSelectedSize when size dropdown is clicked", () => {
    const wrapper = shallow(<CardContainer {...defaultProps} />);
    wrapper.find(Dropdown).at(0).simulate("click");
    expect(mockSetSelectedId).toHaveBeenCalledWith(defaultProps.item.id);
    expect(mockSetSelectedSize).toHaveBeenCalledWith(defaultProps.item.size);
    expect(mockSetSizeModalVisible).toHaveBeenCalledWith(true);
  });

  it("should call setQtyModalVisible and setSelectedQty when qty dropdown is clicked", () => {
    const wrapper = shallow(<CardContainer {...defaultProps} />);
    wrapper.find(Dropdown).at(1).simulate("click");
    expect(mockSetSelectedId).toHaveBeenCalledWith(defaultProps.item.id);
    expect(mockSetSelectedQty).toHaveBeenCalledWith(defaultProps.item.qty);
    expect(mockSetQtyModalVisible).toHaveBeenCalledWith(true);
  });

  it("should call handleClose when close icon is clicked", async () => {
    const wrapper = shallow(<CardContainer {...defaultProps} />);
    await wrapper.find(CloseIcon).simulate("click", {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    });
    expect(mockUpdateCart).toHaveBeenCalled();
    expect(updateCartAtDB).toHaveBeenCalled();
  });

  it("should not render CloseIcon if isOrder is true", () => {
    const props = { ...defaultProps, isOrder: true };
    const wrapper = shallow(<CardContainer {...props} />);
    expect(wrapper.find(CloseIcon)).toHaveLength(0);
  });
});
