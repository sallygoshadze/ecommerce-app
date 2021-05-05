import { createStore } from "redux";
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
};

export const initialStore: Store = {
  products: [],
  cartItems: [],
  visible: false,
  total: 0,
  amount: 0,
};

export type AppDispatch = typeof store.dispatch;
export enum TOGGLE { Increase = 'increase', Decrease = 'decrease' }

export const store = createStore(reducer);
