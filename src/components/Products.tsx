import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import { CartItemType, Store } from "../store/store";
import Item from "./Item";

const Products: React.FC = () => {
  const products = useSelector((state: Store) => state.products);

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

export default Products;
