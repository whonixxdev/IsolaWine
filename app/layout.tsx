
import type { Metadata } from "next";
import "./globals.css";
import Navbars from "./components/ui/navbars/Navbars";


export const metadata: Metadata = {
  title: "Isola Wine",
  description: "Welcome to Isola Wine",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbars/>
          {children}
      </body>
    </html>
  );
}
