import { SignedIn, SignedOut } from '@clerk/nextjs'

import { Wrapper } from '~/components/wrappers/wrapper'

import { AuthButtons } from './helpers/auth-buttons'
import { UserDropDown } from './helpers/user-dropdown'
import { Logo } from './logo'
import { Menu } from './menu'
import { SideBar } from './sidebar'

export const Header = () => {
  return (
    <div className='sticky top-0 z-50 py-4 border-b bg-background'>
      <Wrapper>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center gap-16'>
            <Logo />
            <Menu />
          </div>
          <div className='hidden md:flex items-center'>
            <SignedOut>
              <AuthButtons />
            </SignedOut>
            <SignedIn>
              <UserDropDown />
            </SignedIn>
          </div>
          <SideBar />
        </nav>
      </Wrapper>
    </div>
  )
}
