import { AnyAction } from "redux";
import {
  ADD_TO_CART,
  CREATE,
  CLEAR,
  GET_TOTALS,
  REMOVE,
  SET_LOADING,
  SET_PRODUCTS,
  ToggleAmountAction,
  TOGGLE_AMOUNT,
  TOGGLE_DRAWER,
} from "./actionConstants";
import { initialStore, TOGGLE } from "./store";

const reducer = (state = initialStore, action: AnyAction) => {
  switch (action.type) {
    case CREATE:
      return { ...state, products: [...state.products, action.payload] };

    case SET_PRODUCTS:
      return { ...state, products: action.products };

    case ADD_TO_CART:
      const foundItem = state.cartItems.find(
        (cartItem) => action.item.id === cartItem.id
      );
      if (foundItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) => {
            if (action.item.id === cartItem.id) {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }

            return cartItem;
          }),
        };
      } else {
        const updatedCart = [...state.cartItems, { ...action.item, amount: 1 }];
        return { ...state, cartItems: updatedCart };
      }

    case TOGGLE_DRAWER:
      return { ...state, visible: !state.visible };

    case CLEAR:
      return { ...state, cartItems: [] };

    case REMOVE:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case GET_TOTALS:
      let { total, amount } = state.cartItems.reduce(
        (total, item) => {
          const { price, amount } = item;
          const itemTotal = price * amount;
          total.total += itemTotal;
          total.amount += amount;
          return total;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case TOGGLE_AMOUNT:
      const { payload } = action as ToggleAmountAction;
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === payload.id) {
            if (payload.toggle === TOGGLE.Increase) {
              return (item = { ...item, amount: item.amount + 1 });
            }
            if (payload.toggle === TOGGLE.Decrease) {
              return (item = { ...item, amount: item.amount - 1 });
            }
          }

          return item;
        }),
      };

    case SET_LOADING:
      return { ...state, loading: !state.loading };

    default:
      return state;
  }
};

export default reducer;