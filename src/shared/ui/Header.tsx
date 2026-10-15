import Link from 'next/link'
import { t } from '@/i18n/t'
import { PageContainer } from './PageContainer'

export function Header() {
  const { site, nav } = t()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-base/80 backdrop-blur-md">
      <PageContainer>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="focus-ring rounded-sm"
            aria-label={site.name}
          >
            <span className="font-accent text-lg font-normal tracking-widest text-accent-gold">
              {site.name.toUpperCase()}
            </span>
          </Link>

          <nav aria-label="Основная навигация">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className="focus-ring rounded-sm text-sm text-ink-muted transition-colors hover:text-ink-primary"
                >
                  {nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/matrix"
                  className="focus-ring rounded-sm text-sm text-ink-muted transition-colors hover:text-ink-primary"
                >
                  {nav.matrix}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </PageContainer>
    </header>
  )
}
