import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navBar";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "boussairi",
  description: "Generated by create next app",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body >
       <NavBar/>
        {children}
        {/* <footer className="">
          this is footer page
        </footer> */}
        </body>
    </html>
  );
}
