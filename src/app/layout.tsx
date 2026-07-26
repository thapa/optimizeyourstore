import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  metadataBase: new URL('https://convertiqx.com'),
  title: 'ConvertiqX — Production Web Apps for Founders and Growth Teams',
  description: 'ConvertiqX builds high-performance Next.js, Shopify Plus, and design-system-driven web applications for founders and growth teams, shipping in weeks, not quarters.',
  openGraph: {
    title: 'ConvertiqX — Production Web Apps for Founders and Growth Teams',
    description: 'ConvertiqX builds high-performance Next.js, Shopify Plus, and design-system-driven web applications for founders and growth teams, shipping in weeks, not quarters.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ConvertiqX — Production Web Apps for Founders and Growth Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConvertiqX — Production Web Apps for Founders and Growth Teams',
    description: 'ConvertiqX builds high-performance Next.js, Shopify Plus, and design-system-driven web applications for founders and growth teams, shipping in weeks, not quarters.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-[#0E0B0D] text-white">
        <SmoothScroll />
        {children}
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
