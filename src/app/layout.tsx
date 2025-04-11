import NextTopLoader from 'nextjs-toploader'

import { Toaster } from '~/components/ui/sonner'

import { PostHogProvider } from './_analytics/provider'

import '~/styles/globals.css'

import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

import { siteConfig } from '~/config/site'
import { fontInter, fontMono } from '~/lib/fonts'
import { cn } from '~/lib/utils'
import { TailwindIndicator } from '~/components/ui/tailwind-indicator'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({
  children,
  modal
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <PostHogProvider>
        <html
          lang='en'
          className={cn(
            'font-inter relative antialiased',
            fontInter.className,
            fontInter.variable,
            fontMono.variable,
            'dark'
          )}
        >
          <body>
            <NextTopLoader
              showSpinner={false}
              height={3}
              color='#954AFC'
              easing='ease-in'
              crawl
              speed={1.5}
              crawlSpeed={1}
            />
            {children}
            {modal}
            <Toaster />
            <TailwindIndicator />
          </body>
        </html>
      </PostHogProvider>
    </ClerkProvider>
  )
}
