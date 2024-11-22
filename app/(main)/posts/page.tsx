import clsx from 'clsx'
import { Card } from '@nextui-org/card'
import { Link } from '@nextui-org/link'

import { PaginatedResource, Post } from '@/types'
import { fetcher } from '@/tools/api'
import Empty from '@/components/common/Empty'

type PartialPost = Omit<Post, 'content'>

export default async function Posts() {
    const data: PaginatedResource<PartialPost> = (await fetcher('/posts?username=aslbekkucharovv', {
        cache: 'no-cache'
    })) || []

    return (
        <div className={clsx({ 'grid md:grid-cols-2 gap-3': data.items.length })}>
            {data.items.length ? (
                data.items?.map((post: PartialPost) => (
                    <Card
                        key={post.id}
                        isPressable
                        as={Link}
                        className="p-4 flex flex-col items-start gap-y-3"
                        href={'/posts/' + post.slug}
                        shadow="sm"
                    >
                        <span className="text-lg font-semibold text-left">
                            {post.title}
                        </span>
                        <span className="text-slate-400 text-left">
                            {post.shortDescription}
                        </span>
                    </Card>
                ))
            ) : (
                <Empty />
            )}
        </div>
    )
}
