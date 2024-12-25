import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
})


export const metadata: Metadata = {
  title: "ISC",
  description: "Internation Student Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-[#01013A]`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
