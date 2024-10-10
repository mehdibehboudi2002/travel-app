"use client"
import "./globals.css";
import "../public/style/index.css";
import Navbar from "@/components/MainSections/Navbar";
import Footer from "@/components/MainSections/Footer";
import { useState } from "react";
import ScrollUp from "@/components/ScrollToSomeWhere/ScrollUp";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [contactClicked, setContactClicked] = useState(false);

  const handleContactClick = () => {
    setContactClicked(true);
    setTimeout(() => setContactClicked(false), 2000); 
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
        <Navbar onContactClick={handleContactClick} />
        <main className="flex-grow relative">
          {children}
        </main>
        <ScrollUp />
        <Footer contactClicked={contactClicked} />
        </CartProvider>
      </body>
    </html>
  );
}
