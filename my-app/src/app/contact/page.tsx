import { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';
import { buildOpenGraph, OG_IMAGE } from '../lib/seo';

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
  openGraph: buildOpenGraph({
    title: 'Contact OnCode Software Agency',
    description: 'Tell us about your project and get a custom quote from OnCode Software Agency.',
    url: 'https://www.0ncode.com/contact',
    images: [{ ...OG_IMAGE, alt: 'Contact OnCode Software Agency' }],
  }),
  twitter: {
    card: 'summary_large_image',
    title: 'Contact OnCode Software Agency',
    description: 'Tell us about your project and get a custom quote from OnCode Software Agency.',
    images: [OG_IMAGE.url],
  },
  alternates: {
    canonical: 'https://www.0ncode.com/contact',
  },
};

export default function Contact() {
  return <ContactPageContent />;
}