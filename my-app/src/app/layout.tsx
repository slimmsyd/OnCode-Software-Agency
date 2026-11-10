import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";
import JsonLd from "./components/JsonLd";
import { buildOrganizationSchema } from "./lib/organization-schema";
import { buildOpenGraph, OG_IMAGE, SITE_NAME, SITE_URL } from "./lib/seo";

const OG_DESCRIPTION =
  "Custom software development that accelerates your business. From startup MVPs to enterprise automation systems, we transform manual processes into automated advantages.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OnCode | Custom Software & AI Consultation Agency",
    template: "%s | OnCode Software Agency",
  },
  description:
    "OnCode finds where your business leaks time and money, then builds the systems that seal the leaks: websites, web applications, custom software, and AI automation, managed long after launch.",
  keywords: [
    "software development agency",
    "custom software development",
    "AI development",
    "blockchain development",
    "web application development",
    "startup technology solutions",
    "business automation",
    "software consulting",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: buildOpenGraph({
    locale: "en_US",
    url: SITE_URL,
    title: "OnCode | AI Consultation Agency",
    description: OG_DESCRIPTION,
  }),
  twitter: {
    card: "summary_large_image",
    title: "OnCode | AI Consultation Agency",
    description: OG_DESCRIPTION,
    images: [OG_IMAGE.url],
    creator: "@OnCodeAgency",
  },
  // Self-canonicals are set per page. Do not set a sitewide homepage canonical here.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/images/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/images/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/images/favicon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
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
      </head>
      <body>
        <Script id="oncode-intro-boot" strategy="beforeInteractive">
          {`(function(){try{var p=location.pathname;if(p.length>1&&p.charAt(p.length-1)==="/")p=p.slice(0,-1);if(p!=="/"&&p!=="")return;if(localStorage.getItem("oncode-intro-seen")==="1")return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.documentElement.setAttribute("data-intro","on");var h=document.head,b="/intro/oncode-intro",pl=document.createElement("link");pl.rel="preload";pl.as="video";pl.type="video/mp4";pl.href=b+".mp4";h.appendChild(pl);var pi=document.createElement("link");pi.rel="preload";pi.as="image";pi.type="image/jpeg";pi.href=b+"-poster.jpg";h.appendChild(pi);fetch(b+".mp4",{cache:"force-cache"}).catch(function(){});}catch(e){}})();`}
        </Script>
        <JsonLd data={buildOrganizationSchema()} />
        {children}
        <GoogleAnalytics gaId="G-M88WL83RDV" />
      </body>
    </html>
  );
}
