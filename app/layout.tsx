import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRAME — Beyond the ordinary",
  description: "An exploration of image, motion and new dimensions.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
