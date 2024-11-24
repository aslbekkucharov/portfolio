import clsx from 'clsx'
import { MouseEvent } from 'react'
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

    function handleButtonClick(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation()
    }

    return (
        props.list.map((post: Post) => (
            <Card key={post.id} isPressable as={Link} className="p-4 flex flex-col items-start gap-y-3 relative" href={'/posts/' + post.slug} shadow="sm">
                <Button variant='flat' size='sm' isIconOnly={true} className='ml-auto z-20 absolute right-4'>
                    <DotsVertical size={20} viewBox='0 0 24 24' />
                </Button>
                <span className="text-lg font-semibold text-left">
                    {post.title}
                </span>
                <span className="text-slate-400 text-left">
                    {post.shortDescription}
                </span>
            </Card>
        ))
    )
}

export default async function Posts() {
    const response = await fetcher<PaginatedResource<Post>>('/posts?username=aslbekkucharov', { cache: 'no-cache' }) || []
    const posts = response.data.items || []

    return (
        <div className={clsx({ 'grid md:grid-cols-2 gap-3': posts.length })}>
            {
                posts.length
                    ?
                    <>
                        <PostsList list={posts} />
                        <Card isPressable as={Link} href="/form/post" className='p-5 flex flex-col items-center justify-center'>
                            <Plus size={30} viewBox='0 0 24 24' />
                            <span className="text-md text-center">Create new</span>
                        </Card>
                    </>
                    :
                    <Empty>
                        <div className="mt-5">
                            <Button as={Link} href='/form/post' size='sm' variant='ghost' color='primary'>
                                <span className='font-medium'>Create post</span>
                            </Button >
                        </div >
                    </Empty >
            }
        </div >
    )
}
