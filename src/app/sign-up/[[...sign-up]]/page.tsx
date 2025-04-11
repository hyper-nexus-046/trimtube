import { SignUp } from '@clerk/nextjs'

import { AuthSideLayout } from '~/components/common/auth-side-layout'
import { Logo } from '~/components/common/header/logo'
import { PageWrapper } from '~/components/wrappers'

export default function Page() {
  return (
    <PageWrapper showCta={false} showFooter={false}>
      <Logo className='absolute top-5 left-5' />
      <div className='grid lg:grid-cols-[1fr_1.5fr] min-h-screen bg-card'>
        <div className='flex items-center justify-center size-full'>
          <SignUp />
        </div>
        <AuthSideLayout className='2xl:-bottom-80' />
      </div>
    </PageWrapper>
  )
}
