"use server"

import { cookies } from "next/headers";

export async function setCookie(token: string) {
    const cookiesStore = cookies()

    cookiesStore.set('token', token, {
        httpOnly: true
    })
}