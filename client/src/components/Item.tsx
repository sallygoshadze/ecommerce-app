import { Card, Button, Menu, Dropdown, Typography } from "antd";
import {
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteProduct } from "../store/actionCreators";
import { CartItemType } from "../store/store";

const { Meta } = Card;
const { Text } = Typography;

type Props = {
  item: CartItemType;
  setCurrentId: any;
};

const Item: React.FC<Props> = ({ item, setCurrentId }) => {
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => setCurrentId(item._id)}>
        <EditOutlined />
        <Text>Edit</Text>
      </Menu.Item>
      <Menu.Item key="1" onClick={() => dispatch(deleteProduct(item._id))}>
        <DeleteOutlined />
        <Text>Delete</Text>
      </Menu.Item>
    </Menu>
  );

  const dispatch = useDispatch();
  return (
    <Card
      // style={{ width: 450 }}
      extra={
        <Dropdown overlay={menu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <EllipsisOutlined style={{ fontSize: "20px" }} />
          </a>
        </Dropdown>
      }
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
            <p>{item.creator}</p>
          </div>
        }
      />
    </Card>
  );
};

export default Item;
