import { useState } from 'react';
import { Monitor, MapPin, Search, Star, Shield, Unplug } from 'lucide-react';
import { VerticalTabs, type VerticalTab } from '@/components/ui/overlay/VerticalTabs';
import webDesignImg from '../../../../assets/images/web-design.webp';
import reviewMgmtImg from '../../../../assets/images/google-reviews.png';
import localSeoImg from '../../../../assets/images/local-seo.jpg';
import webSupportImg from 'src/assets/images/web-support.png';
import gbpImg from 'src/assets/images/Google-My-Business.jpg';

// --- Tab Metadata ---
const tabs: VerticalTab[] = [
  {
    id: 'design',
    label: 'Web Design',
    description: 'Built to convert visitors',
    icon: Monitor,
  },
  {
    id: 'seo',
    label: 'Local SEO',
    description: 'Rank above your competitors',
    icon: Search,
  },
  {
    id: 'gbp',
    label: 'GMB Management',
    description: 'Own the local map pack',
    icon: MapPin,
  },
  {
    id: 'reputation',
    label: 'Reputation Management',
    description: 'Build trust automatically',
    icon: Star,
  },
  {
    id: 'automations',
    label: 'Automations',
    description: 'Never lose a lead again',
    icon: Unplug,
  },
];

// --- Tab Content ---
const tabContent: Record<
  string,
  { title: string; description: string; bullets: string[]; image: string; imageAlt: string }
> = {
  design: {
    title: 'A Website That Actually Books Jobs',
    description:
      'Most contractor websites look fine but never generate a single call. We build sites designed from the ground up to convert visitors into quote requests — not just look good.',
    bullets: [
      'Professional website built specifically for your business and service area',
      'Mobile-first design — most local searches happen on phones',
      'Fast load times, clear calls-to-action, and trust signals throughout',
      'Local service pages built to rank for the areas you actually work in',
    ],
    image: webDesignImg.src,
    imageAlt: 'Website design mockup for home service business',
  },
  seo: {
    title: 'Get Found by Customers Ready to Hire',
    description:
      'Local SEO puts your business in front of people actively searching for what you do in your area. No ad spend required — just the right setup done right from day one.',
    bullets: [
      'On-page SEO for every page on your site',
      'Local keyword targeting for your specific service areas',
      'Citation building so your business information is consistent everywhere online',
      'Monthly performance reports so you can see exactly what is working',
    ],
    image: localSeoImg.src,
    imageAlt: 'Local SEO rankings mockup',
  },
  gbp: {
    title: 'Dominate the Google Local Pack',
    description:
      'When someone searches for a contractor in your area the first thing they see is the Google Map pack. We make sure you are in it — and that your profile actually converts that visibility into calls.',
    bullets: [
      'Full Google Business Profile setup and optimization',
      'Service areas, categories, and attributes configured correctly',
      "Regular posts and photo updates to stay active in Google's eyes",
      'Q&A management and profile monitoring included every month',
    ],
    image: gbpImg.src,
    imageAlt: 'Google Business Profile optimization mockup',
  },
  reputation: {
    title: 'More 5-Star Reviews Without Chasing Anyone',
    description:
      'Reviews are the number one trust signal for home service businesses. We set up a system that consistently brings in new reviews from your happy customers — without you having to ask.',
    bullets: [
      'Automated review requests sent after every completed job',
      'Negative feedback routed privately before it hits Google',
      'Review monitoring across Google and other platforms',
      'Response management so every review gets acknowledged',
    ],
    image: reviewMgmtImg.src,
    imageAlt: 'Review management dashboard mockup',
  },
  automations: {
    title: 'Never Lose a Lead — Day or Night',
    description:
      'Most contractors lose jobs not because of bad work but because they missed the call, took too long to respond, or had no follow-up in place. We fix all of that.',
    bullets: [
      'Missed calls get an instant text back so leads never go cold',
      'After-hours inquiries get an immediate response without you lifting a finger',
      'Every lead that contacts you gets followed up with automatically',
      'Past customers re-engaged to bring in repeat business and referrals',
    ],
    image: webSupportImg.src,
    imageAlt: 'Lead automation and follow up system mockup',
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
  const [activeTab, setActiveTab] = useState('design');
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
