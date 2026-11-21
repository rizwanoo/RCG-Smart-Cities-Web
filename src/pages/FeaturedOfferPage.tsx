import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_OFFER, RCG_ASSETS, RCG_BRAND } from '../data/rcgData';
import RevealImage from '../components/RevealImage';
import { useGsapReveal } from '../hooks/useGsapReveal';

export default function FeaturedOfferPage() {
  const pageRef = useRef<HTMLElement>(null);
  const [sqft, setSqft] = useState<number>(600);
  const [artworkFullWidth, setArtworkFullWidth] = useState<boolean>(false);
  useGsapReveal(pageRef);

  const safeSqft = Number.isFinite(sqft) && sqft > 0 ? Math.min(sqft, 100000) : 0;
  const estimatedDiscount = safeSqft * 2;

  return (
    <main ref={pageRef} className="w-full overflow-x-hidden">
      {/* 1. Editorial Midnight Navy Header extending behind transparent navbar */}
      <section className="relative bg-[#142B45] text-white pt-36 pb-20 lg:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-gsap-parallax
        >
          <RevealImage
            src={RCG_ASSETS.epoxyShowroom}
            alt="Modern showroom floor with flake epoxy system finish"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,43,69,0.88) 0%, rgba(20,43,69,0.78) 60%, #142B45 100%)',
          }}
        />

        <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-5">
            <p
              data-gsap-hero
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#B8D957] m-0"
            >
              {FEATURED_OFFER.campaignLabel} · {FEATURED_OFFER.publishedDate}
            </p>
            <h1
              data-gsap-hero
              className="font-['Manrope'] font-extrabold text-white leading-[1.06] m-0"
              style={{ fontSize: 'clamp(1.9rem, 4.6vw, 3.9rem)' }}
            >
              {FEATURED_OFFER.headline}
            </h1>
            <p data-gsap-hero className="text-lg text-[#32BFD1] font-medium max-w-2xl m-0">
              {FEATURED_OFFER.divisionName} — “{FEATURED_OFFER.subheadline}”
            </p>
            <div data-gsap-hero className="pt-3 flex flex-wrap items-center gap-x-10 gap-y-4">
              <a
                href={FEATURED_OFFER.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rcg-cta rcg-cta--light"
              >
                <span>Open Original Instagram Post</span>
                <span className="rcg-cta-arrow" aria-hidden="true">→</span>
              </a>
              <a href={RCG_BRAND.phoneHref} className="rcg-cta rcg-cta--light text-[#B8D957]">
                <span>Call {RCG_BRAND.phoneDisplay}</span>
                <span className="rcg-cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Original Promotional Artwork & Exact Verified Breakdown (Warm White #FAFBF9) */}
      <section className="bg-[#FAFBF9] text-[#263747] py-20 lg:py-28">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b rcg-rule-dark">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#245BB2] m-0">
                Uncropped Original Campaign Graphic
              </p>
              <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-[#142B45] mt-1 m-0">
                Exact Offer Details as Published on @rcgsmartcitiesofusa
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setArtworkFullWidth((v) => !v)}
              className="rcg-cta rcg-cta--dark text-xs"
            >
              <span>{artworkFullWidth ? 'Side-by-Side Layout' : 'Expand Full Artwork Width'}</span>
              <span className="rcg-cta-arrow" aria-hidden="true">→</span>
            </button>
          </div>

          <div
            className={`grid grid-cols-1 gap-12 lg:gap-16 items-start ${
              artworkFullWidth ? '' : 'lg:grid-cols-12'
            }`}
          >
            <div className={artworkFullWidth ? '' : 'lg:col-span-7'} data-gsap-reveal>
              <RevealImage
                src={RCG_ASSETS.featuredOfferOriginal}
                alt="Original Instagram campaign graphic from @rcgsmartcitiesofusa: RCG Smart Cities Epoxy Busters Black Friday Special $2 Off Per Sqft on Flakes System Epoxy"
                className="w-full h-auto block"
              />
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#3B4650]">
                <span>
                  Source: instagram.com/p/DfqpviAxW5Z/ · Posted {FEATURED_OFFER.publishedDate}
                </span>
                <span>Tags: {RCG_BRAND.regionTags.join(' ')}</span>
              </div>
            </div>

            <div className={`${artworkFullWidth ? 'max-w-3xl' : 'lg:col-span-5'} space-y-8`} data-gsap-reveal>
              <div className="space-y-2 pb-6 border-b rcg-rule-dark">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#18A77B] m-0">
                  Campaign Headline &amp; Rate
                </p>
                <p className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl text-[#142B45] tabular-nums m-0">
                  $2 OFF PER SQFT
                </p>
                <p className="text-base font-semibold text-[#245BB2] m-0">
                  On Flakes System Epoxy · Black Friday Special
                </p>
              </div>

              <div className="space-y-4 pb-6 border-b rcg-rule-dark">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3B4650] m-0">
                  Stated Surface Benefits
                </p>
                <ul className="space-y-3 list-none p-0 m-0 text-sm sm:text-base text-[#263747]">
                  {FEATURED_OFFER.benefits.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="text-[#18A77B] font-bold" aria-hidden="true">
                        —
                      </span>
                      <span>
                        <strong className="text-[#142B45] font-semibold">{item.label}:</strong>{' '}
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pb-6 border-b rcg-rule-dark text-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3B4650] m-0">
                  Contact &amp; Availability Verification
                </p>
                <p className="m-0 text-[#263747]">
                  Telephone:{' '}
                  <a
                    href={RCG_BRAND.phoneHref}
                    className="font-semibold text-[#245BB2] tabular-nums no-underline hover:underline"
                  >
                    {RCG_BRAND.phoneDisplay}
                  </a>{' '}
                  · {RCG_BRAND.bilingualNote}
                </p>
                <p className="m-0 text-[#263747]">Location: {RCG_BRAND.address}</p>
                <p className="m-0 text-[#3B4650] leading-relaxed">
                  {FEATURED_OFFER.availabilityNote}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8">
                <Link
                  to="/about-contact?topic=Black%20Friday%20Flakes%20System%20Epoxy%20Offer#enquiry"
                  className="rcg-cta rcg-cta--dark"
                >
                  <span>Request Offer Verification</span>
                  <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Transparent $2/Sqft Campaign Discount Estimator (Ice Blue #E9F2F8 — Zero Card Boxes) */}
      <section className="bg-[#E9F2F8] text-[#263747] py-20 lg:py-24">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-gsap-reveal>
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#245BB2] m-0">
                Transparent Rate Reference
              </p>
              <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl text-[#142B45] m-0">
                Estimate Your $2/Sqft Campaign Reduction
              </h2>
              <p className="text-[#3B4650] text-base leading-relaxed m-0">
                Enter your approximate floor area below to calculate the exact stated $2 per
                square foot discount from the published campaign graphic. Total project pricing
                depends on concrete condition and site prep and is quoted directly by RCG Smart
                Cities.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div>
                <label
                  htmlFor="sqft-input"
                  className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#142B45] mb-2"
                >
                  Floor Area (Square Feet)
                </label>
                <div className="flex flex-wrap items-baseline gap-6">
                  <input
                    id="sqft-input"
                    type="number"
                    min={50}
                    max={100000}
                    step={50}
                    value={sqft || ''}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="rcg-field max-w-[220px] font-['Manrope'] font-extrabold text-3xl tabular-nums"
                  />
                  <div className="flex flex-wrap gap-4">
                    {[400, 600, 1000, 2500].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setSqft(preset)}
                        className={`bg-transparent border-none pb-1 text-sm font-semibold tabular-nums cursor-pointer transition-colors ${
                          sqft === preset
                            ? 'text-[#245BB2] border-b-2 border-[#245BB2]'
                            : 'text-[#3B4650] hover:text-[#142B45]'
                        }`}
                      >
                        {preset.toLocaleString()} sq ft
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t rcg-rule-dark flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <span className="block text-xs uppercase tracking-[0.14em] text-[#3B4650]">
                    Stated Campaign Discount ($2 × {safeSqft.toLocaleString()} sq ft)
                  </span>
                  <span className="font-['Manrope'] font-extrabold text-4xl sm:text-5xl text-[#18A77B] tabular-nums">
                    ${estimatedDiscount.toLocaleString()} OFF
                  </span>
                </div>
                <a href={RCG_BRAND.phoneHref} className="rcg-cta rcg-cta--dark">
                  <span>Confirm Quote by Phone</span>
                  <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Additional Authentic @rcgsmartcitiesofusa Project Visuals (Pale Mint #E7F3EE) */}
      <section className="bg-[#E7F3EE] text-[#263747] py-20 lg:py-28">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b rcg-rule-dark"
            data-gsap-reveal
          >
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#18A77B] m-0">
                Additional Verified Instagram Initiatives
              </p>
              <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl text-[#142B45] m-0">
                More Surface Transformations from {RCG_BRAND.handle}
              </h2>
            </div>
            <a
              href={RCG_BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rcg-cta rcg-cta--emerald"
            >
              <span>Browse Full Instagram Profile</span>
              <span className="rcg-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12">
            <div className="md:col-span-6 space-y-4" data-gsap-reveal>
              <RevealImage
                src={RCG_ASSETS.igFlakeBeforeAfter}
                alt="Before and after concrete slab to flake epoxy coating transformation"
                className="w-full aspect-square object-cover block"
              />
              <h3 className="font-['Manrope'] font-bold text-xl text-[#142B45] m-0">
                Flakes System Epoxy — Before &amp; After Concrete Bay
              </h3>
              <p className="text-sm text-[#3B4650] m-0">
                Authentic comparison published on {RCG_BRAND.handle}, illustrating the exact
                multi-bay commercial/workshop flake epoxy installation featured in the campaign
                graphic.
              </p>
            </div>

            <div className="md:col-span-6 space-y-4" data-gsap-reveal>
              <RevealImage
                src={RCG_ASSETS.igMetallicEpoxy}
                alt="Seamless swirled metallic epoxy commercial interior floor"
                className="w-full aspect-square object-cover block"
              />
              <h3 className="font-['Manrope'] font-bold text-xl text-[#142B45] m-0">
                Metallic Epoxy — Seamless Commercial Interior
              </h3>
              <p className="text-sm text-[#3B4650] m-0">
                Authentic interior floor image from {RCG_BRAND.handle} demonstrating custom
                reflective metallic epoxy craftsmanship for commercial environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
