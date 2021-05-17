import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CartItemType, Store } from "../store/store";
import Item from "./Item";
import { Row, Col, Spin } from "antd";
import { fetchProducts } from "../store/actionCreators";

type Props = { category?: string; setCurrentId: any };

const Products: React.FC<Props> = ({ setCurrentId }) => {
  const loading = useSelector((state: Store) => state.loading);
  const dispatch = useDispatch();
  const { category } = useParams<Props>();

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [category, dispatch]);
  const products = useSelector((state: Store) => state.products);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  }

  return (
    <Row gutter={[12, 12]}>
      {products ? (
        products.map((item: CartItemType) => (
          <Col key={item._id} xs={24} sm={24} md={12} lg={8} xl={6}>
            <Item item={item} setCurrentId={setCurrentId} />
          </Col>
        ))
      ) : (
        <h1>products not found</h1>
      )}
    </Row>
  );
};

export default Products;
