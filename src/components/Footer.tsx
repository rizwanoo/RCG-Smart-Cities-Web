import { Link } from 'react-router-dom';
import { RCG_ASSETS, RCG_BRAND } from '../data/rcgData';

export default function Footer() {
  return (
    <footer className="bg-[#142B45] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Brand Column with Prominent Original Logo */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              to="/"
              className="inline-flex items-center gap-4 no-underline focus-visible:outline-2 focus-visible:outline-[#32BFD1] focus-visible:outline-offset-4"
            >
              <span className="inline-flex items-center justify-center bg-white p-2.5 shrink-0">
                <img
                  src={RCG_ASSETS.logoHd}
                  alt="RCG Smart Cities LLC Official Logo"
                  className="h-20 w-auto object-contain block"
                />
              </span>
              <div>
                <p className="font-['Manrope'] font-extrabold text-xl tracking-tight text-white m-0">
                  {RCG_BRAND.name}
                </p>
                <p className="text-sm text-[#32BFD1] font-medium mt-1 m-0">
                  {RCG_BRAND.tagline}
                </p>
              </div>
            </Link>
            <p className="text-white/80 text-base max-w-md leading-relaxed">
              {RCG_BRAND.bio}. Delivering durable concrete, flake and metallic epoxy systems,
              resilient rubber surfacing, and sustainable solar site solutions across Middle
              Tennessee.
            </p>
            <div className="pt-2">
              <a
                href={RCG_BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rcg-cta rcg-cta--light"
              >
                <span>Connect with RCG Smart Cities</span>
                <span className="rcg-cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8D957] m-0">
              Navigation
            </h3>
            <ul className="space-y-3 p-0 m-0 list-none text-sm">
              <li>
                <Link to="/" className="text-white/85 hover:text-white transition-colors no-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-cities"
                  className="text-white/85 hover:text-white transition-colors no-underline"
                >
                  Smart Cities &amp; Sustainable Development
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-cities#solutions"
                  className="text-white/85 hover:text-white transition-colors no-underline"
                >
                  Core Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/featured-offer"
                  className="text-white/85 hover:text-white transition-colors no-underline"
                >
                  Featured Instagram Offer
                </Link>
              </li>
              <li>
                <Link
                  to="/about-contact"
                  className="text-white/85 hover:text-white transition-colors no-underline"
                >
                  About &amp; Business Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details Column (Directly from Official Campaign Artwork & Instagram) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#32BFD1] m-0">
              Verified Channels
            </h3>
            <div className="space-y-3 text-sm text-white/85">
              <p className="m-0">
                <span className="text-white/60 block text-xs uppercase tracking-wider">
                  Official Instagram
                </span>
                <a
                  href={RCG_BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-[#32BFD1] no-underline"
                >
                  {RCG_BRAND.handle}
                </a>
              </p>
              <p className="m-0">
                <span className="text-white/60 block text-xs uppercase tracking-wider">
                  Telephone (Published Campaign Contact)
                </span>
                <a
                  href={RCG_BRAND.phoneHref}
                  className="text-white font-semibold tabular-nums hover:text-[#B8D957] no-underline"
                >
                  {RCG_BRAND.phoneDisplay}
                </a>
                <span className="text-[#B8D957] ml-2 font-medium">· {RCG_BRAND.bilingualNote}</span>
              </p>
              <p className="m-0">
                <span className="text-white/60 block text-xs uppercase tracking-wider">
                  Published Campaign Location
                </span>
                <span className="text-white">{RCG_BRAND.address}</span>
              </p>
              <p className="m-0 pt-2 text-xs text-white/65">
                Concrete · Epoxy · Rubber · Sustainability · Community
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60">
          <p className="m-0">
            © {new Date().getFullYear()} {RCG_BRAND.legalMark}. {RCG_BRAND.bio}.
          </p>
          <p className="m-0">
            Official profile:{' '}
            <a
              href={RCG_BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white underline"
            >
              instagram.com/rcgsmartcitiesofusa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
