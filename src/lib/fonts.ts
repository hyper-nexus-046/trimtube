import {
  Inter as FontInter,
  JetBrains_Mono as FontMono
} from 'next/font/google'

export const fontInter = FontInter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
})
