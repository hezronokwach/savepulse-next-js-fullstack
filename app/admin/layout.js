import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import Navbar from "@/Components/Navbar/page";
import Footer from "@/Components/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hackerthon",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
      <main className="flex-grow">{children}</main>
    </div>
  );
}