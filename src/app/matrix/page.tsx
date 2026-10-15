import Link from 'next/link'
import { t } from '@/i18n/t'
import { PageContainer } from '@/shared/ui/PageContainer'

export default function MatrixPage() {
  const { nav } = t()

  return (
    <PageContainer width="narrow" className="py-24 text-center">
      <p className="font-accent text-4xl tracking-widest text-accent-gold">
        ✦
      </p>
      <h1 className="font-heading mt-6 text-3xl font-light text-ink-primary">
        Экран матрицы
      </h1>
      <p className="mt-4 text-sm text-ink-muted">
        Этот раздел находится в разработке.
      </p>
      <Link
        href="/"
        className="focus-ring mt-10 inline-block text-sm text-accent-gold hover:underline"
      >
        ← {nav.home}
      </Link>
    </PageContainer>
  )
}
