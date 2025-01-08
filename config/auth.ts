import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { fetcher } from "@/tools/api"
import { AuthResponse } from "@/types"

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

                if (response.status !== 201) {
                    return null
                }

                return { ...data.user, id: String(data.user) }
            }
        })
    ],

    pages: {
        error: '/auth/signin',
        signIn: '/auth/signin'
    },

    callbacks: {
        jwt({ token, user }) {
            if (user) { }

            return token
        }
    },

    secret: process.env.NEXTAUTH_SECRET
}

export const { handlers, auth } = NextAuth(authOptions)