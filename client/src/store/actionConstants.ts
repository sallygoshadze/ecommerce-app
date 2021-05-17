import { AnyAction } from "redux";
import { CartItemType, TOGGLE } from "./store";

export type BasePayload = { id: number };
export type BaseAction = AnyAction & { payload: BasePayload };
export const REMOVE = "REMOVE";

export type AddToCartAction = AnyAction & { payload: CartItemType };
export const ADD_TO_CART = "ADD_TO_CART";

export type ToggleAmountActionPayload = BasePayload & { toggle: TOGGLE };
export type ToggleAmountAction = AnyAction & {
  payload: ToggleAmountActionPayload;
};
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";

export type SetProductsAction = AnyAction & { payload: CartItemType[] };
export const SET_PRODUCTS = "SET_PRODUCTS";

export const CLEAR = "CLEAR";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const SET_LOADING = "SET_LOADING";
export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
