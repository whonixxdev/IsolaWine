
import type { Metadata } from "next";
import "./globals.css";
import Navbars from "./components/ui/navbars/Navbars";
import SmoothScroll from "./components/animations/Scroll/ScrollSmooth";
import Footer from "./components/layouts/Footer";


export const metadata: Metadata = {
  title: "Isola Wine",
  description: "Welcome to Isola Wine",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
        <Navbars/>
          {children}
          <Footer/>
        </SmoothScroll>
      </body>
    </html>
  );
}
