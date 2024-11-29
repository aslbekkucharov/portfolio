import '@/styles/editor.css'
import '@/styles/globals.css'

import clsx from 'clsx'
import { Suspense } from 'react'
import { Metadata, Viewport } from 'next'

import 'react-toastify/dist/ReactToastify.css'

import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { Providers } from '@/app/providers'
import { Metrika } from '@/components/analytics/y-metrika'

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
    },
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: 'black' },
        { media: '(prefers-color-scheme: light)', color: 'white' },
    ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en" className='min-h-screen'>
            <head />
            <body className={clsx('font-sans antialiased min-h-screen', fontSans.variable)}>
                <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
                    {children}
                </Providers>
                <Suspense>
                    <Metrika />
                </Suspense>
            </body>
        </html>
    )
}
