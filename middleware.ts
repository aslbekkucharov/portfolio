import { cookies } from "next/headers"
import { NextResponse, type NextRequest } from "next/server"

export default function middleware(request: NextRequest) {
    const cookiesStore = cookies()
    const token = cookiesStore.get('token')

    if (!token) {
        return NextResponse.redirect(new URL('/auth/signin', request.url))
    }

    if (token && request.nextUrl.pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/form/:path*', '/auth/:path*']
}