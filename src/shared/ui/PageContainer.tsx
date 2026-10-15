import { cn } from '@/shared/lib/utils'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  /** Use 'narrow' for focused content (forms, articles), 'wide' for full-bleed sections */
  width?: 'default' | 'narrow' | 'wide'
}

export function PageContainer({
  children,
  className,
  width = 'default',
}: PageContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        width === 'default' && 'max-w-5xl',
        width === 'narrow' && 'max-w-2xl',
        width === 'wide' && 'max-w-7xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
