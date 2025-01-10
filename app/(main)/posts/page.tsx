import clsx from 'clsx'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'

import { fetcher } from '@/tools/api'
import { Plus } from '@/components/icons'
import Empty from '@/components/common/Empty'
import { PaginatedResource, Post } from '@/types'
import { getSession } from '@/actions/actions.server'

type Props = {
    list: Post[]
}

async function PostsList(props: Props) {
    const session = await getSession()

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
            {
                session?.user
                    ?
                    <Link href="/form/post" className='p-5 flex flex-col items-center justify-center border border-slate-150 dark:border-theme-dark-400 dark:hover:border-theme-dark-50 hover:border-slate-400 rounded-md transition-colors' >
                        <Plus size={30} viewBox='0 0 24 24' />
                        <span className="text-md text-center">Create new</span>
                    </Link>
                    :
                    null
            }
        </>
    )
}

async function PostEmptyContent() {

    const session = await getSession()

    return (
        <Empty>
            <div className="mt-5">
                {
                    session?.user
                        ?
                        <Button as={Link} href='/form/post' size='sm' variant='ghost' color='primary'>
                            <span className='font-medium'>Create post</span>
                        </Button >
                        :
                        null
                }
            </div >
        </Empty>
    )
}

export default async function Posts() {
    const session = await getSession()
    const response = await fetcher<PaginatedResource<Post>>(`/posts?username=${session?.user.username}`, { cache: 'no-cache' }) || []
    const posts = response.data.items || []

    return (
        <div className={clsx({ 'grid md:grid-cols-2 gap-3': posts.length })}>
            {posts.length ? <PostsList list={posts} /> : <PostEmptyContent />}
        </div >
    )
}
