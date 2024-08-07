import { Link } from "@nextui-org/link"
import { GithubIcon, LinkedInIcon, TelegramIcon } from "@/components/icons/index"
import { siteConfig } from "@/config/site"

function Socials() {
    return (
        <div className="flex flex-col items-center gap-5">
            <h6 className='text-white'>Reach me on:</h6>

            <div className="flex items-center justify-center gap-4">
                <Link href={siteConfig.links.telegram} isExternal className='hover:opacity-60'>
                    <TelegramIcon size={30} viewBox="0 0 24 24" className="text-white" />
                </Link>

                <Link href={siteConfig.links.linkedin} isExternal className='hover:opacity-60'>
                    <LinkedInIcon size={30} viewBox="0 0 34 34" className="text-white" />
                </Link>

                <Link href={siteConfig.links.github} isExternal className='hover:opacity-60'>
                    <GithubIcon size={30} viewBox="0 0 15 15" className="text-white" />
                </Link>
            </div>
        </div>
    )
}

export default Socials