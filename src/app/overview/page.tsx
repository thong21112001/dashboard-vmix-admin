import StatsCards from "@/components/dashboard/StatsCards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import { Card } from "antd";

export default function OverviewPage() {
  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">Dashboard Overview</h1>

      <StatsCards />
      <RevenueChart />
    </div>
  );
}
