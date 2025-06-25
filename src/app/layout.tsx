import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* --------------------- Font Setup --------------------- */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* --------------------- Metadata --------------------- */
export const metadata: Metadata = {
  title: "Cropion | AI Farming Assistant",
  description: "Cropion Rover - Your AI-powered farming assistant for smarter, effortless farming.",
};

/* --------------------- Root Layout --------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
