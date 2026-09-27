import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rugby Tercer Tiempo",
  description: "La red social del rugby español",
};

import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>

        <Header />

        {children}

        <BottomNav />

      </body>
    </html>
  );
}
