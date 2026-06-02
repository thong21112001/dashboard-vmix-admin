"use client";

import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

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
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        theme="light"
        style={{
          borderRight: "1px solid #e5e7eb",
        }}
      >
        <div className="text-dark py-4 text-center text-xl font-bold">
          Vmix Admin
        </div>

        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          onClick={({ key }) => router.push(key)}
        />
      </Sider>

      <Layout>
        <Header
          className="flex items-center px-5"
          style={{
            background: "#fff",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          {collapsed ? (
            <MenuUnfoldOutlined
              className="cursor-pointer text-xl"
              onClick={() => setCollapsed(false)}
            />
          ) : (
            <MenuFoldOutlined
              className="cursor-pointer text-xl"
              onClick={() => setCollapsed(true)}
            />
          )}

          <span className="ml-5 text-lg font-bold">Dashboard</span>
        </Header>

        <Content className="m-5 rounded bg-white p-5">{children}</Content>
      </Layout>
    </Layout>
  );
}
