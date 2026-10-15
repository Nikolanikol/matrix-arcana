import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Cinzel } from 'next/font/google'
import { Header } from '@/shared/ui/Header'
import { Footer } from '@/shared/ui/Footer'
import { t } from '@/i18n/t'
import '@/styles/globals.css'

/*
 * Fonts are loaded via next/font/google (subsetted and self-hosted by Next.js
 * at build time — no Google CDN requests at runtime).
 * To switch to local files: replace with next/font/local and provide .woff2
 * files in public/fonts/.
 */
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const { site } = t()
  return {
    title: site.name,
    description: site.tagline,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${inter.variable} ${cinzel.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
