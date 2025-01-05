'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { NextUIProvider } from '@nextui-org/system'
import { Slide, ToastContainer } from 'react-toastify'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'

export interface ProvidersProps {
    children: ReactNode
    themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
    const router = useRouter()

    return (
        <NextUIProvider locale='en-GB' navigate={router.push}>
            <NextThemesProvider {...themeProps}>
                {children}
            </NextThemesProvider>
            <ToastContainer limit={3} stacked={true} autoClose={5000} transition={Slide} hideProgressBar={true} />
        </NextUIProvider>
    )
}
