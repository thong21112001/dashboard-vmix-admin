"use client";

import { Card, Col, Row } from "antd";
import { statistics } from "@/lib/mock-data";

export default function StatsCards() {
  return (
    <Row gutter={[16,16]}>
      {statistics.map((item)=>(
        <Col span={6} key={item.title}>
          <Card>
            <h3>{item.title}</h3>
            <h2>{item.value}</h2>
          </Card>
        </Col>
      ))}
    </Row>
  );
}