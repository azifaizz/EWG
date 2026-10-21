export const CONTACT = {
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  whatsapp: "https://wa.me/919000000000?text=Hi%20EWG%2C%20I%27d%20like%20to%20know%20more",
  email: "hello@ewg.in",
  address: "Chennai, Tamil Nadu, India",
};

export type Offering = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  benefits: string[];
  forWho: string;
};

export const SERVICES: Offering[] = [
  {
    slug: "life-insurance",
    name: "Life Insurance",
    tagline: "Protect the people who depend on you.",
    intro:
      "Savings-linked and endowment plans that secure your family's future while building disciplined long-term wealth.",
    benefits: [
      "Guaranteed maturity options",
      "Tax benefits under applicable sections",
      "Riders for critical illness & accidents",
      "Guidance on the right cover amount",
    ],
    forWho: "Earning members, parents and anyone planning long-term goals.",
  },
  {
    slug: "term-insurance",
    name: "Term Insurance",
    tagline: "High cover. Low premium. Pure protection.",
    intro: "The simplest, most affordable way to give your family a strong financial safety net.",
    benefits: [
      "Large cover at low cost",
      "Flexible payout options",
      "Return-of-premium variants",
      "Help comparing insurers' claim records",
    ],
    forWho: "Young professionals, new parents and earning members.",
  },
  {
    slug: "health-insurance",
    name: "Health Insurance",
    tagline: "Quality care, without the financial shock.",
    intro:
      "Individual, family floater and senior citizen plans with cashless hospital networks across Tamil Nadu.",
    benefits: [
      "Cashless treatment at network hospitals",
      "Family floater & senior plans",
      "Top-up & super top-up options",
      "Claim support from our team",
    ],
    forWho: "Individuals, families and senior parents.",
  },
  {
    slug: "motor-insurance",
    name: "Motor Insurance",
    tagline: "Drive with complete peace of mind.",
    intro:
      "Comprehensive and third-party cover for cars, bikes and commercial vehicles, with quick renewals.",
    benefits: [
      "Comprehensive & third-party cover",
      "Zero-depreciation add-ons",
      "No-claim bonus protection",
      "Assistance during claims",
    ],
    forWho: "Car, two-wheeler and commercial vehicle owners.",
  },
  {
    slug: "travel-insurance",
    name: "Travel Insurance",
    tagline: "Travel far. Worry less.",
    intro:
      "Domestic and international plans covering medical emergencies, trip delays and lost baggage.",
    benefits: [
      "Overseas medical cover",
      "Trip cancellation & delay",
      "Baggage & passport loss",
      "Student and multi-trip plans",
    ],
    forWho: "Holiday travellers, students abroad and business flyers.",
  },
  {
    slug: "business-insurance",
    name: "Business Insurance",
    tagline: "Safeguard what you've built.",
    intro:
      "Property, liability, group health and employee benefit covers designed for SMEs and enterprises.",
    benefits: [
      "Fire & property protection",
      "Group health for employees",
      "Liability & marine covers",
      "Risk review for your business",
    ],
    forWho: "Shop owners, SMEs, professionals and corporates.",
  },
];

export type NavGroup = { label: string; items: { label: string; to: string }[] };

export const NAV_GROUPS: { services: NavGroup; partners: NavGroup; resources: NavGroup } = {
  services: {
    label: "Services",
    items: SERVICES.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
  },
  partners: {
    label: "Partners",
    items: [
      { label: "Our Partners", to: "/partners" },
      { label: "Become an Advisor", to: "/become-an-advisor" },
      { label: "Become a Business Partner", to: "/business-partner" },
    ],
  },
  resources: {
    label: "Resources",
    items: [
      { label: "Blog", to: "/blog" },
      { label: "FAQs", to: "/faqs" },
      { label: "Careers", to: "/careers" },
    ],
  },
};

// IMPORTANT: Only list partners EWG is currently authorised to represent.
// Names below are placeholders and must be verified before publishing.
export const PARTNERS = [
  "Tata AIA",
  "ManipalCigna",
  "ICICI Lombard",
  "HDFC Life",
  "Bajaj Allianz",
  "Star Health",
  "Care Health",
  "Niva Bupa",
];

export const FAQS = [
  {
    q: "Is EWG an insurance company?",
    a: "No. EWG is an advisory and distribution firm. We help you understand, compare and choose plans from authorised insurers, and support you through claims.",
  },
  {
    q: "Do I pay extra for EWG's advice?",
    a: "Our consultation is free for customers. You pay only the premium or charges applicable to the product you choose.",
  },
  {
    q: "How quickly will someone contact me?",
    a: "Our team reaches out on the next working day after you submit an enquiry or callback request.",
  },
  {
    q: "Will you help me during a claim?",
    a: "Yes. Claim support is a core part of our service — we guide you on documents and follow up with the insurer.",
  },
  {
    q: "Do you serve customers outside Chennai?",
    a: "Yes, we support customers across Tamil Nadu by phone, WhatsApp and in-person visits where possible.",
  },
  { q: "Can I get help in Tamil?", a: "Absolutely. Our advisors speak both Tamil and English." },
];
