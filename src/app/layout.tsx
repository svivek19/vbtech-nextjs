import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaLaptopCode } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "V&B Solutions",
  description:
    "We provide professional poster design, banner design, and web design and development services to help your business stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="py-2 bg-yellow-500 flex justify-center items-center gap-2">
          <h1>Christmas Special Offer - 10% Off!</h1>
          <FaLaptopCode size={25} />
        </div>
        <div>
          <Navbar />
        </div>
        <main className="flex-grow mt-12 mb-12 max-sm:w-11/12 w-5/6 mx-auto">
          {children}
        </main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
