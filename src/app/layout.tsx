import { dark } from '@clerk/themes'
import NextTopLoader from 'nextjs-toploader'

import { Toaster } from '~/components/ui/sonner'

import { PostHogProvider } from './_analytics/provider'

import '~/styles/globals.css'

import { type Metadata } from 'next'
import { ClerkProvider, GoogleOneTap } from '@clerk/nextjs'

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#954AFC'
        },
        elements: {
          cardBox: 'shadow-none',
          card: 'bg-card shadow-none',
          navbar: 'bg-background',
          headerSubtitle: 'text-muted-foreground',
          headerTitle: 'text-foreground',
          socialButtonsBlockButton:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          formButtonPrimary:
            'bg-primary text-primary-foreground hover:bg-primary/90',
          dividerLine: 'bg-border',
          dividerText: 'text-muted-foreground',
          formFieldLabel: 'text-foreground',
          identityPreviewText: 'text-foreground',
          formFieldInput: 'bg-background border-input',
          footerAction: '!bg-transparent bg-card',
          footerActionText: 'text-foreground',
          footerActionLink: 'text-primary hover:text-primary/90'
        }
      }}
    >
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
            <GoogleOneTap
              cancelOnTapOutside={false}
              fedCmSupport={true}
              signInForceRedirectUrl='/'
              signUpForceRedirectUrl='/'
            />
            <Toaster />
            <TailwindIndicator />
          </body>
        </html>
      </PostHogProvider>
    </ClerkProvider>
  )
}
