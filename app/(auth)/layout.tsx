import '@/styles/globals.css'

import { Metadata, Viewport } from 'next'

import { siteConfig } from '@/config/site'
import { Providers } from '@/app/providers'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
    }
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: 'black' },
        { media: '(prefers-color-scheme: light)', color: 'white' },
    ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeSwitcher className='z-20' />
            <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }} >
                <main className="relative flex flex-col h-screen">
                    {children}
                </main>
            </Providers>
        </>
    )
}
