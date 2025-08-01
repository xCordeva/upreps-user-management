import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Upreps | User Management System",
  description:
    "A modern user management interface for creating, updating, and organizing user data through a clean and responsive UI.",
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
