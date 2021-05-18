import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Typography } from "antd";
import { createProduct, updateProduct } from "../store/actionCreators";
import { CartItemType, Store } from "../store/store";
// import FileBase from "react-file-base64";

const { Title } = Typography;

type Props = {
  currentId: string | null;
  setCurrentId: (id: string | null) => void;
};

export type ProductForm = Omit<CartItemType, '_id' | 'amount'>

const ProductForm: React.FC<Props> = ({ currentId, setCurrentId }) => {
  const [productData, setProductData] = useState<ProductForm>({
    creator: "",
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  const product = useSelector((state: Store) =>
    currentId ? state.products.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  useEffect(() => {
    if (product)
      setProductData({
        creator: product.creator,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      });
  }, [product]);

  const handleSubmit = () => {
    if (currentId) {
      dispatch(updateProduct(currentId, productData));
    } else {
      dispatch(createProduct(productData));
    }

    clear();

    return false;
  };

  const clear = () => {
    setCurrentId(null);
    setProductData({
      creator: "",
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
    });
  };

  // const onChangeHandler = (event: any) => {
  //   console.log(event.target.files[0]);

  //   setPostData({ ...postData, selectedFile: event.target.files[0] });
  // };

  return (
    <>
      <Form
        layout="horizontal"
        form={form}
        onFinish={handleSubmit}
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 5 }}
      >
        <Title style={{ textAlign: "center", margin: "20px 0" }} level={4}>
          {currentId ? "Editing" : "Adding"} a Product
        </Title>
        <Form.Item label="Shop Name">
          <Input
            value={productData.creator}
            onChange={(e) =>
              setProductData({ ...productData, creator: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Product Name">
          <Input
            value={productData.title}
            onChange={(e) =>
              setProductData({ ...productData, title: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Category">
          <Input
            value={productData.category}
            onChange={(e) =>
              setProductData({ ...productData, category: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Price">
          <Input
            value={productData.price}
            onChange={(e) =>
              setProductData({ ...productData, price: isNaN(+e.target.value) ? 0 : +e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            value={productData.description}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
          />
        </Form.Item>
        {/* <div>
          <input type="file" name="file" onChange={onChangeHandler} />
        </div> */}
        <div>
          {/* <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }: any) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          /> */}
        </div>
        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="default" onClick={clear}>
            Clear
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProductForm;
