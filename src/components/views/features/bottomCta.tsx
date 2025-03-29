import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { Wrapper } from '~/components/wrappers'

export const BottomCta = () => {
  return (
    <Wrapper className='!px-0 md:!px-content-sm lg:!px-content'>
      <div className='bg-[#111827] px-10 lg:px-16 py-14 md:py-20 md:rounded-2xl mb-content-lg space-y-5'>
        <h2 className='text-heading-h5 lg:w-[55%] font-semibold'>
          Ready to save time and get more out of YouTube?
        </h2>
        <p className='md:w-3/4 lg:w-[55%] text-paragraph-sm leading-relaxed'>
          Join thousands of users who are already extracting maximum value from
          YouTube videos with Trimtube.
        </p>
        <div className='flex items-center gap-2 pt-4'>
          <Button asChild>
            <Link href='/'>Get started</Link>
          </Button>
          <Button
            asChild
            variant='link'
            className='flex items-center gap-2 text-white font-normal'
          >
            <Link href='/View-pricing' className='flex items-end gap-2 text-sm'>
              View pricing <ArrowRight className='mt-1' size={17} />
            </Link>
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}
