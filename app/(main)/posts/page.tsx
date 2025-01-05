import clsx from 'clsx'
import { Card } from '@nextui-org/card'
import { Link } from '@nextui-org/link'

import { fetcher } from '@/tools/api'
import { Button } from '@nextui-org/button'
import Empty from '@/components/common/Empty'
import { PaginatedResource, Post } from '@/types'
import { DotsVertical, Plus } from '@/components/icons'

type Props = {
    list: Post[]
}

function PostsList(props: Props) {
    return (
        <>
            {
                props.list.map((post: Post) => (
                    <Link key={post.id} className="p-4 flex flex-col items-start gap-y-3 relative border border-slate-150 dark:border-theme-dark-400 dark:hover:border-theme-dark-50 hover:border-slate-600 rounded-md transition-all duration-200" href={'/posts/' + post.slug}>
                        <span className="text-lg font-semibold text-left">
                            {post.title}
                        </span>
                        <span className="text-slate-400 text-left">
                            {post.shortDescription}
                        </span>
                    </Link>
                ))
            }
            <Link href="/form/post" className='p-5 flex flex-col items-center justify-center border border-slate-150 dark:border-theme-dark-400 dark:hover:border-theme-dark-50 hover:border-slate-400 rounded-md transition-colors' >
                <Plus size={30} viewBox='0 0 24 24' />
                <span className="text-md text-center">Create new</span>
            </Link>
        </>
    )
}

function PostEmptyContent() {
    return (
        <Empty>
            <div className="mt-5">
                <Button as={Link} href='/form/post' size='sm' variant='ghost' color='primary'>
                    <span className='font-medium'>Create post</span>
                </Button >
            </div >
        </Empty>
    )
}

export default async function Posts() {
    const response = await fetcher<PaginatedResource<Post>>('/posts?username=aslbekkucharov', { cache: 'no-cache' }) || []
    const posts = response.data.items || []

    return (
        <div className={clsx({ 'grid md:grid-cols-2 gap-3': posts.length })}>
            {posts.length ? <PostsList list={posts} /> : <PostEmptyContent />}
        </div >
    )
}
