import { UPDATE_CART } from "./types";
import { UPDATE_ITEMS } from "./types";
import { UPDATE_USER } from "./types";

export const initialState = {
  user: null,
  items: null,
  cart: null,
};

export default function reducer(state, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}
