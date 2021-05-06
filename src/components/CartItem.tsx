import { Button, Card } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { remove, toggleAmount } from "../store/actionCreators";
import { CartItemType, TOGGLE } from "../store/store";

const { Meta } = Card;

type Props = { cartItem: CartItemType };

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <Card
      size="small"
      hoverable
      style={{ width: 350 }}
      actions={[
        <Button
          onClick={() =>
            cartItem.amount === 1
              ? dispatch(remove(cartItem.id))
              : dispatch(toggleAmount(cartItem.id, TOGGLE.Decrease))
          }
        >
          <MinusOutlined />
        </Button>,
        <h3>{cartItem.amount}</h3>,
        <Button
          onClick={() => dispatch(toggleAmount(cartItem.id, TOGGLE.Increase))}
        >
          <PlusOutlined />
        </Button>,
        <Button>
          <DeleteOutlined
            key="remove"
            onClick={() => dispatch(remove(cartItem.id))}
          />
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
};

export default CartItem;
