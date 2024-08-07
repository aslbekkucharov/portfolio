import { Link } from "@nextui-org/link"

import { IWorkExperience } from "@/types"
import TechStack from "@/components/common/TechStack"
import { LinkOutlineIcon } from "@/components/icons/index"

type Props = {
    experience: IWorkExperience
}

function ExperienceBlock({ experience }: Props) {
    return (
        <div className='grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-0'>
            <span className='text-slate-300'>{experience.period}</span>
            <div className='flex flex-col gap-3'>
                <Link isExternal href={experience.company_link} showAnchorIcon anchorIcon={<LinkOutlineIcon size={24} className="text-white" viewBox="0 0 22 22" />} className='inline-flex items-center gap-2 group'>
                    <span className='group-hover:underline text-white'>{experience.company}</span>
                </Link>
                <p className='text-slate-300'>{experience.responsibility}</p>
                <TechStack technologies={experience.tech_stack} className='text-slate-600' />
            </div>
        </div>
    )
}

export default ExperienceBlock