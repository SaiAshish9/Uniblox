import { UPDATE_ITEMS } from "./types";
import { UPDATE_USER } from "./types";

export default function useActions(state, dispatch) {
  const updateUser = (user) => dispatch({ type: UPDATE_USER, payload: user });
  const updateItems = (items) =>
    dispatch({ type: UPDATE_ITEMS, payload: items });

  return { updateUser, updateItems };
}
