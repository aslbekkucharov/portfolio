import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import { redirect } from 'next/navigation'

import { AuthResponse, User } from '@/types'

const KEY = new TextEncoder().encode(process.env.JOSE_KEY)

const cookie = {
    name: 'session',
    duration: 24 * 60 * 60 * 1000,
    options: { httpOnly: true, secure: false, path: '/' }
}

export interface EcnryptDecryptPayload extends AuthResponse {
    expires: Date | number
    [key: string]: string | number | boolean | object | undefined
}

export async function encrypt(payload: EcnryptDecryptPayload): Promise<string> {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1day')
        .sign(KEY)
}

export async function decrypt(session: string): Promise<EcnryptDecryptPayload | null> {
    try {

        const { payload } = await jwtVerify<EcnryptDecryptPayload>(session, KEY, { algorithms: ['HS256'] })

        return payload

    } catch (error) {
        return null
    }
}

export async function createSession(payload: AuthResponse) {
    const expires = new Date(Date.now() + cookie.duration)
    const session = await encrypt({ ...payload, expires })

    cookies().set(cookie.name, session, { ...cookie.options, expires })
}

export async function verifySession() {
    const cookie = cookies().get(cookies.name)?.value
    const session = await decrypt(cookie!) // FIXME: fix type error

    if (!session?.user) {
        redirect('/auth/login')
    }

    return session
}

export async function deleteSession() {
    cookies().delete(cookie.name)
    redirect('/')
}