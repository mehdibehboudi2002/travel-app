"use client"
import "./globals.css";
import "../public/style/index.css";
import Navbar from "@/components/MainSections/Navbar";
import Footer from "@/components/MainSections/Footer";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [contactClicked, setContactClicked] = useState(false);

  const handleContactClick = () => {
    setContactClicked(true);
    setTimeout(() => setContactClicked(false), 2000); // Reset after 2 seconds
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar onContactClick={handleContactClick} />
        <main className="flex-grow relative overflow-hidden">
          {children}
        </main>
        <Footer contactClicked={contactClicked} />
      </body>
    </html>
  );
}
