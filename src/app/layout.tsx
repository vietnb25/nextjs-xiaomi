import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Xiaomi Vietnam | Mi Phone | Mi TV | Mi Robot | Mi Smart Device",
  description: "Trang chủ chính thức của Xiaomi tại Việt Nam. Mua sắm trực tuyến điện thoại Mi, Mi TV, Mi Robot và các thiết bị thông minh khác.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
