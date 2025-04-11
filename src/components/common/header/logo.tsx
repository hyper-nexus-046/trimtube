import Image from 'next/image'
import Link from 'next/link'
import logoImage from 'public/logo.png'

import { cn } from '~/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href='/'
      className={cn(
        'font-semibold lg:text-lg inline-flex gap-2 items-center',
        className
      )}
    >
      <Image src={logoImage} alt='Trimtube Logo' className='size-6' />
      Trimtube
    </Link>
  )
}
