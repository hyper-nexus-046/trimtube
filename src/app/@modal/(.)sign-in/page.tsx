import { SignIn } from '@clerk/nextjs'

import { AuthSideLayout } from '~/components/common/auth-side-layout'
import { Logo } from '~/components/common/header/logo'

import { Modal } from './modal'

export default async function SignInModal() {
  return (
    <Modal>
      <Logo className='absolute top-5 left-5' />
      <div className='grid lg:grid-cols-[1fr_1.5fr] min-h-[650px] bg-card'>
        <div className='flex items-center justify-center size-full'>
          <SignIn />
        </div>
        <AuthSideLayout />
      </div>
    </Modal>
  )
}
