import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from "@next/third-parties/google";
import { AuthProvider } from "./context/AuthContext";

import { Gnosis, Ethereum } from "@thirdweb-dev/chains";


export const metadata: Metadata = {
  title: {
    default: "OnCode | Software Agency - Custom Software Development",
    template: "%s | OnCode Software Agency"
  },
  description: "Professional software development agency specializing in AI, blockchain, and custom web applications. We ensure founders focus on business growth while we handle the code.",
  keywords: [
    "software development agency",
    "custom software development", 
    "AI development",
    "blockchain development",
    "web application development",
    "startup technology solutions",
    "business automation",
    "software consulting"
  ],
  authors: [{ name: "OnCode Software Agency" }],
  creator: "OnCode Software Agency",
  publisher: "OnCode Software Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.0ncode.com',
    siteName: 'OnCode Software Agency',
    title: 'OnCode | Professional Software Development Agency',
    description: 'Professional software development agency specializing in AI, blockchain, and custom web applications. We ensure founders focus on business growth while we handle the code.',
    images: [
      {
        url: 'https://www.0ncode.com/images/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'OnCode Software Agency - Custom Software Development',
      },
    ],
  },

  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://www.0ncode.com',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest', // You can create this for PWA features
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://www.0ncode.com" />
      </head>
      <body>
        <GoogleTagManager gtmId="G-ESW0CVVTY5" />
        <ThirdwebProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
