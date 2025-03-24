import { Wrapper } from '~/components/wrappers/wrapper'

import { Logo } from '../logo'
import { AuthButtons } from './helpers/auth-buttons'
import { Menu } from './menu'
import { SideBar } from './sidebar'

export const Header = async () => {
  return (
    <div className='sticky top-0 z-50 py-4 border-b bg-background'>
      <Wrapper>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center gap-16'>
            <Logo />
            <Menu />
          </div>
          <div className='hidden md:block'>
            <AuthButtons />
          </div>
          <SideBar />
        </nav>
      </Wrapper>
    </div>
  )
}
