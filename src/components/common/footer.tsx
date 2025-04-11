import Link from 'next/link'

import { siteConfig } from '~/config/site'
import { Logo } from '~/components/common/header/logo'

import { Wrapper } from '../wrappers'

export const Footer = () => {
  const groupedData: Record<string, { title: string; href: string }[]> =
    siteConfig.mainNav.reduce<
      Record<string, { title: string; href: string }[]>
    >((acc, item) => {
      if (item.type !== 'dropdown') {
        const group = item.group
        acc[group] ??= []
        acc[group].push({ title: item.title, href: item.href || '#' })
      }
      return acc
    }, {})

  return (
    <section className='border-t'>
      <Wrapper className='relative py-content-lg'>
        <div className="absolute inset-0 z-[-1] mx-auto w-[65%] bg-[url('/common/faq-overlay-elipse.svg')] bg-cover bg-center opacity-25 blur-2xl" />
        <footer className='grid gap-7 md:grid-cols-[3fr_1fr_1fr_1fr]'>
          <div>
            <Logo />
            <p className='pt-3 text-sm font-light lg:w-3/5'>
              Your trusted partner in AI solutions, creating smarter systems for
              smarter businesses.
            </p>
          </div>
          {Object.entries(groupedData).map(([group, items]) => (
            <div key={group}>
              <h5 className='text-sm font-medium'>{group}</h5>
              <ul className='mt-3 space-y-2'>
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className='block text-[13px] text-muted-foreground hover:text-foreground'
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </footer>
      </Wrapper>
      <div className='border-t'>
        <Wrapper className='py-content-sm'>
          <span className='text-sm text-secondary-foreground'>
            © {new Date().getFullYear()} Trimtube 11376, 169 Madison Ave, New
            York, NY 10016. All rights reserved.
          </span>
        </Wrapper>
      </div>
    </section>
  )
}
