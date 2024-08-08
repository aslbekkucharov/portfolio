import clsx from 'clsx'
import { Image } from '@nextui-org/image'

import { workExpirience } from '@/config/experiences'
import ExperienceBlock from '@/components/ExperienceBlock'

type Props = {
    className?: string
}

function UserExperiences({ className }: Props) {
    return (
        <div className={clsx(className, 'flex flex-col gap-5')}>
            <h4 className="flex items-center gap-2">
                <span className="text-slate-700 dark:text-white font-semibold text-lg">Work Experience</span>
                <Image
                    width={20}
                    height={20}
                    radius="none"
                    alt="USSR emoji by Apple"
                    src="/images/emojis/ussr.png"
                />
            </h4>

            {workExpirience.map((experience, index) => (
                <ExperienceBlock key={index} experience={experience} />
            ))}
        </div>
    )
}

export default UserExperiences
