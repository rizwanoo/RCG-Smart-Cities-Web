import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { RCG_ASSETS, RCG_BRAND, VERIFIED_PILLARS } from '../data/rcgData';
import RevealImage from '../components/RevealImage';
import { useGsapReveal } from '../hooks/useGsapReveal';

const SECTION_THEMES = [
  { bg: 'bg-[#FAFBF9]', text: 'text-[#263747]', heading: 'text-[#142B45]', accent: 'text-[#245BB2]', cta: 'rcg-cta--dark', rule: 'rcg-rule-dark' },
  { bg: 'bg-[#E9F2F8]', text: 'text-[#263747]', heading: 'text-[#142B45]', accent: 'text-[#18A77B]', cta: 'rcg-cta--dark', rule: 'rcg-rule-dark' },
  { bg: 'bg-[#E7F3EE]', text: 'text-[#263747]', heading: 'text-[#142B45]', accent: 'text-[#18A77B]', cta: 'rcg-cta--emerald', rule: 'rcg-rule-dark' },
  { bg: 'bg-[#EFF2F3]', text: 'text-[#263747]', heading: 'text-[#142B45]', accent: 'text-[#245BB2]', cta: 'rcg-cta--dark', rule: 'rcg-rule-dark' },
  { bg: 'bg-[#142B45]', text: 'text-white/85', heading: 'text-white', accent: 'text-[#B8D957]', cta: 'rcg-cta--light', rule: 'rcg-rule-light' },
];

export default function SmartCitiesPage() {
  const pageRef = useRef<HTMLElement>(null);
  useGsapReveal(pageRef);

  return (
    <main ref={pageRef} className="w-full overflow-x-hidden">
      {/* Architectural Corridor Sub-Hero extending behind transparent navbar */}
      <section className="relative min-h-[72vh] flex items-end pb-16 sm:pb-20 pt-36 overflow-hidden bg-[#142B45]">
        <div className="absolute inset-0" data-gsap-parallax>
          <RevealImage
            src={RCG_ASSETS.urbanCorridor}
            alt="Sustainable urban corridor with architectural concrete edging and solar street lamps"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(20,43,69,0.52) 0%, rgba(20,43,69,0.22) 45%, rgba(20,43,69,0.84) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl space-y-5">
            <p
              data-gsap-hero
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#32BFD1] m-0"
            >
              Smart Cities &amp; Sustainable Development
            </p>
            <h1
              data-gsap-hero
              className="font-['Manrope'] font-extrabold text-white leading-[1.08] m-0"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.85rem)' }}
            >
              Verified Solutions Across Surfaces, Sustainability &amp; Community Spaces.
            </h1>
            <p data-gsap-hero className="text-base sm:text-lg text-white/90 max-w-2xl m-0">
              Every capability presented below reflects verified offerings published by{' '}
              {RCG_BRAND.name} ({RCG_BRAND.handle}): Concrete, Epoxy, Rubber, Sustainability,
              and Community development.
            </p>
          </div>
        </div>
      </section>

      {/* Borderless Jump Anchor Strip */}
      <section id="solutions" className="bg-[#FAFBF9] border-b rcg-rule-dark py-6">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3B4650]">
            Verified Pillars
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {VERIFIED_PILLARS.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="text-sm font-semibold text-[#142B45] hover:text-[#245BB2] transition-colors no-underline whitespace-nowrap"
              >
                <span className="tabular-nums text-[#18A77B] mr-1.5">{pillar.index}.</span>
                {pillar.title.split(' ')[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Five Alternating Editorial Chapters — Zero Cards, Zero Repetitive Tiles */}
      {VERIFIED_PILLARS.map((pillar, idx) => {
        const theme = SECTION_THEMES[idx % SECTION_THEMES.length];
        const imageFirst = idx % 2 === 1;

        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`${theme.bg} ${theme.text} py-20 lg:py-28 scroll-mt-24`}
          >
            <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Copy Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${imageFirst ? 'lg:order-2' : 'lg:order-1'}`}
                  data-gsap-reveal
                >
                  <div className={`flex items-center gap-4 pb-5 border-b ${theme.rule}`}>
                    <span
                      className={`font-['Manrope'] font-extrabold text-3xl tabular-nums ${theme.accent}`}
                    >
                      {pillar.index}.
                    </span>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-[0.14em] m-0 ${theme.accent}`}>
                        {pillar.tagline}
                      </p>
                      <p className="text-xs opacity-75 mt-0.5 m-0">{pillar.verifiedBasis}</p>
                    </div>
                  </div>

                  <h2
                    className={`font-['Manrope'] font-bold text-3xl sm:text-4xl leading-tight m-0 ${theme.heading}`}
                  >
                    {pillar.title}
                  </h2>

                  <p className="text-base sm:text-lg leading-relaxed m-0">
                    {pillar.description}
                  </p>

                  <ul className={`space-y-3 pt-4 pb-6 border-y ${theme.rule} list-none p-0 m-0 text-sm sm:text-base`}>
                    {pillar.details.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className={`font-bold ${theme.accent}`} aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap items-center gap-8">
                    <Link
                      to={`/about-contact?topic=${encodeURIComponent(pillar.title)}#enquiry`}
                      className={`rcg-cta ${theme.cta}`}
                    >
                      <span>Enquire About {pillar.title.split(' ')[0]}</span>
                      <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                    </Link>
                    {pillar.id === 'epoxy' && (
                      <Link to="/featured-offer" className={`rcg-cta ${theme.cta}`}>
                        <span>See $2/Sqft Epoxy Offer</span>
                        <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${imageFirst ? 'lg:order-1' : 'lg:order-2'}`}
                  data-gsap-reveal
                >
                  <RevealImage
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    className="w-full aspect-[4/3] object-cover block"
                  />
                  <p className="text-xs opacity-75 mt-3 m-0">{pillar.imageNote}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Honesty & Scope Clarification Band (Warm White #FAFBF9) */}
      <section className="bg-[#FAFBF9] text-[#263747] py-16 border-t rcg-rule-dark">
        <div
          className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          data-gsap-reveal
        >
          <div className="lg:col-span-8 space-y-2">
            <h3 className="font-['Manrope'] font-bold text-xl text-[#142B45] m-0">
              Transparent Business Positioning
            </h3>
            <p className="text-sm text-[#3B4650] leading-relaxed m-0">
              Architectural city photography above illustrates broader urban development themes
              and is not represented as RCG-constructed skyscrapers. For direct confirmation of
              regional service scopes in Middle Tennessee, connect via {RCG_BRAND.handle} or call{' '}
              <a
                href={RCG_BRAND.phoneHref}
                className="text-[#245BB2] font-semibold tabular-nums no-underline hover:underline"
              >
                {RCG_BRAND.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/featured-offer" className="rcg-cta rcg-cta--dark">
              <span>Explore Featured Instagram Offer</span>
              <span className="rcg-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
