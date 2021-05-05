import { Card, Button } from "antd";
import { connect, ConnectedProps } from "react-redux";
import { AddToCartAction, ADD_TO_CART } from "../store/actions";
import { Dispatch } from "redux";
import { CartItemType } from "../store/store";

const { Meta } = Card;

type Props = {
  item: CartItemType;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { addToCart: (item: CartItemType) => dispatch<AddToCartAction>({ type: ADD_TO_CART, payload: item }) };
};

const connector = connect(null, mapDispatchToProps);

const Item: React.FC<ConnectedProps<typeof connector> & Props> = ({ item, addToCart }) => {
  return (
    <Card
      // style={{ width: 450 }}
      actions={[
        <Button disabled>Buy Now</Button>,

        <Button
          type="primary"
          onClick={() => {
            addToCart(item);
          }}
        >
          Add To Cart
        </Button>,
      ]}
    >
      <Meta
        avatar={<img height={150} alt={item.title} src={item.image} />}
        title={`$${item.price}`}
        description={<h4>{item.title}</h4>}
      />
    </Card>
  );
};


export default connector(Item);
