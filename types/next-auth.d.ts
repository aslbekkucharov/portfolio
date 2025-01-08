import { JWT } from 'next-auth/jwt'
import NextAuth, { DefaultSession, DefaultUser, User } from 'next-auth'

import type { AuthResponse, User as UserStructure } from '@/types'

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: UserStructure
    }

    interface User extends UserStructure { }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user: UserStructure
        tokens: AuthResponse['tokens']
    }
}