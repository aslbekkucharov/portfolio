'use client'

import Link from 'next/link'
import { Tabs, Tab } from '@nextui-org/tabs'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { AuthResponse } from '@/types'
import { getSession } from '@/actions/actions.server'
import { LoginIcon, LogOut, NewsPaperIcon, PersonIcon } from '@/components/icons'

export default function ContentTabs() {
    let pathname = usePathname()
    const [session, setSession] = useState<AuthResponse | null>(null)

    useEffect(() => {
        getSession().then(res => {
            setSession(() => res)
        })
    }, [])

    const tabsClassnames = {
        cursor: 'w-full bg-slate-700 dark:bg-white',
        tabContent: 'group-data-[selected=true]:text-white',
        tab: 'max-w-fit px-0 h-12 data-[disabled=true]:text-white',
        tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
    }

    const tabTitles = [
        {
            key: '/',
            href: '/',
            name: 'about',
            node: (
                <div className="flex items-center space-x-2 text-slate-700 dark:text-white light:group-data-[selected=true]:text-slate-700">
                    <PersonIcon className="text-slate-700 dark:text-white" size={20} viewBox="0 0 24 24" />
                    <span className="font-medium leading-none">About</span>
                </div>
            )
        },
        {
            key: '/posts',
            href: '/posts',
            name: 'posts',
            node: (
                <div className="flex items-center space-x-2 text-slate-700 dark:text-white light:group-data-[selected=true]:text-slate-700">
                    <NewsPaperIcon size={20} viewBox="0 0 24 24" />
                    <span className="font-medium leading-none">Posts</span>
                </div>
            )
        },
        {
            key: '/auth',
            name: 'auth',
            className: 'ml-auto',
            href: session?.user ? '/auth/logout' : '/auth/signin',
            node: (
                session?.user
                    ?
                    <div className="flex items-center space-x-2 text-slate-700 dark:text-white light:group-data-[selected=true]:text-slate-700">
                        <span className="font-medium leading-none">Sign out</span>
                        <LogOut size={20} viewBox="0 0 1100 1100" />
                    </div>
                    :
                    <div className="flex items-center space-x-2 text-slate-700 dark:text-white light:group-data-[selected=true]:text-slate-700">
                        <span className="font-medium leading-none">Sign in</span>
                        <LoginIcon size={20} viewBox="0 0 512 512" />
                    </div>
            )
        }
    ]

    return (
        <div className="flex w-full flex-col">
            <Tabs classNames={tabsClassnames} selectedKey={pathname} variant="underlined">
                {tabTitles.map(title => <Tab key={title.key} as={Link} href={title.href} title={title.node} className={title.className} />)}
            </Tabs>
        </div>
    )
}