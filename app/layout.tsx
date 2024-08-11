import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

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
      <div className="relative text-gray-800 bg-gray-50">
        {/*Navbar */}
        <Header />

        {children}
        <Footer />
        <div className="h-80">
        </div>
      </div>

      </body>
    </html>
  );
}
