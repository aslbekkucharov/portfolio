import { Image } from '@nextui-org/image'

import { techStacks } from '@/config/tech-stack'
import TechStack from '@/components/common/TechStack'

function UserTechnologyStack() {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="flex items-center gap-2">
                <span className="text-slate-700 dark:text-white font-semibold text-lg">
                    Professionally owned
                </span>
                <Image
                    alt="Thunder emoji by Apple"
                    height={20}
                    radius="none"
                    src="/images/emojis/thunder.png"
                    width={20}
                />
            </h4>
            <TechStack
                className="text-slate-700 dark:text-slate-400"
                technologies={techStacks}
            />
        </div>
    )
}

export default UserTechnologyStack
