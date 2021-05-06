import { Badge, Layout } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../store/store";
import { toggleDrawer } from "../store/actionCreators";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const amount = useSelector((state: Store) => state.amount);
  const dispatch = useDispatch();
  return (
    <Header className="site-page-header">
      <Badge count={amount} showZero>
        <ShoppingCartOutlined
          onClick={() => dispatch(toggleDrawer())}
          style={{
            fontSize: "25px",
            color: "#fff",
          }}
        />
      </Badge>
    </Header>
  );
};

export default Navbar;
