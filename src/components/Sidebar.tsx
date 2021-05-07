import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  GlobalOutlined,
  ManOutlined,
  PushpinOutlined,
  WomanOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

type SidebarItem = { displayName: string; icon: JSX.Element };

const sidebarItems: { [key: string]: SidebarItem } = {
  electronics: {
    displayName: "Electronics",
    icon: <DesktopOutlined />,
  },
  jewelery: {
    displayName: "Jewelery",
    icon: <PushpinOutlined />,
  },
  mensclothing: {
    displayName: "Men's Clothing",
    icon: <ManOutlined />,
  },
  womensclothing: {
    displayName: "Women's Clothing",
    icon: <WomanOutlined />,
  },
};

const Sidebar: React.FC = () => {
  return (
    <Sider collapsible defaultCollapsed={true}>
      <Menu theme="dark">
        <Menu.Item key="all" icon={<GlobalOutlined />}>
          <Link to="/">All</Link>
        </Menu.Item>
        {Object.keys(sidebarItems).map((key) => {
          return (
            <Menu.Item key={key} icon={sidebarItems[key].icon}>
              <Link to={`/category/${key}`}>
                {sidebarItems[key].displayName}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
