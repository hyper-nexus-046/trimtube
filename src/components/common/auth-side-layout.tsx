import Image from 'next/image'
import dashboard from 'public/common/dashboard.png'

import { cn } from '~/lib/utils'

export const AuthSideLayout = ({
  title = 'Design for individuals',
  description = 'See the analytics and grow your date for Task remotely, from anywhere!',
  className = ''
}: {
  title?: string
  description?: string
  className?: string
}) => {
  return (
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
        <h3 className='text-heading-h5 text-semibold'>{title}</h3>
        <p className='w-3/4 xl:w-3/5'>{description}</p>
      </div>
      <Image
        className={cn(
          '-rotate-12 absolute -bottom-32 xl:-bottom-42 -right-24 xl:-right-36 rounded-xl',
          className
        )}
        src={dashboard}
        priority
        alt='Trimtube Dashboard'
      />
    </div>
  )
}
