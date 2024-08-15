import clsx from 'clsx'

type Props = {
    className?: string
    technologies: string[]
}

function TechStack({ technologies, className }: Props) {
    return (
        <span className={clsx('flex flex-wrap gap-2', className)}>
            {technologies.map((technology, i) => (
                <span
                    key={i}
                    className='after:content-["•"] after:ml-2 last:after:hidden'
                >
                    {technology}
                </span>
            ))}
        </span>
    )
}

export default TechStack
