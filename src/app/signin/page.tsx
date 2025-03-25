import Image from 'next/image'
import dashboard from 'public/common/dashboard.png'

import { LoginForm } from '~/components/common/login-form'
import { Wrapper } from '~/components/wrappers'

export default async function Page() {
  return (
    <Wrapper className='grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center lg:min-h-screen'>
      <LoginForm className='xl:w-4/5 pt-content-lg lg:pt-0' />
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
          <p>
            See the analytics and grow your date for Task remotely, <br /> from
            anywhere!
          </p>
        </div>
        <Image
          className='-rotate-12 absolute -bottom-24 -right-24 rounded-md'
          src={dashboard}
          alt='dashboard'
        />
      </div>
    </Wrapper>
  )
}
