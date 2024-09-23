import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { GoogleTagManager } from "@next/third-parties/google";

import { Gnosis, Ethereum } from "@thirdweb-dev/chains";


export const metadata: Metadata = {
  title: "OnCode | Software Agency",
  description:
    "Ensuring that Founders have to worry about their business and not about their code.",
    icons: {
      icon: "../../public/favicon.ico",
      apple: "../../public/favicon.ico",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

      <GoogleTagManager gtmId="G-YDS91V256T" />

        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}
