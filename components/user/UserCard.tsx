import clsx from "clsx"
import { Link } from "@nextui-org/link"
import { Image } from "@nextui-org/image"

import { DownloadIcon } from '@/components/icons/index'

type Props = {
    className?: string
}

function UserCard({ className }: Props) {
    return (
        <div className={clsx(className, "flex items-center flex-col sm:flex-row gap-5 sm:gap-8")}>
            <div className="flex items-center w-[100px] h-[100px] rounded-full overflow-hidden">
                <Image
                    isBlurred={true}
                    src="/images/aslbekkucharov.jpg"
                    className="scale-[2.5] relative -top-[18px] -right-[4px]"
                    alt="Aslbek Kucharov's photo against the background of Registan Square"
                />
            </div>
            <div className="flex flex-col items-center sm:items-start gap-1">
                <span className="flex items-start sm:items-center gap-2">
                    <span className="text-white  font-semibold sm:font-normal text-lg sm:text-xl leading-1">Aslbek Kucharov</span>
                    <span className="text-white font-semibold sm:font-normal">|</span>
                    <span className="text-white  font-semibold sm:font-normal text-lg sm:text-xl leading-1">Software Developer</span>
                </span>
                <span className="text-slate-300">@aslbekkucharov</span>
                <Link
                    showAnchorIcon
                    color="foreground"
                    href="/aslbekkucharov.pdf"
                    download='aslbekkucharov-resume'
                    className="inline-flex items-center gap-2"
                    anchorIcon={<DownloadIcon size={18} viewBox="0 0 22 22" />}
                >
                    <span>Download resume</span>
                </Link>
            </div>
        </div>
    )
}

export default UserCard