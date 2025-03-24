'use client'

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
      <Button variant='link' className={cn(signInClass, 'text-foreground')}>
        Sign in
      </Button>
      <Button className='px-3' variant='default'>
        Get Started
      </Button>
    </div>
  )
}
