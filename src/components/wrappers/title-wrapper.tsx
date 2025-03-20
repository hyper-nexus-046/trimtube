import { forwardRef, type JSX, type ReactNode } from 'react'

import { cn } from '~/lib/utils'

export const TitledWrapper = forwardRef<
  HTMLDivElement,
  {
    title: string | ReactNode
    longTitle?: boolean
    spanText?: string
    headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    sectionName?: string
    sectionIcon?: ReactNode
    para?: string | ReactNode
    children: ReactNode | ReactNode[]
    className?: string
    titleClasses?: string
    paraClasses?: string
    isMax?: boolean
    headerClasses?: string
  }
>((props, ref) => {
  const {
    title,
    longTitle = false,
    spanText,
    headingLevel = 'h2',
    sectionName,
    sectionIcon,
    para,
    children,
    className,
    titleClasses = '',
    paraClasses = '',
    isMax = false,
    headerClasses
  } = props

  const Heading = headingLevel as keyof JSX.IntrinsicElements

  return (
    <div
      ref={ref}
      className={cn(
        'relative mx-auto size-full max-w-sub-container space-y-[clamp(0.8rem,2vw,2.05rem)] overflow-x-clip px-content-sm lg:px-content',
        isMax && '!max-w-container',
        className
      )}
    >
      <header className={cn('space-y-4 text-center', headerClasses)}>
        {sectionName && (
          <div
            className={cn(
              'mx-auto flex w-fit items-center gap-2 rounded-md border border-border bg-[#0d0d0d] px-5 py-[6px] text-sm'
            )}
          >
            {sectionIcon && sectionIcon}
            {sectionName}
          </div>
        )}
        {title && (
          <Heading
            className={cn(
              'mx-auto max-w-para-lg text-heading-h3 font-semibold',
              longTitle && 'max-w-para-xl',
              titleClasses
            )}
          >
            {title}
            {spanText && <span className='text-primary'>{spanText}</span>}
          </Heading>
        )}
        {para && (
          <p
            className={cn(
              'mx-auto max-w-para text-paragraph-section text-secondary-foreground',
              paraClasses
            )}
          >
            {para}
          </p>
        )}
      </header>

      {children}
    </div>
  )
})

TitledWrapper.displayName = 'TitledWrapper'
