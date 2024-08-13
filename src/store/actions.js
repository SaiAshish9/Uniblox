import { UPDATE_CART } from "./types";
import { UPDATE_COUPONS } from "./types";
import { UPDATE_ITEMS } from "./types";
import { UPDATE_USER } from "./types";

export default function useActions(state, dispatch) {
  const updateUser = (user) => dispatch({ type: UPDATE_USER, payload: user });
  const updateItems = (items) =>
    dispatch({ type: UPDATE_ITEMS, payload: items });
  const updateCart = (cart) => dispatch({ type: UPDATE_CART, payload: cart });
  const updateCoupons = (coupons) =>
    dispatch({ type: UPDATE_COUPONS, payload: coupons });

  return { updateUser, updateItems, updateCart, updateCoupons };
}
