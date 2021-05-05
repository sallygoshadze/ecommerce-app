import { AnyAction } from "redux";
import { CartItemType, TOGGLE } from "./store";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE = "REMOVE";
export const CLEAR = "CLEAR";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

export type BasePayload = { id: number };
export type BaseAction = AnyAction & { payload: BasePayload };

export type ToggleAmountActionPayload = BasePayload & { toggle: TOGGLE };
export type ToggleAmountAction = AnyAction & {
  payload: ToggleAmountActionPayload;
};

export type AddToCartAction = AnyAction & { payload: CartItemType };
export type SetProductsAction = AnyAction & { payload: CartItemType[] };
