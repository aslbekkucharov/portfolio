import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'

import { IWorkExperience } from '@/types'
import TechStack from '@/components/common/TechStack'
import { LinkOutlineIcon, Pencil } from '@/components/icons/index'

type Props = {
    experience: IWorkExperience
}

function ExperienceBlock({ experience }: Props) {
    return (
        <div className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-0 first:mt-0 last:mb-0 my-5">
            <span className="text-slate-700 dark:text-slate-300">{experience.period}</span>
            <div className="flex flex-col justify-start gap-3">
                <div className='flex items-center justify-between gap-4'>
                    <Link isExternal={true} showAnchorIcon={true} anchorIcon={<LinkOutlineIcon className="text-slate-700 dark:text-white hidden xs:inline-block" size={24} viewBox="0 0 22 22" />} className="inline-flex items-center gap-2 group" href={experience.company_link}>
                        <span className="group-hover:underline font-medium text-slate-700 dark:text-white">{experience.company}</span>
                    </Link>
                    <Button as={Link} href='/form/experience' color='primary' variant='faded' title='Edit experience' isIconOnly={true} size='sm'>
                        <Pencil size={20} viewBox='0 0 24 24' />
                    </Button>
                </div>
                <div className="text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: experience.responsibility }}></div>
                <TechStack className="text-slate-400 dark:text-slate-600" technologies={experience.tech_stack} />
            </div>
        </div>
    )
}

export default ExperienceBlock
