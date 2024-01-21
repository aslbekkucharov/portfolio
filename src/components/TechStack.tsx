import clsx from 'clsx'

interface Props {
    className?: string
    technologies: string[]
}

export function TechStack({ className, technologies }: Props) {
    return (
        <span className={clsx('flex flex-wrap gap-2 font-medium text-sm', className)}>
            {technologies.map((technology, i) => {
                return (<span className='after:content-["•"] after:ml-2 last:after:hidden' key={i}>{technology}</span>)
            })}
        </span>
    )
}