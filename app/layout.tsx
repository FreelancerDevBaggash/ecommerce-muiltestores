import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/main.scss";
import Providers from "@/context/Providers"
// import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Etjer  منصة اتجر",
  description: "منصة اتجر .. تجارة ذكية وسهلة أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من الحلول الرقميَّة الذكيَّة. منصة يمنية",
};

export default function RootLadyout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" >
      <body className={inter.className}>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}

        <Providers >{children}</Providers>
        </body>
    </html>
  );
}
