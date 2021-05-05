import { Badge, Layout } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { connect, ConnectedProps } from "react-redux";
import { Store } from "../store/store";
import { TOGGLE_DRAWER } from "../store/actions";

const { Header } = Layout;

const mapStateToProps = (state: Store) => {
  return { amount: state.amount };
};

const connector = connect(mapStateToProps);

const Navbar: React.FC<ConnectedProps<typeof connector>> = ({
  amount,
  dispatch,
}) => {
  return (
    <Header className="site-page-header">
      <Badge count={amount} showZero>
        <ShoppingCartOutlined
          onClick={() => dispatch({ type: TOGGLE_DRAWER })}
          style={{
            fontSize: "25px",
            color: "#fff",
          }}
        />
      </Badge>
    </Header>
  );
};

export default connector(Navbar);
