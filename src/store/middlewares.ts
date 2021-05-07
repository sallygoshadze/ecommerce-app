import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { setLoading, setProducts } from "./actionCreators";
import { Store, CartItemType } from "./store";

export const getData = (
  category?: string
): ThunkAction<void, Store, unknown, AnyAction> => async (dispatch) => {
  let url = "http://localhost:3001/data";
  if (category) url = `${url}?category=${category}`;
  dispatch(setLoading());
  const data: CartItemType[] = await (await fetch(url)).json();
  dispatch(setProducts(data));
  dispatch(setLoading());
};
