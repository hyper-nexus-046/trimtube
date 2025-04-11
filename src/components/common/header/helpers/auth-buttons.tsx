'use client'

import Link from 'next/link'

import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'

export const AuthButtons = ({
  className,
  signInClass
}: {
  className?: string
  signInClass?: string
}) => {
  return (
    <div className={cn(className, 'flex gap-2')}>
      <Button
        variant='link'
        asChild
        className={cn(signInClass, 'text-foreground')}
      >
        <Link href='/sign-in'>Sign in</Link>
      </Button>
      <Button className='px-3' variant='default' asChild>
        <Link href='/sign-up'>Get Started</Link>
      </Button>
    </div>
  )
}
