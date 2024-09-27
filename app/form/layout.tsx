import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"

export const metadata: Metadata = {
    icons: { icon: '/favicon.ico' },
    description: siteConfig.description,
    title: { default: siteConfig.name, template: `%s` }
}

export default function FormLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeSwitcher />
            <main className="max-w-screen-md w-full mx-auto flex-grow">
                {children}
            </main>
        </>
    )
}