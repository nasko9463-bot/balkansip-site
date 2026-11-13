import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Balkan Sip",
    template: "%s | Balkan Sip",
  },
  description:
    "Balkan Sip — мобилен бар за коктейли, събития и незабравими моменти.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}
