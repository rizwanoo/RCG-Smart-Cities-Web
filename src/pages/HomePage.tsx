import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  RCG_ASSETS,
  RCG_BRAND,
  FEATURED_OFFER,
  VERIFIED_PILLARS,
} from '../data/rcgData';
import RevealImage from '../components/RevealImage';
import { useGsapReveal } from '../hooks/useGsapReveal';

export default function HomePage() {
  const pageRef = useRef<HTMLElement>(null);
  useGsapReveal(pageRef);

  return (
    <main ref={pageRef} className="w-full overflow-x-hidden">
      {/* 1. Full-Bleed Sunlit Smart City Hero (extends behind transparent navbar) */}
      <section className="relative min-h-[92vh] flex items-end pb-16 sm:pb-24 pt-36 overflow-hidden bg-[#142B45]">
        <div className="absolute inset-0" data-gsap-parallax>
          <RevealImage
            src={RCG_ASSETS.heroCitySkyline}
            alt="Modern sunlit sustainable urban skyline with green architecture and solar integration"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          {/* Measured local scrim only at bottom-left & top edge so bright cityscape remains clear */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(20,43,69,0.42) 0%, rgba(20,43,69,0.10) 42%, rgba(20,43,69,0.78) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl space-y-6">
            <p
              data-gsap-hero
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#B8D957] m-0"
            >
              {RCG_BRAND.name} · {RCG_BRAND.handle}
            </p>
            <h1
              data-gsap-hero
              className="font-['Manrope'] font-extrabold text-white leading-[1.06] m-0"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.25rem)' }}
            >
              Building a Smarter. More Sustainable Future.
            </h1>
            <p
              data-gsap-hero
              className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed m-0"
            >
              RCG Smart Cities focuses on sustainable and smart-city business development,
              bringing practical surface durability, clean site solutions, and community-first
              urban innovation to Middle Tennessee and beyond.
            </p>
            <div
              data-gsap-hero
              className="pt-4 flex flex-wrap items-center gap-x-10 gap-y-4"
            >
              <Link to="/smart-cities" className="rcg-cta rcg-cta--light">
                <span>Explore Smart City Development</span>
                <span className="rcg-cta-arrow" aria-hidden="true">→</span>
              </Link>
              <Link
                to="/featured-offer"
                className="rcg-cta rcg-cta--light text-[#32BFD1]"
              >
                <span>Discover the Featured Offer</span>
                <span className="rcg-cta-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Identity & Authentic Positioning (Warm White #FAFBF9) */}
      <section className="bg-[#FAFBF9] text-[#263747] py-20 lg:py-28">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8" data-gsap-reveal>
              <div className="flex flex-wrap items-center gap-6 pb-8 border-b rcg-rule-dark">
                <img
                  src={RCG_ASSETS.logoHd}
                  alt="RCG Smart Cities LLC Official Logo"
                  className="h-28 sm:h-32 w-auto object-contain shrink-0"
                />
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#18A77B] m-0">
                    Official Brand Identity
                  </p>
                  <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-[#142B45] m-0">
                    {RCG_BRAND.legalMark}
                  </h2>
                  <p className="text-sm font-semibold text-[#245BB2] m-0">
                    {RCG_BRAND.tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-[#142B45] leading-snug m-0">
                  {RCG_BRAND.bio}
                </h3>
                <p className="text-[#3B4650] text-base sm:text-lg leading-relaxed m-0">
                  From residential and commercial flake-system epoxy floors under{' '}
                  <strong className="font-semibold text-[#142B45]">Epoxy Busters</strong> to
                  architectural concrete, resilient rubber playground surfacing, and solar
                  outdoor lighting, RCG Smart Cities connects durable materials with stronger
                  communities.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t rcg-rule-dark">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#3B4650]">
                    Core Focus
                  </span>
                  <span className="font-['Manrope'] font-bold text-base text-[#142B45]">
                    Concrete · Epoxy · Rubber
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#3B4650]">
                    Commitment
                  </span>
                  <span className="font-['Manrope'] font-bold text-base text-[#18A77B]">
                    Sustainability · Community
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#3B4650]">
                    Bilingual Service
                  </span>
                  <span className="font-['Manrope'] font-bold text-base text-[#245BB2]">
                    {RCG_BRAND.bilingualNote}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/about-contact" className="rcg-cta rcg-cta--dark">
                  <span>About RCG Smart Cities</span>
                  <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6" data-gsap-reveal>
              <div className="relative overflow-hidden">
                <RevealImage
                  src={RCG_ASSETS.urbanCorridor}
                  alt="Contemporary sustainable urban corridor with concrete walkways and solar lighting"
                  className="w-full aspect-[4/3] lg:aspect-[16/11] object-cover block"
                />
              </div>
              <p className="text-xs text-[#3B4650] mt-3 m-0">
                Urban architecture &amp; sustainable pedestrian corridor visual direction ·{' '}
                {RCG_BRAND.handle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Five Verified Pillars Editorial Sequence (Ice Blue #E9F2F8 — Zero Cards) */}
      <section className="bg-[#E9F2F8] text-[#263747] py-20 lg:py-28">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b rcg-rule-dark"
            data-gsap-reveal
          >
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#245BB2] m-0">
                Verified Operational Pillars
              </p>
              <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl text-[#142B45] m-0">
                Concrete. Epoxy. Rubber. Sustainability. Community.
              </h2>
            </div>
            <Link to="/smart-cities" className="rcg-cta rcg-cta--dark">
              <span>Explore All Solutions</span>
              <span className="rcg-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="divide-y divide-[#142B45]/12">
            {VERIFIED_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline"
                data-gsap-reveal
              >
                <div className="lg:col-span-1 font-['Manrope'] font-extrabold text-2xl text-[#245BB2] tabular-nums">
                  {pillar.index}.
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-[#142B45] m-0">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-[#18A77B] mt-1 m-0">{pillar.tagline}</p>
                </div>
                <p className="lg:col-span-5 text-[#3B4650] text-base leading-relaxed m-0">
                  {pillar.description}
                </p>
                <div className="lg:col-span-2 lg:text-right">
                  <Link
                    to={`/smart-cities#${pillar.id}`}
                    className="rcg-cta rcg-cta--dark text-xs"
                  >
                    <span>Explore</span>
                    <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Prominent Featured Official Instagram Offer (Midnight Navy #142B45) */}
      <section className="bg-[#142B45] text-white py-20 lg:py-28">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-7" data-gsap-reveal>
              <RevealImage
                src={RCG_ASSETS.featuredOfferOriginal}
                alt="RCG Smart Cities Epoxy Busters Black Friday Special: $2 Off Per Sqft on Flakes System Epoxy"
                className="w-full h-auto block"
              />
              <p className="text-xs text-white/65 mt-3 m-0">
                Original campaign artwork published on {FEATURED_OFFER.publishedDate} by{' '}
                {RCG_BRAND.handle}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-6" data-gsap-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8D957] m-0">
                Featured Instagram Offer · {FEATURED_OFFER.publishedDate}
              </p>
              <h2 className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl text-white leading-tight m-0">
                $2 Off Per Sqft on Flakes System Epoxy
              </h2>
              <p className="text-lg text-[#32BFD1] font-semibold m-0">
                {FEATURED_OFFER.divisionName} — {FEATURED_OFFER.subheadline}
              </p>

              <ul className="space-y-3 pt-4 pb-6 border-y rcg-rule-light list-none p-0 m-0 text-white/85 text-sm sm:text-base">
                {FEATURED_OFFER.benefits.map((b) => (
                  <li key={b.label} className="flex items-start gap-3">
                    <span className="text-[#B8D957] font-bold" aria-hidden="true">
                      —
                    </span>
                    <span>
                      <strong className="text-white font-semibold">{b.label}:</strong>{' '}
                      {b.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-1 text-sm text-white/80">
                <p className="m-0">
                  Direct Contact:{' '}
                  <a
                    href={RCG_BRAND.phoneHref}
                    className="text-white font-semibold tabular-nums hover:text-[#B8D957] no-underline"
                  >
                    {RCG_BRAND.phoneDisplay}
                  </a>{' '}
                  · {RCG_BRAND.bilingualNote}
                </p>
                <p className="m-0">Location: {RCG_BRAND.address}</p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link to="/featured-offer" className="rcg-cta rcg-cta--light">
                  <span>View Full Featured Offer</span>
                  <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                </Link>
                <a
                  href={FEATURED_OFFER.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rcg-cta rcg-cta--light text-[#32BFD1]"
                >
                  <span>Original Instagram Post</span>
                  <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Authentic Instagram Work Showcase (Pale Mint #E7F3EE) */}
      <section className="bg-[#E7F3EE] text-[#263747] py-20 lg:py-28">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b rcg-rule-dark"
            data-gsap-reveal
          >
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#18A77B] m-0">
                Official Instagram Visuals · {RCG_BRAND.handle}
              </p>
              <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl text-[#142B45] m-0">
                Real Epoxy &amp; Concrete Surface Installations
              </h2>
            </div>
            <a
              href={RCG_BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rcg-cta rcg-cta--emerald"
            >
              <span>Follow @rcgsmartcitiesofusa</span>
              <span className="rcg-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pt-12">
            <div className="md:col-span-6 space-y-4" data-gsap-reveal>
              <RevealImage
                src={RCG_ASSETS.igFlakeBeforeAfter}
                alt="Before and after flake system epoxy garage transformation by RCG Smart Cities"
                className="w-full aspect-square object-cover block"
              />
              <div className="pt-2 border-t rcg-rule-dark">
                <h3 className="font-['Manrope'] font-bold text-xl text-[#142B45] m-0">
                  01. Concrete Prep to Flakes System Epoxy
                </h3>
                <p className="text-sm text-[#3B4650] mt-1.5 m-0">
                  Original project comparison shared by {RCG_BRAND.handle} showing raw slab
                  surface preparation transformed into a reflective broadcast flake epoxy floor.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 space-y-4 md:mt-14" data-gsap-reveal>
              <RevealImage
                src={RCG_ASSETS.igMetallicEpoxy}
                alt="Seamless metallic epoxy commercial interior floor installed by RCG Smart Cities"
                className="w-full aspect-square object-cover block"
              />
              <div className="pt-2 border-t rcg-rule-dark">
                <h3 className="font-['Manrope'] font-bold text-xl text-[#142B45] m-0">
                  02. Commercial Metallic Epoxy Interior
                </h3>
                <p className="text-sm text-[#3B4650] mt-1.5 m-0">
                  Original installation photograph from {RCG_BRAND.handle} featuring a seamless
                  swirled metallic epoxy surface for commercial indoor environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Editorial Business Enquiry Invitation (Warm White #FAFBF9) */}
      <section className="bg-[#FAFBF9] text-[#263747] py-20 lg:py-28 border-t rcg-rule-dark">
        <div
          className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          data-gsap-reveal
        >
          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#245BB2] m-0">
              Middle Tennessee &amp; Strategic Partnerships
            </p>
            <h2 className="font-['Manrope'] font-extrabold text-3xl sm:text-5xl text-[#142B45] leading-tight m-0">
              Ready to discuss your next surface or sustainable development initiative?
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-5">
            <Link to="/about-contact#enquiry" className="rcg-cta rcg-cta--dark">
              <span>Start a Business Enquiry</span>
              <span className="rcg-cta-arrow" aria-hidden="true">→</span>
            </Link>
            <a
              href={RCG_BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rcg-cta rcg-cta--emerald"
            >
              <span>Connect with RCG Smart Cities</span>
              <span className="rcg-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
