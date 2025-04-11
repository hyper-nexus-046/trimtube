import {
  Code,
  FilePlus,
  Headset,
  LayoutDashboard,
  Search,
  SquarePlus,
  UserCheck,
  UsersRound
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from '~/components/ui/sidebar'
import { Logo } from '~/components/common/header/logo'
import { NavAccount } from '~/components/dashboard/sidebar/nav-account'
import { NavGeneral } from '~/components/dashboard/sidebar/nav-general'
import { NavInternal } from '~/components/dashboard/sidebar/nav-internal'
import { NavUser } from '~/components/dashboard/sidebar/nav-user'

const data = {
  user: {
    name: 'Malay khan',
    email: 'malay@gmail.com',
    avatar: '/avatars/shadcn.png'
  },
  navGeneral: [
    {
      title: 'Parsers',
      url: '#',
      icon: LayoutDashboard
    },
    {
      title: 'Find Templates',
      url: '#',
      icon: Search
    },
    {
      title: 'New Template',
      url: '#',
      icon: FilePlus
    }
  ],
  internal: [
    {
      title: 'Add-ons',
      url: '#',
      icon: SquarePlus
    },
    {
      title: 'API',
      url: '#',
      icon: Code
    },
    {
      title: 'Connected Accounts',
      url: '#',
      icon: UsersRound
    }
  ],
  account: [
    {
      title: 'Subscription',
      url: '#',
      icon: UserCheck
    },
    {
      title: 'Support',
      url: '#',
      icon: Headset
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader className='pt-3 bg-black'>
        <Logo />
      </SidebarHeader>
      <SidebarContent className='bg-black'>
        <NavGeneral items={data.navGeneral} />
        <NavInternal items={data.internal} />
        <NavAccount items={data.account} />
      </SidebarContent>
      <SidebarFooter className='bg-black'>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
