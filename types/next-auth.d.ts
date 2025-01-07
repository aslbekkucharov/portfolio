import { JWT } from 'next-auth/jwt'
import { DefaultSession, DefaultUser } from 'next-auth'

import { AuthResponse, User as OurUser } from '@/types'

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: User
    }

    interface User extends Omit<DefaultUser, 'id'> {
        id: number
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user: User
        tokens: AuthResponse['tokens']
    }
}