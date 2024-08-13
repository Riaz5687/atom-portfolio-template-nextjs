import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import {SideDrawer} from "@/app/ui";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riaz Khan",
  description: "Riaz Khan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={'bg-white'}>
          <Header />

          <SideDrawer />

        {children}
            <Footer />


        </div>
      </body>
    </html>
  );
}
