import { useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Empty, Drawer } from "antd";
import { connect, ConnectedProps } from "react-redux";
import {
  CLEAR,
  GET_TOTALS,
  TOGGLE_DRAWER,
} from "../store/actions";
import { Store } from "../store/store";

const mapStateToProps = (
  state: Store
): Pick<Store, "cartItems" | "total" | "visible"> => {
  return {
    cartItems: state.cartItems,
    total: state.total,
    visible: state.visible,
  };
};

const connector = connect(mapStateToProps);

const Cart: React.FC<ConnectedProps<typeof connector>> = ({
  visible,
  cartItems,
  total,
  dispatch,
}) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cartItems, dispatch]);

  return (
    <Drawer
      width={400}
      title="Your Cart"
      placement="right"
      closable={true}
      onClose={() => dispatch({ type: TOGGLE_DRAWER })}
      visible={visible}
    >
      {cartItems.length === 0 ? (
        <Empty description="Your cart is currently empty" />
      ) : (
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
      )}
      <h2>Total: ${total}</h2>
      <Button
        size="large"
        type="primary"
        danger
        onClick={() => dispatch({ type: CLEAR })}
      >
        Clear Cart
      </Button>
    </Drawer>
  );
};

export default connector(Cart);
