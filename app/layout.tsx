import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Krefzo Automation | Automate the busywork. Accelerate your business.',
  description: 'Krefzo Automation builds intelligent n8n workflows for lead capture, CRM updates, follow-ups, and the repetitive work slowing your team down.',
  metadataBase: new URL('https://krefzo.com'),
  alternates: { canonical: '/' },
  openGraph: { title: 'Krefzo Automation', description: 'Practical AI automation for growing businesses.', type: 'website', url: 'https://krefzo.com' },
  twitter: { card: 'summary_large_image', title: 'Krefzo Automation', description: 'Automate the busywork. Accelerate your business.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
