import { CartItemType } from "../App";
import CartItem from "./CartItem";
import { Empty } from "antd";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateToTal = (items: CartItemType[]) => {
    return items.reduce(
      (ack: number, item) => ack + item.price * item.amount,
      0
    );
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <Empty description="Your cart is currently empty" />
      ) : (
        cartItems.map((item) => (
          <div>
            <CartItem
              key={item.id}
              cartItem={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
            <h2>Total: ${calculateToTal(cartItems).toFixed(2)}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
