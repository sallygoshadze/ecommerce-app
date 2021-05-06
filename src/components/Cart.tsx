import { useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Empty, Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { clear, getTotals, toggleDrawer } from "../store/actionCreators";
import { Store } from "../store/store";

const Cart: React.FC = () => {
  const visible = useSelector((state: Store) => state.visible);
  const total = useSelector((state: Store) => state.total);
  const cartItems = useSelector((state: Store) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  return (
    <Drawer
      width={400}
      title="Your Cart"
      placement="right"
      closable={true}
      onClose={() => dispatch(toggleDrawer())}
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
        onClick={() => dispatch(clear())}
      >
        Clear Cart
      </Button>
    </Drawer>
  );
};

export default Cart;
