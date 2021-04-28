import { CartItemType } from "../App";

type Props = {
  cartItem: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ cartItem, addToCart, removeFromCart }) => (
  <div>
    <h2>{cartItem.title}</h2>
    <p>price: ${cartItem.price}</p>
    <p>Total: ${(cartItem.amount * cartItem.price).toFixed(2)}</p>
    <button onClick={() => removeFromCart(cartItem.id)}>-</button>
    <p>{cartItem.amount}</p>
    <button onClick={() => addToCart(cartItem)}>+</button>
  </div>
);

export default CartItem;
