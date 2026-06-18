import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { GoogleAnalytics } from '@next/third-parties/google';
import { AuthProvider } from "./context/AuthContext";

import { Gnosis, Ethereum } from "@thirdweb-dev/chains";


export const metadata: Metadata = {
  title: {
    default: "OnCode | Custom Software & AI Consultation Agency",
    template: "%s | OnCode Software Agency"
  },
  description: "OnCode finds where your business leaks time and money, then builds the systems that seal the leaks: websites, web applications, custom software, and AI automation, managed long after launch.",
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
    title: 'OnCode | AI Consultation Agency',
    description: 'Custom software development that accelerates your business. From startup MVPs to enterprise automation systems, we transform manual processes into automated advantages.',
    images: [
      {
        url: 'https://www.0ncode.com/Personal/OnCodeShareImage.png',
        width: 1200,
        height: 630,
        alt: 'OnCode — Data Driven Decisions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnCode | AI Consultation Agency',
    description: 'Custom software development that accelerates your business. From startup MVPs to enterprise automation systems, we transform manual processes into automated advantages.',
    images: ['https://www.0ncode.com/Personal/OnCodeShareImage.png'],
    creator: '@OnCodeAgency', // Add your Twitter handle if you have one
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        <ThirdwebProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThirdwebProvider>
        <GoogleAnalytics gaId="G-M88WL83RDV" />
      </body>
    </html>
  );
}
