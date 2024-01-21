import { IWorkExperience } from '@/types'
import { TechStack } from '@/components/TechStack'
import IonLinkOutline from '@/components/icons/IonLinkOutline'

interface Props {
    experience: IWorkExperience
}

export function WorkExperience({ experience }: Props) {
    return (
        <div className='grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-0'>
            <span className='text-slate-400 text-sm'>{experience.period}</span>
            <div className='flex flex-col gap-2'>
                <a href={experience.company_link} className='inline-flex items-center gap-2 group'>
                    <span className='group-hover:underline text-white text-sm'>{experience.company}</span>
                    <IonLinkOutline className="text-white w-[20px] h-[18px] mt-1" />
                </a>
                <p className='text-slate-400 text-sm'>{experience.responsibility}</p>
                <TechStack technologies={experience.tech_stack} className='text-slate-600' />
            </div>
        </div>
    )
}