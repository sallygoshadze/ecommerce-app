import { Menu, Layout } from "antd";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  return (
    <Sider collapsible defaultCollapsed={true}>
      <Menu theme="dark">
        <Menu.Item key="1">Category 1</Menu.Item>
        <Menu.Item key="2">Category 2</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
