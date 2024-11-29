import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number
}

export type IWorkExperience = {
    period: string
    company: string
    tech_stack: string[]
    company_link: string
    responsibility: string
}

export type Post = {
    id: number
    slug: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    shortDescription: string
}

export interface User {
    id: number
    email: string
    fullname: string
    username: string
}

export interface PaginatedResource<T> {
    items: T[],
    size: number
    page: number
    total: number
}

export type AuthResponse = {
    user: User
    tokens: {
        access: string
    }
}