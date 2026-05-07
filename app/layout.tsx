import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Product Compliance Checker",
  description: "Check your Shopify product listings for FDA, FTC, and CPSC compliance issues automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="665a1ae9-5e44-4045-91bb-988bbb6fb9c8"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
