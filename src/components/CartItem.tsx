import { Button, Card } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { connect, ConnectedProps } from "react-redux";
import { REMOVE, TOGGLE_AMOUNT, ToggleAmountAction, BaseAction } from "../store/actions";
import { Dispatch } from "redux";
import { CartItemType, TOGGLE } from "../store/store";

const { Meta } = Card;

type Props = { cartItem: CartItemType }

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => {
  const { id } = ownProps.cartItem;
  return {
    remove: () => dispatch<BaseAction>({ type: REMOVE, payload: { id } }),
    toggle: (toggle: TOGGLE) =>
      dispatch<ToggleAmountAction>({ type: TOGGLE_AMOUNT, payload: { id, toggle } }),
  };
};

const connector = connect(null, mapDispatchToProps);

const CartItem: React.FC<ConnectedProps<typeof connector> & Props> = ({
  cartItem,
  remove,
  toggle,
}) => (
  <Card
    size="small"
    hoverable
    style={{ width: 350 }}
    actions={[
      <Button onClick={() => cartItem.amount === 1 ? remove() : toggle(TOGGLE.Decrease)}>
        <MinusOutlined />
      </Button>,
      <h3>{cartItem.amount}</h3>,
      <Button onClick={() => toggle(TOGGLE.Increase)}>
        <PlusOutlined />
      </Button>,
      <Button>
        <DeleteOutlined key="remove" onClick={() => remove()} />
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


export default connector(CartItem);
