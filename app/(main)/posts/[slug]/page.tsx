import React from 'react'
import { Metadata } from 'next'

import { Post } from '@/types'
import { fetcher } from '@/tools/api'

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.slug
    const response = await fetcher<Post>(`/posts/${slug}`)
    const post: Post = response.data

    return {
        title: post.title,
        description: post.shortDescription,
    }
}

export default async function PostSingle({ params }: Props) {
    const response = await fetcher<Post>(`/posts/${params.slug}`, { cache: 'no-cache' })
    const post = response.data

    return (
        <div className="flex flex-col">
            <h1 className="mb-4 font-medium text-3xl">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-base" />
        </div>
    )
}
