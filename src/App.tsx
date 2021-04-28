import { useState } from "react";
import { useQuery } from "react-query";
import "./App.css";
import { Badge, Drawer, Spin, Row, Col, PageHeader } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Item from "./components/Item";
import Cart from "./components/Cart";

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

const App = () => {
  const [visible, setVisible] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  // get total amount of items in the cart
  const getTotal = (items: CartItemType[]) =>
    items.reduce((total: number, item) => total + item.amount, 0);

  // add to cart
  const addToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // if item is already in the cart, increase the amount
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      // First time the item is added to the cart, amount 1 by default
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  // remove item
  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          // If the amount of the item is 1, remove item from cart
          if (item.amount === 1) return ack;
          // Otherwise, decrease the amount by 1
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  if (isLoading)
    return (
      <Spin
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
        size="large"
      />
    );
  if (error) return <h1>Something went wrong:(</h1>;

  return (
    <div>
      <PageHeader style={{ backgroundColor: "#1890ff" }}>
        <Badge count={getTotal(cartItems)} showZero>
          <ShoppingCartOutlined
            onClick={showDrawer}
            style={{
              fontSize: "25px",
            }}
          />
        </Badge>
      </PageHeader>
      <Drawer
        title="Your Cart"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </Drawer>
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
