import Topmenu from "./components/Topmenu";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KES Online Catalogue",
  description: "MDF Melamine - Kết nối hạnh phúc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topmenu></Topmenu>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
