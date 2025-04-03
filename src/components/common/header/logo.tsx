import Link from 'next/link'

import { cn } from '~/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href='/' className={cn('font-semibold lg:text-lg', className)}>
      Trimtube
    </Link>
  )
}
