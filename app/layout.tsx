import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

export const metadata: Metadata = {
  title: "Le Bistrot De La Plage",
  description: "Cuisine raffinée et ambiance chaleureuse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} antialiased`}
      >
      <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
