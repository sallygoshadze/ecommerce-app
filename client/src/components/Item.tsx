import { Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
        <Link to={`/${item.category}/${item.title}`}>
          <Button>View More</Button>
        </Link>,
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
        avatar={
          <img
            // height={150}
            alt={item.title}
            src={item.image}
          />
        }
        title={`$${item.price}`}
        description={
          <div>
            <h4>{item.title}</h4>
            <button>edit</button>
            <button>delete</button>
          </div>
        }
      />
    </Card>
  );
};

export default Item;
