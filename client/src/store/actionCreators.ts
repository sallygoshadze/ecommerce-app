import * as api from "../api";
import {
  ADD_TO_CART,
  CLEAR,
  CREATE,
  DELETE,
  GET_TOTALS,
  REMOVE,
  SET_LOADING,
  SET_PRODUCTS,
  TOGGLE_AMOUNT,
  TOGGLE_DRAWER,
  UPDATE,
} from "./actionConstants";
import { CartItemType, TOGGLE } from "./store";

export const fetchProducts = (category?: string) => async (dispatch: any) => {
  try {
    dispatch(setLoading());
    const { data } = await api.fetchProducts(category);
    dispatch({ type: SET_PRODUCTS, products: data });
    dispatch(setLoading());
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = (product: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createProduct(product);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id: any) => async (dispatch: any) => {
  try {
    console.log("id", id);
    await api.deleteProduct(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct =
  (id: any, product: any) => async (dispatch: any) => {
    try {
      const { data } = await api.updateProduct(id, product);

      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.error(error);
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
