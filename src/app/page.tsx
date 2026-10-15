import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { t } from '@/i18n/t'
import { PageContainer } from '@/shared/ui/PageContainer'
import { CelestialOrrery } from '@/shared/ui/CelestialOrrery'

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
            src="/images/backgrounds/bg-nebula.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="ma-hero__ambient"
          />
        </div>

        {/* Two independently animated star planes are generated in CSS. */}
        <div className="ma-starfield pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

        {/* Main foreground object — each orbital rail moves independently. */}
        <div className="ma-hero__orrery pointer-events-none absolute z-[3]" aria-hidden="true">
          <CelestialOrrery />
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

      {/* ── Celestial Divider ────────────────────────────────────── */}
      <div className="py-4" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/graphics/divider-celestial.svg"
          alt=""
          className="pointer-events-none mx-auto w-full max-w-3xl opacity-40"
        />
      </div>

      {/* ── About Method ─────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="py-24">
        <PageContainer width="wide">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Animated decoration — right side on desktop */}
            <div className="flex items-center justify-center lg:order-last" aria-hidden="true">
              <div className="relative h-80 w-80 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem]">
                {/* Outer ring — slow orbit */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/graphics/sacred-geometry.svg"
                  alt=""
                  className="ma-orbit pointer-events-none absolute inset-0 h-full w-full opacity-30"
                  style={{ animationDuration: '120s' }}
                />
                {/* Inner ring — reverse orbit */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/graphics/orbit-circles.svg"
                  alt=""
                  className="ma-orbit ma-orbit--reverse pointer-events-none absolute inset-0 m-auto h-[62%] w-[62%] opacity-55"
                  style={{ animationDuration: '75s' }}
                />
                {/* Gold sparks */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/graphics/star-spark.svg"
                  alt=""
                  className="ma-glow pointer-events-none absolute right-6 top-8 w-7 opacity-70"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/graphics/star-spark.svg"
                  alt=""
                  className="ma-glow pointer-events-none absolute bottom-10 left-10 w-5 opacity-50"
                  style={{ animationDelay: '3s' }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <p className="mb-4 font-accent text-xs tracking-[0.3em] text-accent-gold/70 uppercase">
                {about.label}
              </p>
              <h2
                id="about-heading"
                className="font-heading text-4xl font-light text-ink-primary sm:text-5xl"
              >
                {about.title}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-accent-gold/40 lg:mx-0" />
              <p className="mt-6 text-base leading-loose text-ink-muted sm:text-lg">
                {about.description}
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="py-4" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/graphics/divider-celestial.svg"
          alt=""
          className="pointer-events-none mx-auto w-full max-w-3xl opacity-40"
        />
      </div>

      {/* ── Topics Cards ─────────────────────────────────────────── */}
      <section aria-labelledby="topics-heading" className="py-24">
        <PageContainer width="wide">
          <h2
            id="topics-heading"
            className="font-heading mb-3 text-center text-4xl font-light text-ink-primary sm:text-5xl"
          >
            {topics.heading}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-accent-gold/40" />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                { key: 'purpose',       icon: '/icons/purpose.svg'       },
                { key: 'talents',       icon: '/icons/talents.svg'       },
                { key: 'relationships', icon: '/icons/relationships.svg' },
                { key: 'finance',       icon: '/icons/finance.svg'       },
              ] as const
            ).map(({ key, icon }, i) => (
              <div
                key={key}
                data-reveal
                className="ma-card flex flex-col items-center gap-5 p-7 text-center"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none w-20 opacity-85"
                />
                <div>
                  <h3 className="font-heading text-xl font-light text-ink-primary">
                    {topics[key].title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {topics[key].description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="py-4" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/graphics/divider-celestial.svg"
          alt=""
          className="pointer-events-none mx-auto w-full max-w-3xl opacity-40"
        />
      </div>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="py-28">
        <PageContainer width="narrow">
          <div className="text-center" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/graphics/starburst.svg"
              alt=""
              aria-hidden="true"
              className="ma-glow pointer-events-none mx-auto mb-6 w-10 opacity-60"
            />
            <h2 className="font-heading text-4xl font-light text-ink-primary sm:text-5xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted">
              {cta.description}
            </p>
            <div className="mt-10">
              <Link
                href="/matrix"
                className="focus-ring inline-block rounded-sm border border-accent-gold px-10 py-4 font-accent text-sm tracking-widest text-accent-gold transition-all hover:bg-accent-gold hover:text-bg-base hover:shadow-[0_0_24px_rgba(201,168,76,0.30)]"
              >
                {cta.button.toUpperCase()}
              </Link>
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
