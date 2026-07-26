import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — ConvertiqX',
  description: 'Privacy Policy for ConvertiqX. Learn how we handle your data.',
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#0E0B0D] font-sans">
      <Header />
      <div className="max-w-[800px] mx-auto px-6 pt-[18vh] pb-24 text-white/80">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-white/50 text-[14px] mb-12">Last Updated: June 24, 2026</p>
        
        <div className="space-y-8 text-[15px] leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold tracking-tight">1. Overview</h2>
            <p>
              At ConvertiqX, we respect your privacy and are committed to protecting any personal data we collect. This Privacy Policy outlines how we gather, use, and secure your information when you visit our website (convertiqx.com) or book a strategy call with us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold tracking-tight">2. Information We Collect</h2>
            <p>
              When you book a strategy call or submit an inquiry, we collect information you voluntarily provide, including:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-white/70">
              <li>Contact details (name, email address, company name).</li>
              <li>Shopify store URLs and related business metrics.</li>
              <li>Meeting preferences and topics discussed during strategy calls.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold tracking-tight">3. How We Use Your Information</h2>
            <p>
              We use the collected information solely to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-white/70">
              <li>Prepare for and conduct your booked Shopify store strategy audit.</li>
              <li>Communicate with you regarding our optimization services.</li>
              <li>Improve our website, audits, and marketing efforts.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold tracking-tight">4. Data Protection & Sharing</h2>
            <p>
              We implement industry-standard security measures to safeguard your details. We do not sell, rent, or trade your personal data to third parties. We only share information with trusted third-party providers (such as Google Calendar or email services) necessary to facilitate meetings and communications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold tracking-tight">5. Cookies</h2>
            <p>
              Our website may use cookies to analyze web traffic and optimize your browsing experience. You can adjust your browser settings to refuse cookies if you prefer.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold tracking-tight">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please reach out to us at{' '}
              <a href="mailto:hello@convertiqx.com" className="text-[#FF707C] hover:underline font-semibold">
                hello@convertiqx.com
              </a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
