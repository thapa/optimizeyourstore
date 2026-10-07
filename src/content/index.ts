// Typed access to the Pages CMS content files.
//
// Pages CMS omits a key from the JSON when an editor clears that field, so
// every field here is optional. Components must cope with any of them being
// missing — never rely on the type TypeScript would infer from the JSON itself.

import heroJson from './hero.json';
import problemJson from './problem.json';
import comparisonJson from './comparison.json';
import servicesJson from './services.json';
import processJson from './process.json';
import proofJson from './proof.json';
import statsJson from './stats.json';
import testimonialsJson from './testimonials.json';
import pricingJson from './pricing.json';
import faqJson from './faq.json';
import ctaJson from './cta.json';
import siteJson from './site.json';

type Text = string | undefined;
type List<T> = T[] | undefined;

export interface Stat {
  value?: number;
  prefix?: Text;
  suffix?: Text;
  decimal?: boolean;
  label?: Text;
}

export interface BoldItem {
  text?: Text;
  bold?: Text;
}

export interface Hero {
  badge?: Text;
  headline?: Text;
  headline_accent?: Text;
  subheadline?: Text;
  primary_cta?: Text;
  secondary_cta?: Text;
  secondary_cta_link?: Text;
  stats?: List<Stat>;
  card_eyebrow?: Text;
  card_title?: Text;
  card_badge?: Text;
  card_items?: List<string>;
}

export interface Problem {
  eyebrow?: Text;
  headline?: Text;
  intro?: Text;
  problems?: List<{ title?: Text; description?: Text }>;
}

export interface Comparison {
  eyebrow?: Text;
  headline?: Text;
  headline_accent?: Text;
  intro?: Text;
  old_way_title?: Text;
  old_way?: List<BoldItem>;
  new_way_title?: Text;
  new_way?: List<BoldItem>;
  callout?: Text;
}

interface ServiceBase {
  label?: Text;
  title?: Text;
  description?: Text;
  items?: List<BoldItem>;
  cta?: Text;
}

export interface Services {
  eyebrow?: Text;
  headline?: Text;
  intro?: Text;
  service_1?: ServiceBase & { sample_finding?: Text };
  service_2?: ServiceBase & {
    control_cvr?: Text;
    variant_cvr?: Text;
    cvr_lift?: Text;
    control_aov?: Text;
    variant_aov?: Text;
    aov_lift?: Text;
    rpv_lift?: Text;
    projected_impact?: Text;
  };
}

export interface Process {
  eyebrow?: Text;
  headline?: Text;
  intro?: Text;
  cta?: Text;
  steps?: List<{ title?: Text; duration?: Text; description?: Text; deliverables?: List<string> }>;
}

export interface ProofTest {
  label?: Text;
  metric?: Text;
  sub?: Text;
  rpv?: Text;
  monthly?: Text;
  best?: boolean;
  confidence?: Text;
  image?: Text;
  caption?: Text;
}

export interface Proof {
  eyebrow?: Text;
  headline?: Text;
  headline_accent?: Text;
  intro?: Text;
  projected_label?: Text;
  tests?: List<ProofTest>;
  banner_eyebrow?: Text;
  banner_amount?: Text;
  banner_text?: Text;
  banner_cta?: Text;
}

export interface Stats {
  eyebrow?: Text;
  headline?: Text;
  intro?: Text;
  stats?: List<Stat>;
}

export interface Testimonials {
  eyebrow?: Text;
  headline?: Text;
  reviews?: List<{ quote?: Text; name?: Text; role?: Text }>;
}

export interface PricingPlan {
  tier?: Text;
  name?: Text;
  description?: Text;
  currency?: Text;
  amount?: Text;
  custom_amount?: boolean;
  period?: Text;
  note?: Text;
  cta?: Text;
  featured?: boolean;
  features?: List<string>;
}

export interface Pricing {
  guarantee?: Text;
  eyebrow?: Text;
  headline?: Text;
  intro?: Text;
  price_anchor?: Text;
  featured_badge?: Text;
  plans?: List<PricingPlan>;
}

export interface Faq {
  eyebrow?: Text;
  headline?: Text;
  faqs?: List<{ question?: Text; answer?: Text }>;
}

export interface Cta {
  badge?: Text;
  headline?: Text;
  body?: Text;
  primary_cta?: Text;
  secondary_cta?: Text;
  reassurance?: Text;
}

export interface Site {
  email?: Text;
  linkedin_url?: Text;
  x_url?: Text;
  footer_tagline?: Text;
  footer_copyright?: Text;
  footer_note?: Text;
}

export const hero: Hero = heroJson;
export const problem: Problem = problemJson;
export const comparison: Comparison = comparisonJson;
export const services: Services = servicesJson;
export const process: Process = processJson;
export const proof: Proof = proofJson;
export const stats: Stats = statsJson;
export const testimonials: Testimonials = testimonialsJson;
export const pricing: Pricing = pricingJson;
export const faq: Faq = faqJson;
export const cta: Cta = ctaJson;
export const site: Site = siteJson;
