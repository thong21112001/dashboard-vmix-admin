"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { revenueData } from "@/lib/mock-data";

export default function RevenueChart() {
  return (
    <div className="mt-6 rounded-lg bg-white p-4">
      <h2 className="mb-4 text-lg font-semibold">Doanh thu</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
