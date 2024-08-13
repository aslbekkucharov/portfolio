import React from 'react'

import { Post } from '@/types'
import { fetcher } from '@/tools/api'

export default async function PostSingle({ params }: { params: { id: string } }) {
    const post: Post = await fetcher(`/posts/${params.id}`, { cache: 'no-cache' })

    return (
        <div className='flex flex-col'>
            <h1 className='mb-4 font-medium text-3xl'>{post.title}</h1>
            <div className='text-base' dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    )
}