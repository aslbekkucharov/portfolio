import NextAuth, { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { fetcher } from "@/tools/api"
import { AuthResponse, ErrorResponse } from "@/types"

const authOptions: NextAuthConfig = {
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
                    return null
                }

                return {
                    id: data.user.id,
                    email: data.user.email,
                    username: data.user.username,
                    fullname: data.user.fullname,
                }
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