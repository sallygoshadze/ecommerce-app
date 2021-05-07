import { Row, Col } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getData } from "../store/middlewares";
import { CartItemType, Store } from "../store/store";
import Item from "./Item";

type Props = { category?: string };

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const { category } = useParams<Props>();

  useEffect(() => {
    dispatch(getData(category));
  }, [category]);
  const products = useSelector((state: Store) => state.products);

  return (
    <Row gutter={[12, 12]}>
      {products.length > 0 ? (
        products.map((item: CartItemType) => (
          <Col key={item.id} xs={24} sm={24} md={12} lg={8} xl={6}>
            <Item item={item} />
          </Col>
        ))
      ) : (
        <p>category not found</p>
      )}
    </Row>
  );
};

export default Products;
