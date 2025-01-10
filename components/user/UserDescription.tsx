import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button"
import { Pencil } from "@/components/icons"
import { getSession } from "@/actions/actions.server"

async function UserDescription() {

    const session = await getSession()

    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-700 dark:text-white font-semibold text-lg">About user</h3>
                {
                    session?.user ?
                        <Button as={Link} href="/form/about" isIconOnly={true} title="Edit about information" color="primary" variant='faded' size="sm">
                            <Pencil size={20} viewBox='0 0 24 24' />
                        </Button> : null
                }
            </div>

            <p className="text-slate-700 dark:text-slate-300">
                I&apos;m a frontend developer with a growing passion for backend technologies, currently diving deep into Node.js (Nest.js) to broaden my skillset. With hands-on experience in modern frameworks like React and Vue, I craft intuitive, high-quality user interfaces that prioritize both performance and design. Outside of coding, I&apos;m an avid mountain hiker and extreme sports enthusiast, which fuels my attention to detail and problem-solving mindset.
            </p>
            <p className="text-[#28a8e9] font-medium">
                I have been a member of the Telegram support team for more than 3 years.
                (Google → Telegram Support Force)
            </p>
        </div >
    )
}

export default UserDescription
