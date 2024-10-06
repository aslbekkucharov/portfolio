import { ReactElement } from "react"

interface Props {
    children?: ReactElement
}

export default function Empty({ children }: Props) {
    return (
        <div className="flex flex-col items-center">
            <h4 className="md:max-w-[50%] text-center text-lg text-slate-600 dark:text-white">
                There are no posts here yet, come back tomorrow, maybe there will be some ಠಿ_ಠ
            </h4>
            {children}
        </div>
    )
}