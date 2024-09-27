import React from 'react'
import { Metadata } from 'next'

import { Post } from '@/types'
import { fetcher } from '@/tools/api'

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = params.id
    const post: Post = await fetcher(`/posts/${id}`)

    return {
        title: post.title,
        description: post.excerpt,
    }
}

export default async function PostSingle({ params }: Props) {
    const post: Post = await fetcher(`/posts/${params.id}`, {
        cache: 'no-cache',
    })

    return (
        <div className="flex flex-col">
            <h1 className="mb-4 font-medium text-3xl">{post.title}</h1>
            <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-base"
            />
        </div>
    )
}
