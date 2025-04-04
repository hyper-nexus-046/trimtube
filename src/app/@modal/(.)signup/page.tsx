import Image from 'next/image'
import dashboard from 'public/common/dashboard.png'

import { Logo } from '~/components/common/header/logo'
import { LoginForm } from '~/components/common/login-form'

import { Modal } from './modal'

export default async function SignInModal() {
  return (
    <Modal>
      <div className='grid lg:grid-cols-[1fr_1.5fr] items-center min-h-screen bg-[#02020e]'>
        <div className='relative h-full flex flex-col justify-center'>
          <Logo className='absolute top-3 left-5' />
          <LoginForm className='w-full md:w-[90%] lg:w-4/5 mx-auto  px-12 lg:px-0' />
        </div>
        <div
          style={{
            background: `
            linear-gradient(to bottom right,
              #1f2537 0%,
              #1f2537 20%,
              #242a3c 20%,
              #242a3c 40%,
              #2a2d41 40%,
              #2a2d41 60%,
              #3a3e4f 60%,
              #3a3e4f 80%,
              #3a3e4f 100%
            )
          `
          }}
          className='relative hidden lg:flex flex-col p-6 lg:p-10 overflow-hidden h-full'
        >
          <div className='pt-4 space-y-3'>
            <h1 className='text-heading-h5 text-semibold'>
              Design for individuals
            </h1>
            <p className='w-3/4'>
              See the analytics and grow your date for Task remotely, from
              anywhere!
            </p>
          </div>
          <Image
            className='-rotate-12 absolute -bottom-10 xl:-bottom-16 -right-24 xl:-right-36 rounded-xl'
            src={dashboard}
            alt='dashboard'
          />
        </div>
      </div>
    </Modal>
  )
}
