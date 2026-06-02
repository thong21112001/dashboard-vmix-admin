"use client";

import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { menuItems } from "@/lib/menu";

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <div className="text-white text-center py-4 text-xl font-bold">
          Vmix Admin
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          onClick={({ key }) => router.push(key)}
        />
      </Sider>

      <Layout>
        <Header className="bg-white px-5 flex items-center">
          {collapsed ? (
            <MenuUnfoldOutlined
              className="text-xl cursor-pointer"
              onClick={() => setCollapsed(false)}
            />
          ) : (
            <MenuFoldOutlined
              className="text-xl cursor-pointer"
              onClick={() => setCollapsed(true)}
            />
          )}

          <span className="ml-5 font-bold text-lg">
            Dashboard
          </span>
        </Header>

        <Content className="m-5 p-5 bg-white rounded">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}