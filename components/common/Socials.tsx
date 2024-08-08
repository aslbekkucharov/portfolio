import { Link } from '@nextui-org/link'

import {
    GithubIcon,
    LinkedInIcon,
    TelegramIcon,
} from '@/components/icons/index'
import { siteConfig } from '@/config/site'

function Socials() {
    return (
        <div className="flex flex-col items-center gap-5">
            <h6 className="text-slate-700 dark:text-white">Reach me on:</h6>

            <div className="flex items-center justify-center gap-4">
                <Link isExternal className="hover:opacity-60" href={siteConfig.links.telegram}>
                    <TelegramIcon className="text-slate-700 dark:text-white" size={30} viewBox="0 0 24 24" />
                </Link>

                <Link isExternal className="hover:opacity-60" href={siteConfig.links.linkedin}>
                    <LinkedInIcon className="text-slate-700 dark:text-white" size={30} viewBox="0 0 34 34" />
                </Link>

                <Link isExternal className="hover:opacity-60" href={siteConfig.links.github}>
                    <GithubIcon className="text-slate-700 dark:text-white" size={30} viewBox="0 0 15 15" />
                </Link>
            </div>
        </div>
    )
}

export default Socials
