'use client'

import React from 'react'
import { Tabs, Tab } from '@nextui-org/tabs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Chip } from '@nextui-org/chip'

import { NewsPaperIcon, PersonIcon } from '@/components/icons/index'

function ContentTabs() {
    const pathname = usePathname()

    const tabsClassnames = {
        tabList:
            'gap-6 w-full relative rounded-none p-0 border-b border-divider',
        cursor: 'w-full bg-white',
        tab: 'max-w-fit px-0 h-12',
        tabContent: 'group-data-[selected=true]:text-white',
    }

    const tabsTitle = {
        about: (
            <div className="flex items-center space-x-2">
                <PersonIcon size={20} viewBox="0 0 24 22" />
                <span className="font-medium">About</span>
            </div>
        ),
        posts: (
            <div className="flex items-center space-x-2">
                <NewsPaperIcon size={20} viewBox="0 0 24 24" />
                <span className="font-medium">Posts</span>
                <Chip size="sm" variant="faded">
                    Soon
                </Chip>
            </div>
        ),
    }

    return (
        <div className="flex w-full flex-col">
            <Tabs
                classNames={tabsClassnames}
                selectedKey={pathname}
                variant="underlined"
            >
                <Tab key="/" as={Link} href="/" title={tabsTitle.about} />
                <Tab
                    key="/posts"
                    isDisabled
                    as={Link}
                    href="/posts"
                    title={tabsTitle.posts}
                />
            </Tabs>
        </div>
    )
}

export default ContentTabs
