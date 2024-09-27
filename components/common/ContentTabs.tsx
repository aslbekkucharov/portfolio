'use client'

import React from 'react'
import Link from 'next/link'
import { Tabs, Tab } from '@nextui-org/tabs'
import { usePathname } from 'next/navigation'

import { LoginIcon, NewsPaperIcon, PersonIcon } from '@/components/icons/index'

function ContentTabs() {
    let pathname = usePathname()

    const tabsClassnames = {
        cursor: 'w-full bg-slate-700 dark:bg-white',
        tabContent: 'group-data-[selected=true]:text-white',
        tab: 'max-w-fit px-0 h-12 data-[disabled=true]:text-white',
        tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
    }

    const tabsTitle = {
        about: (
            <div className="flex items-center space-x-2 text-slate-700 dark:text-white light:group-data-[selected=true]:text-slate-700">
                <PersonIcon className="text-slate-700 dark:text-white" size={20} viewBox="0 0 24 24" />
                <span className="font-medium leading-none">About</span>
            </div>
        ),
        posts: (
            <div className="flex items-center space-x-2 text-slate-700 dark:text-white light:group-data-[selected=true]:text-slate-700">
                <NewsPaperIcon size={20} viewBox="0 0 24 24" />
                <span className="font-medium leading-none">Posts</span>
            </div>
        ),
        auth: (
            <div className="flex items-center space-x-2 text-slate-700 dark:text-white light:group-data-[selected=true]:text-slate-700">
                <span className="font-medium leading-none">Sign in</span>
                <LoginIcon size={20} viewBox="0 0 512 512" />
            </div>
        ),
    }

    return (
        <div className="flex w-full flex-col">
            <Tabs classNames={tabsClassnames} selectedKey={pathname} variant="underlined">
                <Tab key="/" as={Link} href="/" title={tabsTitle.about} />
                <Tab key="/posts" as={Link} href="/posts" title={tabsTitle.posts} />
                <Tab key="/signin" as={Link} href="/signin" title={tabsTitle.auth} className='ml-auto' />
            </Tabs>
        </div>
    )
}

export default ContentTabs
