import { FormEvent, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, Copy } from 'lucide-react';
import { RCG_ASSETS, RCG_BRAND } from '../data/rcgData';
import RevealImage from '../components/RevealImage';
import { useGsapReveal } from '../hooks/useGsapReveal';

const ENQUIRY_TYPES = [
  'Business Development & Partnerships',
  'Flakes & Metallic Epoxy Systems (Epoxy Busters)',
  'Black Friday $2/Sqft Epoxy Offer Inquiry',
  'Concrete & Site Edging',
  'Playgrounds & Rubber Surfacing',
  'Solar Lighting & Sustainable Site Solutions',
  'General Business Enquiry',
];

interface SubmitState {
  status: 'idle' | 'submitting' | 'sent' | 'manual_dispatch' | 'error';
  message: string;
  formattedSummary?: string;
}

export default function AboutContactPage() {
  const pageRef = useRef<HTMLElement>(null);
  const [searchParams] = useSearchParams();
  useGsapReveal(pageRef);

  const initialTopic = searchParams.get('topic') || ENQUIRY_TYPES[0];

  const [csrfToken, setCsrfToken] = useState<string>('');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('United States');
  const [enquiryType, setEnquiryType] = useState(
    ENQUIRY_TYPES.includes(initialTopic) ? initialTopic : ENQUIRY_TYPES[0]
  );
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [copied, setCopied] = useState(false);

  const [submitState, setSubmitState] = useState<SubmitState>({
    status: 'idle',
    message: '',
  });

  useEffect(() => {
    fetch('/api/csrf-token')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.token) setCsrfToken(data.token);
      })
      .catch(() => {
        // Handled cleanly at submit time
      });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitState({ status: 'submitting', message: '' });

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          company: company.trim(),
          email: email.trim(),
          country: country.trim(),
          enquiryType,
          message: message.trim(),
          website: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitState({
          status: 'error',
          message: data?.error || 'Please check all required fields and try again.',
        });
        return;
      }

      if (data.delivered) {
        setSubmitState({
          status: 'sent',
          message:
            'Your business enquiry has been validated and forwarded to the configured recipient.',
        });
        setFullName('');
        setCompany('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitState({
          status: 'manual_dispatch',
          message:
            data.message ||
            'Your enquiry brief has been validated. Direct email forwarding is not configured on this server—please send this formatted brief via Instagram DM (@rcgsmartcitiesofusa) or call (931) 542-8787.',
          formattedSummary: data.formattedSummary,
        });
      }
    } catch {
      const fallbackSummary = [
        `To: RCG Smart Cities (${RCG_BRAND.handle})`,
        `From: ${fullName} (${company || 'Individual / Organization'})`,
        `Email: ${email}`,
        `Country: ${country}`,
        `Topic: ${enquiryType}`,
        `Message: ${message}`,
      ].join('\n');

      setSubmitState({
        status: 'manual_dispatch',
        message:
          'Unable to reach the automated mail relay. Please connect directly via Instagram (@rcgsmartcitiesofusa) or call (931) 542-8787 using the brief below.',
        formattedSummary: fallbackSummary,
      });
    }
  };

  const handleCopyBrief = async () => {
    if (!submitState.formattedSummary) return;
    try {
      await navigator.clipboard.writeText(submitState.formattedSummary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unsupported
    }
  };

  return (
    <main ref={pageRef} className="w-full overflow-x-hidden">
      {/* 1. Executive Panorama Header extending behind transparent navbar */}
      <section className="relative min-h-[72vh] flex items-end pb-16 sm:pb-20 pt-36 overflow-hidden bg-[#142B45]">
        <div className="absolute inset-0" data-gsap-parallax>
          <RevealImage
            src={RCG_ASSETS.strategyPanorama}
            alt="Executive sustainable development planning studio overlooking a green urban skyline"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(20,43,69,0.55) 0%, rgba(20,43,69,0.28) 45%, rgba(20,43,69,0.86) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl space-y-5">
            <p
              data-gsap-hero
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#B8D957] m-0"
            >
              About RCG Smart Cities &amp; Business Enquiries
            </p>
            <h1
              data-gsap-hero
              className="font-['Manrope'] font-extrabold text-white leading-[1.08] m-0"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.85rem)' }}
            >
              Smart Solutions. Stronger Communities.
            </h1>
            <p data-gsap-hero className="text-base sm:text-lg text-white/90 max-w-2xl m-0">
              {RCG_BRAND.bio} — connecting practical surface engineering, clean outdoor
              infrastructure, and community-oriented business development from Gallatin,
              Tennessee.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Verified Corporate Story & Identity (Warm White #FAFBF9) */}
      <section className="bg-[#FAFBF9] text-[#263747] py-20 lg:py-28">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6" data-gsap-reveal>
              <img
                src={RCG_ASSETS.logoHd}
                alt="RCG Smart Cities LLC Official Logo"
                className="h-32 sm:h-36 w-auto object-contain block"
              />
              <div className="pt-4 border-t rcg-rule-dark space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#18A77B] m-0">
                  Verified Public Profile
                </p>
                <p className="font-['Manrope'] font-bold text-2xl text-[#142B45] m-0">
                  {RCG_BRAND.legalMark}
                </p>
                <p className="text-sm text-[#3B4650] m-0">
                  {RCG_BRAND.bio} · {RCG_BRAND.handle}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6" data-gsap-reveal>
              <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl text-[#142B45] leading-tight m-0">
                Grounded in Real Surface Craft &amp; Sustainable Local Growth
              </h2>
              <p className="text-base sm:text-lg text-[#3B4650] leading-relaxed m-0">
                RCG Smart Cities operates across Middle Tennessee—including Gallatin, Lebanon,
                and the Greater Nashville region—delivering concrete work, flake and metallic
                epoxy flooring under its <strong className="text-[#142B45]">Epoxy Busters</strong>{' '}
                division, resilient rubber surfacing for community spaces, and solar outdoor
                lighting solutions.
              </p>
              <p className="text-base text-[#3B4650] leading-relaxed m-0">
                With bilingual team communication ({RCG_BRAND.bilingualNote}) and a public
                focus on sustainable and smart-city business development, the company bridges
                everyday residential and commercial durability with forward-looking community
                planning.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t rcg-rule-dark">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#3B4650]">
                    Service Region
                  </span>
                  <span className="font-['Manrope'] font-bold text-base text-[#142B45]">
                    Gallatin &amp; Greater Nashville, TN
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#3B4650]">
                    Published Focus
                  </span>
                  <span className="font-['Manrope'] font-bold text-base text-[#18A77B]">
                    Concrete · Epoxy · Rubber · Solar
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#3B4650]">
                    Languages
                  </span>
                  <span className="font-['Manrope'] font-bold text-base text-[#245BB2]">
                    English &amp; Español
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Enquiries & Verified Contact Channels (Soft Cloud Grey #EFF2F3) */}
      <section id="enquiry" className="bg-[#EFF2F3] text-[#263747] py-20 lg:py-28 scroll-mt-24">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            {/* Left: Verified Direct Contact Channels */}
            <div className="lg:col-span-5 space-y-10" data-gsap-reveal>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#245BB2] m-0">
                  Verified Direct Channels
                </p>
                <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl text-[#142B45] m-0">
                  Connect with RCG Smart Cities
                </h2>
                <p className="text-[#3B4650] text-base leading-relaxed m-0">
                  Reach the team directly through their verified official Instagram account or
                  via the telephone and Gallatin, Tennessee address published on their campaign
                  artwork.
                </p>
              </div>

              <div className="space-y-6 border-t rcg-rule-dark pt-6">
                <div className="pb-6 border-b rcg-rule-dark space-y-2">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#18A77B]">
                    Primary Social &amp; DM Channel
                  </span>
                  <p className="font-['Manrope'] font-bold text-xl text-[#142B45] m-0">
                    {RCG_BRAND.handle}
                  </p>
                  <a
                    href={RCG_BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rcg-cta rcg-cta--dark"
                  >
                    <span>Connect with RCG Smart Cities</span>
                    <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="pb-6 border-b rcg-rule-dark space-y-2">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#245BB2]">
                    Telephone ({RCG_BRAND.bilingualNote})
                  </span>
                  <p className="font-['Manrope'] font-bold text-2xl text-[#142B45] tabular-nums m-0">
                    {RCG_BRAND.phoneDisplay}
                  </p>
                  <a href={RCG_BRAND.phoneHref} className="rcg-cta rcg-cta--dark">
                    <span>Call RCG Smart Cities</span>
                    <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#3B4650]">
                    Campaign Address
                  </span>
                  <p className="font-['Manrope'] font-bold text-lg text-[#142B45] m-0">
                    {RCG_BRAND.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Borderless Editorial Business Enquiry Form */}
            <div className="lg:col-span-7" data-gsap-reveal>
              <div className="pb-6 mb-8 border-b rcg-rule-dark">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#18A77B] m-0">
                  Business Enquiry Brief
                </p>
                <h3 className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-[#142B45] mt-1 m-0">
                  Prepare &amp; Validate Your Enquiry
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {/* Honeypot anti-spam field */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website-hp">Leave this field empty</label>
                  <input
                    id="website-hp"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#142B45] mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className="rcg-field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#142B45] mb-1"
                    >
                      Company / Organisation
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Organization or property name"
                      className="rcg-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#142B45] mb-1"
                    >
                      Professional Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="rcg-field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#142B45] mb-1"
                    >
                      Country / Region
                    </label>
                    <input
                      id="country"
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="United States"
                      className="rcg-field"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiryType"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#142B45] mb-1"
                  >
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiryType"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="rcg-field bg-transparent cursor-pointer"
                  >
                    {ENQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#142B45] mb-1"
                  >
                    Project or Partnership Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share approximate location, square footage or scope, and preferred contact method..."
                    className="rcg-field resize-y"
                  />
                </div>

                {submitState.status === 'error' && (
                  <div
                    role="alert"
                    className="py-3 border-b-2 border-red-600 text-red-700 text-sm font-medium"
                  >
                    {submitState.message}
                  </div>
                )}

                {submitState.status === 'sent' && (
                  <div
                    role="status"
                    className="py-4 border-b-2 border-[#18A77B] text-[#142B45] text-sm font-medium"
                  >
                    {submitState.message}
                  </div>
                )}

                {submitState.status === 'manual_dispatch' && (
                  <div
                    role="status"
                    className="py-5 border-t border-b border-[#142B45]/20 space-y-4 text-sm text-[#263747]"
                  >
                    <p className="font-semibold text-[#142B45] m-0">{submitState.message}</p>
                    {submitState.formattedSummary && (
                      <pre className="whitespace-pre-wrap break-words overflow-x-auto max-w-full font-sans text-xs text-[#3B4650] bg-white/60 p-4 m-0">
                        {submitState.formattedSummary}
                      </pre>
                    )}
                    <div className="flex flex-wrap items-center gap-8">
                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="rcg-cta rcg-cta--dark text-xs"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-[#18A77B]" aria-hidden="true" />
                            <span>Brief Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" aria-hidden="true" />
                            <span>Copy Formatted Enquiry Brief</span>
                          </>
                        )}
                      </button>
                      <a
                        href={RCG_BRAND.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rcg-cta rcg-cta--emerald text-xs"
                      >
                        <span>Send via @rcgsmartcitiesofusa</span>
                        <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center justify-between gap-6">
                  <button
                    type="submit"
                    disabled={submitState.status === 'submitting'}
                    className="rcg-cta rcg-cta--dark disabled:opacity-50"
                  >
                    <span>
                      {submitState.status === 'submitting'
                        ? 'Validating Enquiry...'
                        : 'Validate & Submit Enquiry Brief'}
                    </span>
                    <span className="rcg-cta-arrow" aria-hidden="true">→</span>
                  </button>
                  <span className="text-xs text-[#3B4650]">
                    CSRF-protected · No automatic third-party marketing
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
