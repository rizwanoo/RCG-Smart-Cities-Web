import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { RCG_ASSETS, RCG_BRAND } from '../data/rcgData';

const SMART_CITY_SUBMENU = [
  { label: '01. Epoxy Busters Systems', hash: '#epoxy' },
  { label: '02. Concrete & Site Edging', hash: '#concrete' },
  { label: '03. Playgrounds & Rubber', hash: '#rubber' },
  { label: '04. Solar & Sustainability', hash: '#sustainability' },
  { label: '05. Community Development', hash: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimerRef = useRef<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Close mobile menu & dropdown on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openDropdown = () => {
    if (dropdownTimerRef.current) {
      window.clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setDropdownOpen(true);
  };

  const closeDropdownWithDelay = () => {
    dropdownTimerRef.current = window.setTimeout(() => {
      setDropdownOpen(false);
    }, 160);
  };

  const handleSubmenuNavigate = (hash: string) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    navigate(`/smart-cities${hash}`);
  };

  const isLightHeader = scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 ${
        isLightHeader
          ? 'bg-[#FAFBF9]/95 backdrop-blur-md border-b border-[#142B45]/10 text-[#142B45]'
          : 'bg-gradient-to-b from-[#142B45]/65 via-[#142B45]/25 to-transparent text-white'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 lg:h-24 flex items-center justify-between gap-3 sm:gap-6 lg:gap-8 min-w-0">
        {/* Zone 1: Prominent Original RCG Smart Cities Brand Mark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink focus-visible:outline-2 focus-visible:outline-[#32BFD1] focus-visible:outline-offset-4 no-underline"
          aria-label="RCG Smart Cities Home"
        >
          <span className="inline-flex items-center justify-center bg-white px-1.5 py-0.5 sm:px-2 sm:py-1 shrink-0">
            <img
              src={RCG_ASSETS.logoHd}
              alt="RCG Smart Cities LLC Official Logo"
              className="h-9 sm:h-12 lg:h-14 w-auto object-contain block"
            />
          </span>
          <span
            className={`font-['Manrope'] font-extrabold text-sm sm:text-base lg:text-lg tracking-tight truncate transition-colors ${
              isLightHeader ? 'text-[#142B45]' : 'text-white'
            }`}
          >
            {RCG_BRAND.name}
          </span>
        </Link>

        {/* Zone 2: Horizontal Desktop Navigation (lg: 1024px+) */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0"
          aria-label="Primary Navigation"
        >
          <Link
            to="/"
            className={`rcg-nav-link ${location.pathname === '/' ? 'is-active' : ''} ${
              isLightHeader ? 'text-[#142B45] hover:text-[#245BB2]' : 'text-white hover:text-[#B8D957]'
            }`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>

          {/* Smart Cities with accessible hover + keyboard dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdownWithDelay}
          >
            <div className="inline-flex items-center gap-1">
              <Link
                to="/smart-cities"
                className={`rcg-nav-link ${
                  location.pathname === '/smart-cities' && !location.hash ? 'is-active' : ''
                } ${
                  isLightHeader
                    ? 'text-[#142B45] hover:text-[#245BB2]'
                    : 'text-white hover:text-[#B8D957]'
                }`}
                aria-current={location.pathname === '/smart-cities' ? 'page' : undefined}
              >
                Smart Cities
              </Link>
              <button
                type="button"
                aria-label="Toggle Smart Cities submenu"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((v) => !v)}
                className={`p-1.5 bg-transparent border-none cursor-pointer transition-transform ${
                  dropdownOpen ? 'rotate-180' : ''
                } ${isLightHeader ? 'text-[#142B45]' : 'text-white'}`}
              >
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {dropdownOpen && (
              <div
                className="absolute left-0 top-full pt-3 min-w-[260px]"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdownWithDelay}
              >
                <div className="bg-[#FAFBF9] text-[#142B45] border-t-2 border-[#18A77B] py-3 px-5 shadow-lg">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3B4650] pb-2 mb-2 border-b border-[#142B45]/10">
                    Verified Development Pillars
                  </div>
                  <ul className="space-y-1 m-0 p-0 list-none">
                    {SMART_CITY_SUBMENU.map((item) => (
                      <li key={item.hash}>
                        <button
                          type="button"
                          onClick={() => handleSubmenuNavigate(item.hash)}
                          className="w-full text-left py-2 bg-transparent border-none text-sm font-medium text-[#263747] hover:text-[#245BB2] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/smart-cities#solutions"
            className={`rcg-nav-link ${
              location.pathname === '/smart-cities' && location.hash === '#solutions'
                ? 'is-active'
                : ''
            } ${
              isLightHeader ? 'text-[#142B45] hover:text-[#245BB2]' : 'text-white hover:text-[#B8D957]'
            }`}
          >
            Solutions
          </Link>

          <Link
            to="/featured-offer"
            className={`rcg-nav-link ${
              location.pathname === '/featured-offer' ? 'is-active' : ''
            } ${
              isLightHeader ? 'text-[#142B45] hover:text-[#245BB2]' : 'text-white hover:text-[#B8D957]'
            }`}
            aria-current={location.pathname === '/featured-offer' ? 'page' : undefined}
          >
            Featured Offer
          </Link>

          <Link
            to="/about-contact"
            className={`rcg-nav-link ${
              location.pathname === '/about-contact' ? 'is-active' : ''
            } ${
              isLightHeader ? 'text-[#142B45] hover:text-[#245BB2]' : 'text-white hover:text-[#B8D957]'
            }`}
            aria-current={location.pathname === '/about-contact' ? 'page' : undefined}
          >
            Contact
          </Link>
        </nav>

        {/* Zone 3: Desktop Business Enquiry CTA (lg:+) & Mobile/Tablet Menu Trigger (< lg) */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/about-contact#enquiry"
            className={`hidden lg:inline-flex rcg-cta ${
              isLightHeader ? 'rcg-cta--dark' : 'rcg-cta--light'
            }`}
          >
            <span>Business Enquiry</span>
            <span className="rcg-cta-arrow" aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 bg-transparent border-none cursor-pointer shrink-0 ${
              isLightHeader ? 'text-[#142B45]' : 'text-white'
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile / Tablet Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#142B45] text-white border-t border-white/10 px-5 sm:px-8 py-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="py-3.5 text-base sm:text-lg font-['Manrope'] font-bold text-white border-b border-white/10 no-underline"
            >
              Home
            </Link>
            <Link
              to="/smart-cities"
              onClick={() => setMobileOpen(false)}
              className="py-3.5 text-base sm:text-lg font-['Manrope'] font-bold text-white border-b border-white/10 no-underline"
            >
              Smart Cities &amp; Sustainable Development
            </Link>
            <div className="pl-4 py-2 space-y-1.5 border-b border-white/10">
              {SMART_CITY_SUBMENU.map((item) => (
                <button
                  key={item.hash}
                  type="button"
                  onClick={() => handleSubmenuNavigate(item.hash)}
                  className="block w-full text-left py-1.5 text-sm text-white/80 hover:text-[#32BFD1] bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Link
              to="/smart-cities#solutions"
              onClick={() => setMobileOpen(false)}
              className="py-3.5 text-base sm:text-lg font-['Manrope'] font-bold text-white border-b border-white/10 no-underline"
            >
              Solutions
            </Link>
            <Link
              to="/featured-offer"
              onClick={() => setMobileOpen(false)}
              className="py-3.5 text-base sm:text-lg font-['Manrope'] font-bold text-white border-b border-white/10 no-underline"
            >
              Featured Offer
            </Link>
            <Link
              to="/about-contact"
              onClick={() => setMobileOpen(false)}
              className="py-3.5 text-base sm:text-lg font-['Manrope'] font-bold text-white border-b border-white/10 no-underline"
            >
              About &amp; Contact
            </Link>
            <div className="pt-5 flex flex-col gap-4">
              <Link
                to="/about-contact#enquiry"
                onClick={() => setMobileOpen(false)}
                className="rcg-cta rcg-cta--light self-start"
              >
                <span>Start a Business Enquiry</span>
                <span className="rcg-cta-arrow" aria-hidden="true">→</span>
              </Link>
              <a
                href={RCG_BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#32BFD1] no-underline"
              >
                {RCG_BRAND.handle} · {RCG_BRAND.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
