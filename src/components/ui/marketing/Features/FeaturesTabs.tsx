import { useState } from 'react';
import { Monitor, MapPin, Search, Star, Shield } from 'lucide-react';
import { VerticalTabs, type VerticalTab } from '@/components/ui/overlay/VerticalTabs';
import webDesignImg from '../../../../assets/images/web-design.webp';
import reviewMgmtImg from '../../../../assets/images/google-reviews.png';
import localSeoImg from '../../../../assets/images/local-seo.jpg';
import webSupportImg from 'src/assets/images/web-support.png';
import gbpImg from 'src/assets/images/Google-My-Business.jpg';

// --- Tab Metadata ---
const tabs: VerticalTab[] = [
  {
    id: 'website',
    label: 'Website Design',
    description: 'Built to convert visitors',
    icon: Monitor,
  },
  {
    id: 'gbp',
    label: 'Google Business Profile',
    description: 'Show up where it counts',
    icon: MapPin,
  },
  {
    id: 'seo',
    label: 'Local SEO',
    description: 'Rank above your competitors',
    icon: Search,
  },
  {
    id: 'reviews',
    label: 'Review Management',
    description: 'Build trust automatically',
    icon: Star,
  },
  {
    id: 'support',
    label: 'Ongoing Support',
    description: 'We handle everything',
    icon: Shield,
  },
];

// --- Tab Content ---
const tabContent: Record<
  string,
  {
    title: string;
    description: string;
    bullets: string[];
    image: string;
    imageAlt: string;
  }
> = {
  website: {
    title: 'A Website That Actually Books Jobs',
    description:
      'Most contractor websites look fine but never generate a single call. We build sites designed from the ground up to convert visitors into quote requests.',
    bullets: [
      '5–7 page professional website tailored to your business',
      'Mobile-first design — most local searches happen on phones',
      'Fast load times, clear calls-to-action, and trust signals throughout',
      'Built to rank and built to convert — not just look good',
    ],
    image: webDesignImg.src,
    imageAlt: 'Website design mockup for home service business',
  },
  gbp: {
    title: 'Dominate the Google Local Pack',
    description:
      "When someone searches 'plumber near me' or 'HVAC contractor in [city]', the first thing they see is the Google Map pack. We make sure you're in it.",
    bullets: [
      'Full Google Business Profile setup and optimization',
      'Service areas, categories, and attributes configured correctly',
      'Regular GBP posts to signal activity to Google',
      'Photo uploads and Q&A management included',
    ],
    image: gbpImg.src,
    imageAlt: 'Google Business Profile optimization mockup',
  },
  seo: {
    title: 'Get Found by Customers Ready to Hire',
    description:
      'Local SEO puts your business in front of people actively searching for what you do in your area. No ad spend required.',
    bullets: [
      'On-page SEO for every page on your site',
      'Local keyword targeting for your service area',
      'Citation building across top directories',
      'Monthly performance reports so you see the progress',
    ],
    image: localSeoImg.src,
    imageAlt: 'Local SEO rankings mockup',
  },
  reviews: {
    title: 'More 5-Star Reviews Without Chasing Anyone',
    description:
      'Reviews are the #1 trust signal for home service businesses. We set up a system that consistently brings in new reviews from your happy customers.',
    bullets: [
      'Automated review request follow-ups after jobs',
      'Private feedback routing so complaints stay offline',
      'Review monitoring across Google and other platforms',
      'New reviews highlighted on your website automatically',
    ],
    image: reviewMgmtImg.src,
    imageAlt: 'Review management dashboard mockup',
  },
  support: {
    title: 'Your Digital Presence — Fully Managed',
    description:
      'You run the jobs. We run your online presence. No tech headaches, no chasing updates, no figuring out Google on your own.',
    bullets: [
      '4 content updates per month — just send us what changed',
      'Hosting, uptime monitoring, and security included',
      'Analytics and performance tracking with monthly summary',
      'One point of contact for everything digital',
    ],
    image: webSupportImg.src,
    imageAlt: 'Ongoing support and maintenance mockup',
  },
};

// --- Placeholder Image Component ---
// function MockupPlaceholder({ alt }: { alt: string }) {
//   return (
//     <div className="bg-background-secondary border-border flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed">
//       <div className="text-center">
//         <div className="bg-border mx-auto mb-3 h-12 w-12 rounded-lg" />
//         <p className="text-foreground-muted text-sm">{alt}</p>
//         <p className="text-foreground-subtle mt-1 text-xs">Replace with mockup image</p>
//       </div>
//     </div>
//   );
// }

// --- Main Component ---
export function VelocityFeatureTabs() {
  const [activeTab, setActiveTab] = useState('website');
  const active = tabContent[activeTab];

  return (
    <section className="bg-background py-[var(--space-section)]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-[var(--space-section-header)]">
          <h2 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">
            Your Entire Digital Presence —
            <br />
            <span className="text-brand-500">Done For You</span>
          </h2>
          <p className="text-foreground-muted mt-4 max-w-2xl text-lg">
            We handle every piece of your online presence so you can stay focused on the work.
          </p>
        </div>

        {/* Vertical Tabs */}
        <VerticalTabs tabs={tabs} value={activeTab} onChange={setActiveTab} mobileVariant="sheet">
          {tabs.map((tab) => {
            const content = tabContent[tab.id];
            return (
              <div key={tab.id} data-tab-content={tab.id} className="space-y-6">
                {/* Mockup Image */}
                <div className="border-border aspect-video w-full overflow-hidden rounded-lg border">
                  <img
                    src={content.image}
                    alt={content.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-foreground text-xl font-bold">{content.title}</h3>
                  <p className="text-foreground-muted mt-2">{content.description}</p>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {content.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-brand-500 mt-0.5 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-foreground-secondary text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </VerticalTabs>
      </div>
    </section>
  );
}

export default VelocityFeatureTabs;
