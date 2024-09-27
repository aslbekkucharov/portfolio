'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useIsSSR } from '@react-aria/ssr'
import { SwitchProps, useSwitch } from '@nextui-org/switch'
import { VisuallyHidden } from '@react-aria/visually-hidden'

import { SunIcon, MoonIcon } from '@/components/icons/index'

export interface ThemeSwitchProps {
    className?: string
    classNames?: SwitchProps['classNames']
}

export function ThemeSwitcher({ className, classNames }: ThemeSwitchProps) {
    const isSSR = useIsSSR()
    const { theme, setTheme } = useTheme()

    const onChange = () =>
        theme === 'light' ? setTheme('dark') : setTheme('light')

    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch({ onChange, isSelected: theme === 'light' || isSSR })

    return (
        <Component
            {...getBaseProps({
                className: clsx(
                    'px-px transition-opacity hover:opacity-80 cursor-pointer z-10 fixed bottom-[8%] right-[4%]',
                    className,
                    classNames?.base,
                ),
            })}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <div
                {...getWrapperProps()}
                className={slots.wrapper({
                    class: clsx(
                        classNames?.wrapper,
                        'mr-0 inline-flex items-center justify-center w-10 h-10 rounded-full !bg-slate-700 dark:bg-slate-800',
                    ),
                })}
            >
                {!isSelected || isSSR ? (
                    <SunIcon className="text-white" size={24} />
                ) : (
                    <MoonIcon size={22} viewBox="0 0 18 16" />
                )}
            </div>
        </Component>
    )
}
