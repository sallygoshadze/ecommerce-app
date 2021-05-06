import { useEffect } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import "./App.css";
import { Layout } from "antd";
import { useDispatch } from "react-redux";
import { getData } from "./store/middlewares";

const { Content } = Layout;

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
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

export default App;
