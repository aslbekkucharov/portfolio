import { Chip } from "@nextui-org/chip"
import clsx from "clsx"

type Props = {
    className?: string
    technologies: string[]
}

function TechStack({ technologies, className }: Props) {
    return (
        <span className={clsx('flex flex-wrap gap-2 font-medium', className)}>
            {technologies.map((technology, i) => <span className='after:content-["•"] after:ml-2 last:after:hidden' key={i}>{technology}</span>)}
        </span>
    )
}

export default TechStack