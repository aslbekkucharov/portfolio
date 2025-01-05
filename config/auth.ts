import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { fetcher } from "@/tools/api"
import { AuthResponse, ErrorResponse } from "@/types"

const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            credentials: {
                username: { type: 'text' },
                password: { type: 'password' }
            },

            async authorize(credentials) {
                const response = await fetcher<AuthResponse>('/auth/signin', {
                    method: 'POST',
                    body: JSON.stringify(credentials)
                })

                const data = response.data

                if (response.status !== 200) {
                    const res = response as unknown as ErrorResponse
                    return { error: res.data.message }
                }

                return data as any
                // FIXME: Find solution for User type error
            }
        })
    ],

    pages: {
        error: '/auth/signin',
        signIn: '/auth/signin'
    },

    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export const GET = handler
export const POST = handler