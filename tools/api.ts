'use server'

import { getSession } from '@/actions/actions.server'
import { FetcherResponse } from '@/types'

async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<FetcherResponse<T>> {

    const session = await getSession()

    const fullEndpoint = process.env.NEXT_PUBLIC_API_BASE + endpoint
    const response = await fetch(fullEndpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.tokens.access}`
        },
        ...options
    })

    const body = await response.json()

    console.log(body);
    

    const result = {
        data: body,
        status: response.status
    }

    return result
}

export { fetcher }
