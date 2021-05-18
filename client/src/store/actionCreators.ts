import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import * as api from "../api";
import { ProductForm } from "../components/ProductForm";
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
import { Store, CartItemType, TOGGLE } from "./store";

export const fetchProducts = (category?: string): ThunkAction<void, Store, unknown, AnyAction> => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await api.fetchProducts(category);
    dispatch({ type: SET_PRODUCTS, products: data });
    dispatch(setLoading());
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = (product: ProductForm):  ThunkAction<void, Store, unknown, AnyAction> => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id: string):  ThunkAction<void, Store, unknown, AnyAction> => async (dispatch) => {
  try {
    await api.deleteProduct(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct =
  (id: string, product: ProductForm):  ThunkAction<void, Store, unknown, AnyAction> => async (dispatch) => {
    try {
      const { data } = await api.updateProduct(id, product);

      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

export const remove = (id: string) => {
  return {
    type: REMOVE,
    payload: { id },
  };
};

export const toggleAmount = (id: string, toggle: TOGGLE) => {
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
