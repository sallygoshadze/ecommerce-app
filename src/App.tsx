import { useEffect } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import "./App.css";
import { Layout } from "antd";
import { connect, ConnectedProps } from "react-redux";
import { SetProductsAction, SET_PRODUCTS } from "./store/actions";
import { Dispatch } from "redux";
import { CartItemType } from "./store/store";

const { Content } = Layout;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setProducts: (data: CartItemType[]) =>
      dispatch<SetProductsAction>({ type: SET_PRODUCTS, payload: data }),
  };
};

const connector = connect(null, mapDispatchToProps);

const App: React.FC<ConnectedProps<typeof connector>> = ({ setProducts }) => {
  const fetchProducts = async (): Promise<void> => {
    const data: CartItemType[] = await (
      await fetch("https://fakestoreapi.com/products")
    ).json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content>
          <Cart />
          <Products />
        </Content>
      </Layout>
    </Layout>
  );
};

export default connector(App);
