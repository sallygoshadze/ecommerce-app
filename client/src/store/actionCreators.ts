import * as api from "../api";
import {
  ADD_TO_CART,
  CLEAR,
  CREATE,
  GET_TOTALS,
  REMOVE,
  SET_LOADING,
  SET_PRODUCTS,
  TOGGLE_AMOUNT,
  TOGGLE_DRAWER,
} from "./actionConstants";
import { CartItemType, TOGGLE } from "./store";

export const createProduct = (product: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createProduct(product);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

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

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
