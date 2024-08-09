import { Post } from '@/types'
import { fetcher } from '@/tools/api'
import { Card } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import Empty from '@/components/common/Empty'
import clsx from 'clsx'

export default async function Posts() {

    // const posts = await fetcher('/posts', { cache: 'no-cache' }) || []
    const posts: Post[] = []

    return (
        <div className={clsx({ 'grid md:grid-cols-2 gap-3': posts.length })}>
            {
                posts.length ? posts?.map((post: Post) => (
                    <Card shadow="sm" isPressable key={post.id} as={Link} className="p-4 flex flex-col items-start gap-y-3" href={'/posts' + post.id}>
                        <span className="text-lg font-semibold text-left">{post.title}</span>
                        <span className="text-slate-400 text-left">{post.excerpt}</span>
                    </Card>
                )) : <Empty />
            }
        </div>
    )
}
