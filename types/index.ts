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
    title: string
    excerpt: string
    content: string
    isActive: boolean
}
