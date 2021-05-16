import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../store/store";
import { Descriptions, Image, Tabs, Typography } from "antd";
import { getData } from "../store/middlewares";

const { TabPane } = Tabs;
const { Title } = Typography;

type Props = { title?: string };

const SingleItem = () => {
  const { title } = useParams<Props>();
  const products = useSelector((state: Store) => state.products);
  const dispatch = useDispatch();

  let currentItem;
  if (products.length > 0) {
    currentItem = products.find((item) => item.title === title);
  } else {
    dispatch(getData());
    currentItem = products.find((item) => item.title === title);
  }

  return (
    <div>
      <Tabs defaultActiveKey="1" centered size="large">
        <TabPane tab="Overview" key="1">
          <Title level={2} style={{ textAlign: "center", marginTop: "10px" }}>
            {title}
          </Title>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Image
              width={350}
              src={currentItem?.image}
              style={{ display: "flex", justifyContent: "center" }}
            />
            <Descriptions
              title="Responsive Descriptions"
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label="Product">
                Cloud Database
              </Descriptions.Item>
              <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
              <Descriptions.Item label="time">18:00:00</Descriptions.Item>

              <Descriptions.Item label="Config Info">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
              </Descriptions.Item>
            </Descriptions>
          </div>
        </TabPane>
        <TabPane tab="Details" key="2">
          {currentItem && <h2>{currentItem.description}</h2>}{" "}
        </TabPane>
        <TabPane tab="Feedback" key="3">
          {currentItem && <h2>{currentItem.description}</h2>}{" "}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SingleItem;
