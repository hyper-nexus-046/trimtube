import React, { type ReactNode } from 'react'

import { BottomCta } from '~/components/common/bottom-cta'
import { Footer } from '~/components/common/footer'

export const PageWrapper = ({
  children,
  showCta = true,
  showFooter = true
}: {
  children: ReactNode
  showCta?: boolean
  showFooter?: boolean
}) => {
  return (
    <main className='relative'>
      {children}
      {showCta && <BottomCta />}
      {showFooter && <Footer />}
    </main>
  )
}
