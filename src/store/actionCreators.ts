import {
  ADD_TO_CART,
  CLEAR,
  GET_TOTALS,
  REMOVE,
  SET_PRODUCTS,
  TOGGLE_AMOUNT,
  TOGGLE_DRAWER,
} from "./actionConstants";
import { CartItemType, TOGGLE } from "./store";

export const remove = (id: number) => {
  return {
    type: REMOVE,
    payload: { id },
  };
};

export const toggleAmount = (id: number, toggle: TOGGLE) => {
  return {
    type: TOGGLE_AMOUNT,
    payload: { id, toggle },
  };
};

export const setProducts = (data: CartItemType[]) => {
  return {
    type: SET_PRODUCTS,
    products: data,
  };
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};

export const getTotals = () => {
  return {
    type: GET_TOTALS,
  };
};

export const toggleDrawer = () => {
  return {
    type: TOGGLE_DRAWER,
  };
};

export const addToCart = (item: CartItemType) => {
  return {
    type: ADD_TO_CART,
    item: item,
  };
};