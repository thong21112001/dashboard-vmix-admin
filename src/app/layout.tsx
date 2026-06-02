import type { Metadata } from "next";
import "./globals.css";

import DashboardLayout from "@/components/DashboardLayout";

export const metadata: Metadata = {
  title: "Vmix Admin",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
