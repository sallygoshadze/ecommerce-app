import { useState } from "react";
import { useQuery } from "react-query";
import "./App.css";
import { Badge, Menu, Layout, Spin, Row, Col, PageHeader } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Item from "./components/Item";

const { Header, Footer, Sider, Content } = Layout;

export type CartItemType = {
  id: number;
  title: string;
  category: string;
  amount: number;
  price: number;
  image: string;
  description: string;
};

const getProducts = async (): Promise<CartItemType[]> => {
  const data = await (await fetch("https://fakestoreapi.com/products")).json();
  return data;
};

// get total

// add to cart
const addToCart = (clickedItem: CartItemType) => null;
// remove item

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  if (isLoading) return <Spin />;
  if (error) return <h1>Something went wrong:(</h1>;

  return (
    <div>
      <PageHeader style={{ backgroundColor: "#1890ff" }}>
        <Badge count={0} showZero>
          <ShoppingCartOutlined
            style={{
              fontSize: "25px",
            }}
          />
        </Badge>
      </PageHeader>

      <Row gutter={[12, 12]} style={{ margin: "2% auto" }}>
        {data?.map((item) => (
          <Col span={8} key={item.id} xs={24} sm={24} md={12} lg={12} xl={8}>
            <Item item={item} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default App;
