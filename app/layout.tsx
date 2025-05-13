import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AuroraAI - Powering Tomorrow, Today',
  description: 'Intelligent Energy Access Planning & Monitoring leveraging AI, Remote Sensing, and Geospatial Intelligence to sustainably illuminate communities.',
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