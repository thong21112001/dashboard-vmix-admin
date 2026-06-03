"use client";

import { Table } from "antd";
import { users } from "@/lib/mock-data";

export default function UserTable() {
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
    },
  ];

  return <Table columns={columns} dataSource={users} />;
}
