import { t } from '@/i18n/t'
import { PageContainer } from './PageContainer'

export function Footer() {
  const { site, footer } = t()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border py-10">
      <PageContainer>
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="font-accent text-xs tracking-widest text-ink-muted">
            {site.name.toUpperCase()}
          </span>
          <p className="max-w-md text-xs text-ink-muted">
            {footer.disclaimer}
          </p>
          <span className="text-xs text-ink-muted">© {year}</span>
        </div>
      </PageContainer>
    </footer>
  )
}
