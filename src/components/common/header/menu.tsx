'use client'

import * as React from 'react'
import Link from 'next/link'

import { siteConfig } from '~/config/site'
import { cn } from '~/lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '~/components/ui/navigation-menu'

export const Menu = () => {
  const headerNavItems = siteConfig.mainNav
  return (
    <NavigationMenu className='hidden md:block'>
      <NavigationMenuList className='gap-6'>
        {headerNavItems
          .filter(item => item.group !== 'Site')
          .map(item => (
            <NavigationMenuItem key={item.title}>
              <Link
                className='text-muted-foreground text-[15px] font-medium hover:text-foreground'
                href={item.href}
              >
                <NavigationMenuLink className={cn()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
