import Link from 'next/link'

import { siteConfig } from '~/config/site'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '~/components/ui/navigation-menu'

export const Menu = () => {
  const headerNavItems = siteConfig.mainNav
  return (
    <NavigationMenu className='hidden md:block'>
      <NavigationMenuList className='gap-9'>
        {headerNavItems
          .filter(item => item.forHeader)
          .map(item => (
            <NavigationMenuItem key={item.title}>
              <Link
                className='text-muted-foreground text-[15px] font-medium hover:text-foreground'
                href={item.href}
              >
                {item.title}
              </Link>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
