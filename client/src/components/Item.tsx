import { Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteProduct } from "../store/actionCreators";
import { CartItemType } from "../store/store";

const { Meta } = Card;

type Props = {
  item: CartItemType;
  setCurrentId: any;
};

const Item: React.FC<Props> = ({ item, setCurrentId }) => {
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
            <button onClick={() => setCurrentId(item._id)}>edit</button>
            <button onClick={() => dispatch(deleteProduct(item._id))}>
              delete
            </button>
          </div>
        }
      />
    </Card>
  );
};

export default Item;
