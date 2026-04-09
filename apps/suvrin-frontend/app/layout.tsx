import type { Metadata } from "next";
import { Poppins, Roboto } from 'next/font/google';
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Suvrin Technologies | AI Solutions for Modern Businesses",
  description:
    "We design, build & launch AI solutions that create real business value. Partner with Suvrin Technologies for strategy, development, and deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} font-sans`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
