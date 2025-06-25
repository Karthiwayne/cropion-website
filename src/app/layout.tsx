import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

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
    <html lang="en" className={poppins.variable}>
    <body className="font-sans">{children}</body>
  </html>
  );
}