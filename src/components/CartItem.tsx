import { CartItemType } from "../App";
import { Button, Card } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Meta } = Card;

type Props = {
  cartItem: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ cartItem, addToCart, removeFromCart }) => (
  <Card
    size="small"
    hoverable
    style={{ width: 350 }}
    actions={[
      <Button onClick={() => removeFromCart(cartItem.id)}>
        <MinusOutlined />
      </Button>,
      <h3>{cartItem.amount}</h3>,
      <Button onClick={() => addToCart(cartItem)}>
        <PlusOutlined />
      </Button>,
    ]}
  >
    <Meta
      avatar={<img alt={cartItem.title} src={cartItem.image} />}
      title={<h3>Price: ${(cartItem.amount * cartItem.price).toFixed(2)}</h3>}
      description={
        <div>
          <h4>{cartItem.title}</h4>
          <br />
          <h4>{`Price for one piece: $${cartItem.price}`}</h4>
        </div>
      }
    />
  </Card>
);

export default CartItem;
