import clsx from 'clsx'
import { Link } from '@nextui-org/link'
import { Image } from '@nextui-org/image'

import { Plus } from '@/components/icons'
import { workExpirience } from '@/config/experiences'
import ExperienceBlock from '@/components/ExperienceBlock'
import { Button } from '@nextui-org/button'

type Props = {
    className?: string
}

function UserExperiences({ className }: Props) {
    return (
        <div className={clsx(className, 'flex flex-col gap-5')}>
            <div className="flex items-center justify-between">
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

                <Button as={Link} href="/form/experience" size='sm' color='primary' variant='faded' isIconOnly={true}>
                    <Plus size={20} viewBox='0 0 24 24' />
                </Button>
            </div>

            <div className='mt-5'>
                {workExpirience.map((experience, index) => (
                    <ExperienceBlock key={index} experience={experience} />
                ))}
            </div>
        </div>
    )
}

export default UserExperiences
