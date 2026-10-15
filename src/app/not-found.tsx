import Link from 'next/link'
import { t } from '@/i18n/t'
import { PageContainer } from '@/shared/ui/PageContainer'

export default function NotFound() {
  const { common, nav } = t()

  return (
    <PageContainer width="narrow" className="py-24 text-center">
      <p className="font-accent text-5xl text-accent-gold">404</p>
      <p className="mt-4 text-ink-muted">{common.error}</p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-block text-sm text-accent-gold hover:underline"
      >
        ← {nav.home}
      </Link>
    </PageContainer>
  )
}
