export interface VerifiedPillar {
  index: string;
  id: string;
  title: string;
  tagline: string;
  verifiedBasis: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  imageNote: string;
}

export const RCG_BRAND = {
  name: 'RCG Smart Cities',
  legalMark: 'RCG SMART CITIES LLC',
  handle: '@rcgsmartcitiesofusa',
  instagramUrl: 'https://www.instagram.com/rcgsmartcitiesofusa/',
  featuredPostUrl: 'https://www.instagram.com/p/DfqpviAxW5Z/',
  featuredPostDate: 'November 12, 2026',
  bio: 'Sustainable & Smart Cities Business Development',
  tagline: 'Smart Solutions. Stronger Communities.',
  category: 'Entrepreneur · Business Development',
  division: 'Epoxy Busters',
  phoneDisplay: '(931) 542-8787',
  phoneHref: 'tel:+19315428787',
  address: '531 Red River Rd, Gallatin, TN 37066',
  bilingualNote: 'Hablamos Español',
  regionTags: ['#nashville', '#nashvillerealestate', '#nashville_tn', '#tennessee', '#tnconstruction'],
  pillarsList: ['Concrete', 'Epoxy', 'Rubber', 'Sustainability', 'Community'],
};

export const RCG_ASSETS = {
  logoHd: '/assets/images/rcg-smart-cities/logo/rcg_logo_hd.jpg',
  logoOriginal150: '/assets/images/rcg-smart-cities/logo/rcg_logo_150.jpg',
  featuredOfferOriginal: '/assets/images/rcg-smart-cities/featured-offer/dfqpviAxW5Z_original.jpg',
  igMetallicEpoxy: '/assets/images/rcg-smart-cities/instagram-originals/ig_recent_0.jpg',
  igFlakeBeforeAfter: '/assets/images/rcg-smart-cities/instagram-originals/ig_recent_1.jpg',
  heroCitySkyline: '/assets/images/rcg-smart-cities/hero/hero_smart_city_skyline.jpg',
  urbanCorridor: '/assets/images/rcg-smart-cities/sustainable-development/sustainable_urban_corridor.jpg',
  epoxyShowroom: '/assets/images/rcg-smart-cities/infrastructure/smart_surfaces_concrete_epoxy.jpg',
  solarCommunityPark: '/assets/images/rcg-smart-cities/smart-cities/solar_community_park.jpg',
  strategyPanorama: '/assets/images/rcg-smart-cities/supporting-visuals/business_strategy_panorama.jpg',
};

export const FEATURED_OFFER = {
  campaignLabel: 'Official Instagram Announcement · @rcgsmartcitiesofusa',
  divisionName: 'RCG Smart Cities · Epoxy Busters',
  headline: 'Black Friday Special: $2 Off Per Sqft on Flakes System Epoxy',
  subheadline: 'Upgrade Your Floors This Black Friday!',
  publishedDate: 'November 12, 2026',
  postUrl: 'https://www.instagram.com/p/DfqpviAxW5Z/',
  benefits: [
    {
      label: 'Durable & Long Lasting',
      detail: 'Engineered flake-system epoxy surface built to withstand daily wear across residential garages and commercial bays.',
    },
    {
      label: 'Stain Resistant',
      detail: 'Sealed non-porous epoxy finish engineered to resist spills, oils, and heavy-use surface staining.',
    },
    {
      label: 'Beautiful Finish',
      detail: 'High-clarity broadcast flake texture delivering a bright, reflective architectural concrete aesthetic.',
    },
    {
      label: 'Residential & Commercial',
      detail: 'Available for residential properties, workshops, garages, and commercial facilities across the Nashville & Middle Tennessee corridor.',
    },
  ],
  pillarsPrinted: ['Concrete', 'Epoxy', 'Rubber', 'Sustainability', 'Community'],
  availabilityNote:
    'Published on @rcgsmartcitiesofusa on November 12, 2026. Final project eligibility, scheduling windows, and square-footage quotes should be confirmed directly by calling (931) 542-8787 or messaging @rcgsmartcitiesofusa.',
};

export const VERIFIED_PILLARS: VerifiedPillar[] = [
  {
    index: '01',
    id: 'epoxy',
    title: 'Flakes & Metallic Epoxy Surface Systems',
    tagline: 'Epoxy Busters by RCG Smart Cities',
    verifiedBasis: 'Verified via @rcgsmartcitiesofusa official campaign & recent installation posts',
    description:
      'Operating under the Epoxy Busters division shown on RCG Smart Cities’ official Instagram, the team delivers residential and commercial flake-system and metallic epoxy flooring designed for stain resistance, longevity, and visual clarity.',
    details: [
      'Flakes System Epoxy with broadcast architectural texture',
      'Seamless metallic epoxy finishes for commercial interiors',
      'Stain-resistant, durable surface sealing for high-traffic slabs',
    ],
    image: RCG_ASSETS.epoxyShowroom,
    imageAlt: 'Architectural interior featuring a glossy flake-system epoxy floor under natural daylight',
    imageNote: 'Architectural surface direction · Paired with authentic @rcgsmartcitiesofusa installations below',
  },
  {
    index: '02',
    id: 'concrete',
    title: 'Architectural Concrete & Site Edging',
    tagline: 'Structural Surface Preparation & Curbing',
    verifiedBasis: 'Verified via @rcgsmartcitiesofusa graphic pillars & TN construction listings',
    description:
      'Foundational concrete preparation, slab finishing, and precision concrete edging supporting commercial properties, residential bays, and landscaped civic perimeters across Middle Tennessee.',
    details: [
      'Diamond-prepped concrete slabs prior to coating application',
      'Commercial and civic perimeter concrete edging',
      'Clean-site execution utilizing electric-powered site equipment',
    ],
    image: RCG_ASSETS.urbanCorridor,
    imageAlt: 'Contemporary urban walkway with architectural concrete edging and green landscaping',
    imageNote: 'Urban concrete & pedestrian corridor visual direction',
  },
  {
    index: '03',
    id: 'rubber',
    title: 'Playgrounds & Resilient Rubber Surfacing',
    tagline: 'Impact-Ready Civic & Recreational Surfaces',
    verifiedBasis: 'Verified via @rcgsmartcitiesofusa listed pillar ("Rubber") & Middle Tennessee municipal directories',
    description:
      'Resilient poured-in-place rubber surfacing and community playground site amenities engineered to make parks, schools, and public gathering spaces safer and more accessible.',
    details: [
      'Impact-attenuating rubber surfacing for recreational zones',
      'Commercial and community playground site installations',
      'Low-maintenance pathways built for everyday public use',
    ],
    image: RCG_ASSETS.solarCommunityPark,
    imageAlt: 'Community park plaza with resilient surfacing, playground area, and solar lighting',
    imageNote: 'Community recreation & rubberized pathway visual direction',
  },
  {
    index: '04',
    id: 'sustainability',
    title: 'Solar Lighting & Sustainable Site Operations',
    tagline: 'Clean Energy Illumination & Electric Jobsite Mobility',
    verifiedBasis: 'Verified via @rcgsmartcitiesofusa pillar ("Sustainability"), logo artwork & supplier spotlights',
    description:
      'Integrating off-grid solar lamp infrastructure alongside electric-powered jobsite equipment to reduce on-site emissions and advance practical sustainability in local development.',
    details: [
      'Solar lighting and architectural solar lamps for outdoor areas',
      'Electric-powered jobsite equipment supporting cleaner pours',
      'Long-lifecycle surface coatings that extend existing slab utility',
    ],
    image: RCG_ASSETS.heroCitySkyline,
    imageAlt: 'Sunlit sustainable urban skyline with solar arrays and landscaped green transit corridors',
    imageNote: 'Sustainable city & clean-energy visual direction',
  },
  {
    index: '05',
    id: 'community',
    title: 'Sustainable & Smart Cities Business Development',
    tagline: 'Smart Solutions. Stronger Communities.',
    verifiedBasis: 'Verified via @rcgsmartcitiesofusa official bio & bilingual community outreach',
    description:
      'Connecting sustainable materials, resilient site infrastructure, and bilingual community engagement (Hablamos Español) across Gallatin, Lebanon, Nashville, and surrounding Tennessee communities.',
    details: [
      'Business development partnerships across Middle Tennessee',
      'Bilingual client consultation — Hablamos Español',
      'Direct project coordination from 531 Red River Rd, Gallatin, TN',
    ],
    image: RCG_ASSETS.strategyPanorama,
    imageAlt: 'Bright executive urban planning table overlooking a green modern cityscape',
    imageNote: 'Business development & regional partnership visual direction',
  },
];
