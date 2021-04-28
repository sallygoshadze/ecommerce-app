import { CartItemType } from "../App";
import { Card, Button } from "antd";

const { Meta } = Card;

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, addToCart }) => {
  return (
    <Card
      style={{ width: 450 }}
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

export default Item;
