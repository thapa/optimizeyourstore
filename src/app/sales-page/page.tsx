import type { Metadata } from 'next';
import Header from '@/components/Header';
import SalesHero from '@/components/sales-page/SalesHero';
import SalesProblem from '@/components/sales-page/SalesProblem';
import SalesComparison from '@/components/sales-page/SalesComparison';
import SalesServices from '@/components/sales-page/SalesServices';
import SalesMethod from '@/components/sales-page/SalesMethod';
import SalesProof from '@/components/sales-page/SalesProof';
import SalesStats from '@/components/sales-page/SalesStats';
import SalesReviews from '@/components/sales-page/SalesReviews';
import SalesPricing from '@/components/sales-page/SalesPricing';
import SalesFAQ from '@/components/sales-page/SalesFAQ';
import SalesCTA from '@/components/sales-page/SalesCTA';
import SalesFooter from '@/components/sales-page/SalesFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://convertiqx.com'),
  title: 'ConvertiqX — CRO & Ecommerce Growth Strategy',
  description: 'We find every conversion leak in your Shopify store and fix it. Real test data. Real results.',
  // This route serves the same content as `/`, which is now canonical.
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ConvertiqX — CRO & A/B Testing for Shopify Brands',
    description: 'We find every conversion leak in your Shopify store and fix it. Real test data. Real results.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ConvertiqX — CRO & A/B Testing for Shopify Brands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConvertiqX — CRO & A/B Testing for Shopify Brands',
    description: 'We find every conversion leak in your Shopify store and fix it. Real test data. Real results.',
    images: ['/og-image.png'],
  },
};

export default function SalesPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#0E0B0D] font-sans">
      <Header />
      <SalesHero />
      <SalesProblem />
      <SalesComparison />
      <SalesServices />
      <SalesMethod />
      <SalesProof />
      <SalesStats />
      <SalesReviews />
      <SalesPricing />
      <SalesFAQ />
      <SalesCTA />
      <SalesFooter />
    </main>
  );
}
