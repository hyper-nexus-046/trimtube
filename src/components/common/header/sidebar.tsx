import Link from 'next/link'
import { SignedOut } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'

import { siteConfig } from '~/config/site'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '~/components/ui/popover'
import { ScrollArea } from '~/components/ui/scroll-area'

import { AuthButtons } from './helpers/auth-buttons'

export const SideBar = () => {
  return (
    <Popover>
      <div className='flex items-center gap-x-2 md:hidden'>
        <PopoverTrigger>
          <AlignJustify />
        </PopoverTrigger>
      </div>
      <PopoverContent className='relative p-0'>
        <ScrollArea className='h-72 p-5'>
          {siteConfig.mainNav
            .filter(item => item.group !== 'Site')
            .map(item => (
              <Link
                className='text-muted-foreground text-sm block font-medium hover:text-foreground py-2'
                key={item.title}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          <SignedOut>
            <AuthButtons className='flex-col mt-4' signInClass='border' />
          </SignedOut>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}
