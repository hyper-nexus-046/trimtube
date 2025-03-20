import { type ReactNode } from 'react'

import { cn } from '~/lib/utils'

export const Wrapper = ({
  children,
  className
}: Readonly<{
  children?: ReactNode | ReactNode[]
  className?: string
}>) => {
  return (
    <div
      className={cn(
        'mx-auto max-w-container px-content-sm lg:px-content',
        className
      )}
    >
      {children}
    </div>
  )
}
