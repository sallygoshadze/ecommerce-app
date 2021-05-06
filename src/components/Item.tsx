import { Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actionCreators";
import { CartItemType } from "../store/store";

const { Meta } = Card;

type Props = {
  item: CartItemType;
};

const Item: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Card
      // style={{ width: 450 }}
      actions={[
        <Button disabled>Buy Now</Button>,

        <Button
          type="primary"
          onClick={() => {
            dispatch(addToCart(item));
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

export default Item;
