
import { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with OnCode Software Agency for your custom software development needs. We specialize in AI, blockchain, and web application development.',
  keywords: [
    'contact software development agency',
    'software development consultation',
    'custom software quote',
    'OnCode contact',
    'software agency contact'
  ],
  openGraph: {
    title: 'Contact OnCode Software Agency',
    description: 'Get in touch with OnCode Software Agency for your custom software development needs.',
    url: 'https://www.0ncode.com/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact OnCode Software Agency',
    description: 'Get in touch with OnCode Software Agency for your custom software development needs.',
  },
  alternates: {
    canonical: 'https://www.0ncode.com/contact',
  },
};

export default function Contact() {
  return (
    <>
    <Navigation textColor={true} />
    <Footer />
    </>
  )
}