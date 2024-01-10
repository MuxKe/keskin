import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Marginal Interiors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
