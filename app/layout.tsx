import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unwritten Events — Luxury Event Planning · New York",
  description: "We create unforgettable moments where design meets emotion. Luxury event production in New York.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
