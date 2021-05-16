import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

export type CartItemType = {
  id: number;
  title: string;
  category: string;
  amount: number;
  price: number;
  image: string;
  description: string;
};

export type Store = {
  visible: boolean;
  cartItems: CartItemType[];
  products: CartItemType[];
  total: number;
  amount: number;
  loading: boolean;
};

export const initialStore: Store = {
  products: [],
  cartItems: [],
  visible: false,
  total: 0,
  amount: 0,
  loading: false,
};

export type AppDispatch = typeof store.dispatch;
export enum TOGGLE {
  Increase = "increase",
  Decrease = "decrease",
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(reducer, composedEnhancer);
