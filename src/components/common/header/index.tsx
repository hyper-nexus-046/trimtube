import { Wrapper } from '~/components/wrappers/wrapper'

import { AuthButtons } from './helpers/authButtons'
import { Menu } from './menu'
import { SideBar } from './sidebar'

export const Header = async () => {
  return (
    <div className='sticky top-0 z-50 py-4 drop-shadow-md border-b bg-background'>
      <Wrapper>
        <nav className='flex w-full items-center justify-between pt'>
          <h3 className='font-semibold lg:text-lg'>Trimtube</h3>
          <Menu />
          <div className='hidden md:block'>
            <AuthButtons />
          </div>
          <SideBar />
        </nav>
      </Wrapper>
    </div>
  )
}
