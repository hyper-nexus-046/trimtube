import Link from 'next/link'
import { BellIcon } from 'lucide-react'

import { Button } from '~/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '~/components/ui/popover'
import { Separator } from '~/components/ui/separator'
import { SidebarTrigger } from '~/components/ui/sidebar'

export function SiteHeader() {
  return (
    <header className='group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 py-5 flex sm:h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear'>
      <div className='flex justify-between flex-wrap sm:flex-nowrap gap-4 w-full px-4 lg:px-6'>
        <div className='flex items-center gap-2'>
          <SidebarTrigger className='-ml-1' />
          <Separator
            orientation='vertical'
            className='mx-2 data-[orientation=vertical]:h-6'
          />
          <div>
            <h1 className='font-medium'>Hello, John</h1>
            <p className='text-sm text-muted-foreground'>
              It’s nice to see you!
            </p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Button
            className='h-6 text-[13px] rounded-md text-blue-500 border-blue-500 hover:bg-black font-normal hover:text-blue-600'
            variant='outline'
            asChild
          >
            <Link href='/myaccount-subscription'>0/50 Credites Used</Link>
          </Button>
          <Popover>
            <PopoverTrigger className='relative p-2 rounded-md hover:bg-muted'>
              <BellIcon className='w-5 h-5' />
              <span className='absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full' />
            </PopoverTrigger>

            <PopoverContent className='w-80 p-0'>
              <div className='p-4 border-b font-semibold text-center'>
                Latest Updates
              </div>
              <div className='divide-y text-sm max-h-64 overflow-auto'>
                {[
                  {
                    title: 'TrimTube 2.0 - Faster, simpler & redesigned 🚀',
                    desc: 'Today we are releasing TrimTube 2.0 - our brand new interface...',
                    tag: 'NEW'
                  },
                  {
                    title: 'Introducing 3 New Caption Templates ✨',
                    desc: 'Hey creators, something special for you this week.',
                    tag: 'NEW'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className='p-3 hover:bg-muted cursor-pointer'
                  >
                    <div className='flex items-center gap-2'>
                      <span className='text-xs bg-green-500 text-white px-1.5 py-0.5 rounded'>
                        {item.tag}
                      </span>
                      <p className='font-medium text-sm'>{item.title}</p>
                    </div>
                    <p className='text-xs text-muted-foreground mt-1'>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className='border-t text-xs text-muted-foreground flex justify-between p-3'>
                <span>Powered by Parsemint</span>
                <Link href='#' className='hover:underline'>
                  See all changes
                </Link>
              </div>
            </PopoverContent>
          </Popover>

          <Button className='h-9'>New Action</Button>
        </div>
      </div>
    </header>
  )
}
