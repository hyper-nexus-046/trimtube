'use client'

import { UserButton, useUser } from '@clerk/nextjs'

export const UserDropDown = () => {
  const { isLoaded } = useUser()

  if (!isLoaded)
    return (
      <div className='flex justify-center items-center h-6 w-6'>
        <div className='border-2 size-full m-auto block border-primary rounded-full animate-spin border-t-black'></div>
      </div>
    )

  return (
    <UserButton
      appearance={{
        elements: {
          userButtonAvatarBox: 'h-7 w-7',
          userButtonPopoverMain: 'bg-card',
          main: 'bg-red-500',
          cardBox: 'bg-card bg-yellow-500'
        }
      }}
    />
  )
}
