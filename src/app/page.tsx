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
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative flex items-end lg:items-center min-h-[100dvh] overflow-hidden"
      >
        {/* Layer A: Ken Burns ambient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/backgrounds/cosmos-ambient.webp" alt="" className="ma-layer-a" />
        </div>

        {/* Layer B: Star twinkle overlay */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/backgrounds/bg-stars.webp" alt="" className="ma-layer-b ma-starfield" />
        </div>

        {/* Layer 2a: Desktop hero cosmic art */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <Image
            src="/images/hero/hero-cosmic-main.webp"
            alt=""
            fill
            className="object-cover object-[62%_38%] opacity-80"
            sizes="100vw"
            priority
          />
          {/* Radial gradient — only darkens the left text zone */}
          <div className="ma-hero-text-veil" />
        </div>

        {/* Layer 2b: Mobile hero cosmic art */}
        <div className="pointer-events-none absolute inset-0 lg:hidden" aria-hidden="true">
          <Image
            src="/images/hero/hero-cosmic-mobile.webp"
            alt=""
            fill
            className="object-cover object-[50%_22%] opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-base/30 via-transparent to-transparent" />
        </div>

        {/* Bottom fade — both breakpoints */}
        <div className="ma-hero-bottom-fade pointer-events-none" aria-hidden="true" />

        {/* Layer C: Gold glow accent (desktop) */}
        <div
          className="pointer-events-none absolute hidden lg:block"
          style={{ right: '17vw', top: '27%' }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/graphics/starburst.svg" alt="" className="ma-glow w-10 opacity-55" />
        </div>

        {/* Layer D: Sacred orbit rings (desktop) */}
        <div
          className="pointer-events-none absolute hidden -translate-y-1/2 lg:block"
          style={{ right: '3vw', top: '50%' }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/graphics/sacred-orbit.svg"
            alt=""
            className="ma-orbit opacity-[0.32] w-[28rem] xl:w-[34rem]"
          />
        </div>

        {/* Corner ornaments */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/graphics/corner-top-left.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-4 w-16 opacity-50 sm:w-20"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/graphics/corner-top-right.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-4 w-16 rotate-90 opacity-50 sm:w-20"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/graphics/corner-bottom-left.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 left-4 w-12 -rotate-90 opacity-30 sm:w-16"
        />

        {/* Content */}
        <PageContainer className="relative z-10 pb-16 pt-32 lg:py-0" width="wide">
          <div className="max-w-xl lg:max-w-2xl">
            <h1
              id="hero-heading"
              className="ma-reveal font-heading text-5xl font-light leading-tight tracking-wide text-ink-primary sm:text-6xl xl:text-7xl"
            >
              {hero.title}
            </h1>
            <p className="ma-reveal ma-reveal--delay-1 mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-10">
              <Link
                href="/matrix"
                className="ma-reveal ma-reveal--delay-2 focus-ring inline-block rounded-sm border border-accent-gold px-8 py-3 font-accent text-sm tracking-widest text-accent-gold transition-all hover:bg-accent-gold hover:text-bg-base hover:shadow-[0_0_20px_rgba(201,168,76,0.32)]"
              >
                {hero.cta.toUpperCase()}
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
