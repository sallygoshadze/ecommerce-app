import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Typography } from "antd";
import { createProduct } from "../store/actionCreators";
// import FileBase from "react-file-base64";

const { Title } = Typography;

const ProductForm = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    price: "",
    description: "",
    category: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const handleSubmit = (e: any) => {
    dispatch(createProduct(postData));
    return false;
  };

  const clear = () => {};

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
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 6 }}
      >
        <Title level={3}>Add Product</Title>
        <Form.Item label="Shop Name">
          <Input
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Product Name">
          <Input
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Category">
          <Input
            value={postData.category}
            onChange={(e) =>
              setPostData({ ...postData, category: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Price">
          <Input
            value={postData.price}
            onChange={(e) =>
              setPostData({ ...postData, price: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            value={postData.description}
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
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
        <Form.Item>
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
