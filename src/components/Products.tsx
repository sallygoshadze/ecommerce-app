import { Row, Col } from "antd";
import { connect, ConnectedProps } from "react-redux";
import { CartItemType, Store } from "../store/store";
import Item from "./Item";

const mapStateToProps = (state: Store): Pick<Store, 'products'> => {
  return { products: state.products };
};

const connector = connect(mapStateToProps);

const Products: React.FC<ConnectedProps<typeof connector>> = ({ products }) => {
  return (
    <Row gutter={[12, 12]}>
      {products.map((item: CartItemType) => (
        <Col key={item.id} xs={24} sm={24} md={12} lg={8} xl={6}>
          <Item item={item} />
        </Col>
      ))}
    </Row>
  );
};


export default connector(Products);
