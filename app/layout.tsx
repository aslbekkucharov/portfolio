import '@/styles/globals.css'

import clsx from 'clsx'
import { Suspense } from 'react'
import { Metadata, Viewport } from 'next'

import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { Providers } from '@/app/providers'
import Footer from '@/components/layout/Footer'
import UserCard from '@/components/user/UserCard'
import ContentTabs from '@/components/common/ContentTabs'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body className={clsx('font-sans antialiased', fontSans.variable)}>
                <Providers
                    themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
                >
                    <div className="relative flex flex-col h-screen sm:px-8 px-4">
                        <ThemeSwitcher />
                        <main className="container mx-auto max-w-screen-md w-full pt-16 flex-grow flex flex-col gap-10">
                            <UserCard />
                            <ContentTabs />
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
                <Suspense>
                    <Metrika />
                </Suspense>
            </body>
        </html>
    )
}
