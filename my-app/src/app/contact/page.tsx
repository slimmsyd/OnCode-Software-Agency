import { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Custom Quote',
  description: 'Tell us about your project and get a custom quote from OnCode Software Agency. We specialize in AI, automation, and custom software development.',
  keywords: [
    'contact software development agency',
    'software development consultation',
    'custom software quote',
    'OnCode contact',
    'software agency contact',
    'get started with OnCode',
  ],
  openGraph: {
    title: 'Contact OnCode Software Agency',
    description: 'Tell us about your project and get a custom quote from OnCode Software Agency.',
    url: 'https://www.0ncode.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://www.0ncode.com/Personal/OnCodeShareImage.png',
        width: 1200,
        height: 630,
        alt: 'Contact OnCode Software Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact OnCode Software Agency',
    description: 'Tell us about your project and get a custom quote from OnCode Software Agency.',
    images: ['https://www.0ncode.com/Personal/OnCodeShareImage.png'],
  },
  alternates: {
    canonical: 'https://www.0ncode.com/contact',
  },
};

export default function Contact() {
  return <ContactPageContent />;
}