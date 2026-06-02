import { Card } from "antd";

export default function OverviewPage() {
   return (
    <div>
      <h1 className="text-2xl font-bold mb-5">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <Card title="Doanh thu">
          0 VNĐ
        </Card>

        <Card title="Người dùng">
          0
        </Card>

        <Card title="Đơn hàng">
          0
        </Card>

        <Card title="Lượt xem">
          0
        </Card>
      </div>
    </div>
  );
}