import Image from 'next/image'
import dashboard from 'public/common/dashboard.png'

import { LoginForm } from '~/components/common/login-form'
import { Wrapper } from '~/components/wrappers'

export default async function Page() {
  return (
    <Wrapper className='mb-content-lg pt-content-sm grid  lg:grid-cols-2 gap-10'>
      <LoginForm />
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
        className='relative flex flex-col items-center p-6 lg:p-10 overflow-hidden h-96 sm:h-[510px]'
      >
        <div>
          <h1 className='text-heading-h5 text-semibold pb-2'>
            Design for individuals
          </h1>
          <p>
            See the analytics and grow your date for Task remotely, from
            anywhere!
          </p>
        </div>
        <Image
          className='mt-8 -rotate-12 absolute -bottom-10 scale-110 -right-20'
          src={dashboard}
          alt='dashboard'
        />
      </div>
    </Wrapper>
  )
}
