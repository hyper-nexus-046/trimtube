import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '../ui/button'
import { TitledWrapper } from '../wrappers'

export const BottomCta = () => {
  return (
    <TitledWrapper
      title={
        <>
          Let’s talk about <br /> your next big move
        </>
      }
      para={
        <>
          Hop on a call with us to see how <br /> our services can accelerate
          your growth.
        </>
      }
      sectionName='Radison'
      className='mb-content-lg bg-[radial-gradient(21%_50%_at_50%_40%,_rgba(81,47,235,0.25)_0%,_rgba(56,54,61,0)_100%)]'
    >
      <div className='flex flex-col items-center gap-3'>
        <Button asChild>
          <Link href='https://cal.com' className='flex items-center gap-2'>
            Schedule a quick call <ArrowUpRight className='h-4 w-4' />
          </Link>
        </Button>

        <Button className='text-secondary-foreground' variant='link'>
          Get Started
        </Button>
      </div>
    </TitledWrapper>
  )
}
