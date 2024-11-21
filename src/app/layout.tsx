
import "./globals.css";
import "../styles/fonts.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientProvider from '../components/ClientProvider';


export const metadata: Metadata = {
  title: "پیش بینی وضعیت آب و هوایی",
  description: "شما میتوانید وضعیت آب و هوایی را مشاهده نمایید.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
 
  return (
    <html lang="fa">
      <body  className="font-vazir ">
          <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}



