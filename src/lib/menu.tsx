import {
  DashboardOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

export const menuItems = [
  {
    key: "/overview",
    icon: <DashboardOutlined />,
    label: "Tổng quan",
  },
  {
    key: "/users",
    icon: <UserOutlined />,
    label: "Quản lý User",
  },
  {
    key: "/products",
    icon: <ShoppingOutlined />,
    label: "Quản lý Sản phẩm",
  },
];
