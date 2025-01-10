'use server'

import { cookies } from "next/headers"

import { fetcher } from "@/tools/api"
import { createSession, decrypt } from "@/lib/session"
import { AuthResponse, ErrorResponse, FetcherResponse, SignInPayload, SignUpPayload, User } from "@/types"

export async function signIn(payload: SignInPayload): Promise<FetcherResponse<AuthResponse | ErrorResponse>> {
    const response = await fetcher<AuthResponse | ErrorResponse>('/auth/signin', {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    if (response.status === 200 || response.status === 201) {
        await createSession(response.data as AuthResponse)
    }

    return response
}

export async function signUp(payload: SignUpPayload): Promise<FetcherResponse<AuthResponse | ErrorResponse>> {
    const response = await fetcher<AuthResponse | ErrorResponse>('/auth/signup', {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    if (response.status === 201) {
        await createSession(response.data as AuthResponse)
    }

    return response
}

export async function getSession(): Promise<AuthResponse | null> {
    const cookie = cookies().get('session')?.value
    const session = await decrypt(cookie!) // FIXME: Type error

    if (session) {
        return {
            user: session.user,
            tokens: session.tokens
        }
    }

    return null
}