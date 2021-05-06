import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { setProducts } from "./actionCreators";
import { Store, CartItemType } from "./store";

export const getData = (): ThunkAction<
  void,
  Store,
  unknown,
  AnyAction
> => async (dispatch) => {
  const data: CartItemType[] = await (
    await fetch("http://localhost:3001/data")
  ).json();
  dispatch(setProducts(data));
};
