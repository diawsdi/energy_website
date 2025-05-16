import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InvoltAI - Powering Tomorrow, Today',
  description: 'Intelligent energy access, planning and monitoring platform – leveraging AI, remote sensing and geospatial intelligence – for a fast, reliable and affordable electrification of Africa.',
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 