import { cookies } from "next/headers"
import { NextResponse, type NextRequest } from "next/server"
import { decrypt } from "@/lib/session"

export default async function middleware(request: NextRequest) {
    const cookie = cookies().get('session')?.value
    const session = await decrypt(cookie!) // FIXME: Fix type error

    if (!session?.user && !request.nextUrl.pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL('/auth/signin', request.url))
    }

    if (session?.user && request.nextUrl.pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/form/:path*', '/auth/:path*']
}