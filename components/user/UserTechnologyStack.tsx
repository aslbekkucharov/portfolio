import { Image } from "@nextui-org/image"
import { techStacks } from "@/config/tech-stack"
import TechStack from "@/components/common/TechStack"

function UserTechnologyStack() {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="flex items-center gap-2">
                <span className="font-semibold text-lg">Professionally owned</span>
                <Image src="/images/emojis/thunder.png" radius='none' width={20} height={20} alt="Thunder emoji by Apple" />
            </h4>
            <TechStack technologies={techStacks} />
        </div>
    )
}

export default UserTechnologyStack