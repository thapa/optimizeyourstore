import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: '[AGENCY NAME] — Production Web Apps for Founders and Growth Teams',
  description: '[AGENCY NAME] builds high-performance Next.js, Shopify Plus, and design-system-driven web applications for founders and growth teams, shipping in weeks, not quarters.',
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
