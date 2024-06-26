import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/assets/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aslbek Kucharov - Frontend developer',
  description: 'Portfolio website of Aslbek Kucharov, Frontend developer with 3+ years of experience',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='min-h-screen h-full'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
