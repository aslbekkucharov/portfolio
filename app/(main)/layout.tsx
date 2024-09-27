import '@/styles/globals.css'

import { Metadata } from 'next'
import { Suspense } from 'react'

import { siteConfig } from '@/config/site'
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

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="relative flex flex-col h-screen sm:px-8 px-4">
                <ThemeSwitcher />
                <section className="container mx-auto max-w-screen-md w-full pt-16 flex-grow flex flex-col gap-10">
                    <UserCard />
                    <ContentTabs />
                    {children}
                </section>
                <Footer />
            </main>
            <Suspense>
                <Metrika />
            </Suspense>
        </>
    )
}
