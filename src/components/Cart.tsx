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
        <Empty
          image={
            <img src="https://cdn.dribbble.com/users/1244867/screenshots/4346888/empty_cart.jpg?compress=1&resize=400x300" />
          }
          description="Your cart is currently empty"
        />
      ) : (
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
      )}

      {cartItems.length > 0 ? (
        <div>
          <h2 style={{ marginTop: "10px" }}>Total: ${total}</h2>
          <div className="btn-container">
            <Button size="large" disabled>
              Buy Now
            </Button>
            <Button
              size="large"
              type="primary"
              danger
              onClick={() => dispatch(clear())}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      ) : null}
    </Drawer>
  );
};

export default Cart;
