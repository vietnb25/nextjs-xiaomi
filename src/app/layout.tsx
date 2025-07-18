'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Headers from "./component/headers";
import 'bootstrap/dist/css/bootstrap.min.css';






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="pt-5"> {/* Thêm padding-top để tránh overlap, điều chỉnh theo chiều cao header */}
          <Headers />
          {children}
          {/* Thêm nội dung khác sau này */}
        </div>

      </body>
    </html>
  );
}
