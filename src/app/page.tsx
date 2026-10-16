import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { t } from '@/i18n/t'
import { PageContainer } from '@/shared/ui/PageContainer'

export default function HomePage() {
  const { landing } = t()
  const { hero, about, topics, cta } = landing

  return (
    <>
      {/* ── Hero: atmospheric scene + object-based celestial orrery ── */}
      <section
        aria-labelledby="hero-heading"
        className="ma-hero isolate relative flex min-h-[calc(100dvh-4rem)] items-end overflow-hidden lg:items-center"
      >
        <div className="ma-hero__base absolute inset-0" aria-hidden="true" />

        {/* Use the existing nebula as an atmosphere, not a flat image card. */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/hero/hero-main.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="ma-hero__ambient"
          />
        </div>

        {/* Two independently animated star planes are generated in CSS. */}
        <div className="ma-starfield pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

        {/* True rendered brass-and-amethyst object: separate from the cinematic background. */}
        <div className="ma-hero__orrery pointer-events-none absolute z-[3]" aria-hidden="true">
          <span className="ma-hero__object-aura" />
          <Image
            src="/images/objects/orrery-object.webp"
            alt=""
            width={300}
            height={232}
            className="ma-hero__object"
          />
        </div>

        {/* Local text contrast only; this veil does not black out the scene. */}
        <div className="ma-hero__text-veil pointer-events-none absolute inset-0 z-[4]" aria-hidden="true" />
        <div className="ma-hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 z-[5]" aria-hidden="true" />

        {/* Corner ornaments remain secondary to the object. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/graphics/corner-top-left.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-4 z-[6] w-16 opacity-50 sm:w-20"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/graphics/corner-top-right.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-4 z-[6] w-16 rotate-90 opacity-50 sm:w-20"
        />

        {/* A small hanging talisman adds object detail without competing with the orrery. */}
        <Image
          src="/svg/star-charm.svg"
          alt=""
          aria-hidden="true"
          width={120}
          height={160}
          className="ma-hero__charm pointer-events-none absolute right-[14%] top-[12%] z-[6] hidden w-16 lg:block xl:w-[4.5rem]"
        />

        <PageContainer width="wide" className="relative z-10 flex w-full items-center py-16 sm:py-20 lg:py-0">
          <div className="ma-hero__copy">
            <h1
              id="hero-heading"
              className="ma-reveal font-heading text-5xl font-light leading-[1.02] tracking-wide text-ink-primary sm:text-6xl xl:text-7xl"
            >
              {hero.title}
            </h1>
            <p className="ma-reveal ma-reveal--delay-1 mt-6 max-w-xl text-base leading-relaxed text-ink-primary/85 sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-9 sm:mt-10">
              <Link
                href="/matrix"
                className="ma-reveal ma-reveal--delay-2 focus-ring inline-flex min-h-12 items-center gap-3 rounded-sm border border-accent-gold bg-bg-base/25 px-7 py-3 font-accent text-sm tracking-widest text-accent-gold backdrop-blur-sm transition-all duration-300 hover:bg-accent-gold hover:text-bg-base hover:shadow-[0_0_26px_rgba(201,168,76,0.32)]"
              >
                <span>{hero.cta.toUpperCase()}</span>
                <span aria-hidden="true" className="text-lg leading-none">↗</span>
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ── Transition ornament ─────────────────────────────────── */}
      <div className="ma-section-divider" aria-hidden="true">
        <span className="ma-section-divider__line" />
        <span className="ma-section-divider__sigil">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/graphics/star-spark.svg" alt="" className="ma-section-divider__star" />
        </span>
        <span className="ma-section-divider__line" />
      </div>

      {/* ── About Method ─────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="ma-method-section relative overflow-hidden">
        <div className="ma-method-section__haze pointer-events-none absolute inset-0" aria-hidden="true" />
        <PageContainer width="wide" className="relative z-10">
          <div className="ma-method-grid">
            <div className="ma-method-copy" data-reveal>
              <p className="ma-section-eyebrow">{about.label}</p>
              <h2
                id="about-heading"
                className="ma-section-heading font-heading"
              >
                {about.title}
              </h2>
              <div className="ma-method-copy__rule" aria-hidden="true" />
              <p className="ma-method-copy__description">
                {about.description}
              </p>
            </div>

            <div className="ma-method-visual" data-reveal aria-hidden="true">
              <div className="ma-method-visual__halo" />
              <div className="ma-method-visual__orbit ma-method-visual__orbit--one" />
              <div className="ma-method-visual__orbit ma-method-visual__orbit--two" />
              <Image
                src="/images/objects/orrery-object.webp"
                alt=""
                width={300}
                height={232}
                className="ma-method-visual__art"
              />
              <Image
                src="/svg/star-charm.svg"
                alt=""
                width={120}
                height={160}
                className="ma-method-visual__charm"
              />
              <span className="ma-method-visual__spark ma-method-visual__spark--one" />
              <span className="ma-method-visual__spark ma-method-visual__spark--two" />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ── Transition ornament ─────────────────────────────────── */}
      <div className="ma-section-divider ma-section-divider--wide" aria-hidden="true">
        <span className="ma-section-divider__line" />
        <span className="ma-section-divider__sigil ma-section-divider__sigil--large">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/graphics/divider-celestial.svg" alt="" className="ma-section-divider__emblem" />
        </span>
        <span className="ma-section-divider__line" />
      </div>

      {/* ── Topic directions ─────────────────────────────────────── */}
      <section aria-labelledby="topics-heading" className="ma-topics-section relative overflow-hidden">
        <div className="ma-topics-section__haze pointer-events-none absolute inset-0" aria-hidden="true" />
        <PageContainer width="wide" className="relative z-10">
          <div className="ma-topics-heading" data-reveal>
            <p className="ma-section-eyebrow">{topics.label}</p>
            <h2
              id="topics-heading"
              className="ma-section-heading font-heading"
            >
              {topics.heading}
            </h2>
            <div className="ma-topics-heading__rule" aria-hidden="true" />
          </div>

          <div className="ma-topics-grid">
            {(
              [
                { key: 'purpose', icon: '/illustrations/purpose-compass.svg', number: 'I' },
                { key: 'talents', icon: '/illustrations/talents-prism.svg', number: 'II' },
                { key: 'relationships', icon: '/illustrations/relationships-orbs.svg', number: 'III' },
                { key: 'finance', icon: '/illustrations/finance-solar-medallion.svg', number: 'IV' },
              ] as const
            ).map(({ key, icon, number }, i) => (
              <article
                key={key}
                data-reveal
                className="ma-topic-card"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="ma-topic-card__number" aria-hidden="true">{number}</span>
                <div className="ma-topic-card__art" aria-hidden="true">
                  <span className="ma-topic-card__art-halo" />
                  <Image
                    src={icon}
                    alt=""
                    width={320}
                    height={320}
                    className="ma-topic-card__art-image"
                  />
                </div>
                <div className="ma-topic-card__body">
                  <h3 className="ma-topic-card__title font-heading">
                    {topics[key].title}
                  </h3>
                  <p className="ma-topic-card__description">
                    {topics[key].description}
                  </p>
                </div>
                <span className="ma-topic-card__footline" aria-hidden="true" />
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ── Closing call to action ───────────────────────────────── */}
      <section className="ma-final-cta relative overflow-hidden" aria-labelledby="final-cta-heading">
        <div className="ma-final-cta__haze pointer-events-none absolute inset-0" aria-hidden="true" />
        <PageContainer width="wide" className="relative z-10">
          <div className="ma-final-cta__panel" data-reveal>
            <div className="ma-final-cta__copy">
              <p className="ma-section-eyebrow">{cta.label}</p>
              <h2 id="final-cta-heading" className="ma-section-heading font-heading">
                {cta.title}
              </h2>
              <p className="ma-final-cta__description">
                {cta.description}
              </p>
              <div className="mt-9">
                <Link
                  href="/matrix"
                  className="ma-final-cta__button focus-ring inline-flex min-h-12 items-center gap-4 rounded-sm border border-accent-gold px-8 py-3 font-accent text-sm tracking-widest text-accent-gold transition-all duration-300 hover:bg-accent-gold hover:text-bg-base hover:shadow-[0_0_28px_rgba(201,168,76,0.32)]"
                >
                  <span>{cta.button.toUpperCase()}</span>
                  <span aria-hidden="true" className="text-lg">↗</span>
                </Link>
              </div>
            </div>
            <div className="ma-final-cta__seal" aria-hidden="true">
              <div className="ma-final-cta__seal-halo" />
              <Image
                src="/images/objects/orrery-object.webp"
                alt=""
                width={300}
                height={232}
                className="ma-final-cta__seal-image"
              />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Scroll-reveal (progressive enhancement — elements visible without JS) */}
      <Script id="scroll-reveal" strategy="afterInteractive">{`
        (function(){
          if(!('IntersectionObserver' in window)) return;
          var io = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){
                e.target.classList.replace('reveal-ready','reveal-visible');
                io.unobserve(e.target);
              }
            });
          },{threshold:0.12});
          document.querySelectorAll('[data-reveal]').forEach(function(el){
            el.classList.add('reveal-ready');
            io.observe(el);
          });
        })();
      `}</Script>
    </>
  )
}
