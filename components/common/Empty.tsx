import { EmptyIcon } from "@/components/icons/index"

function Empty() {
    return (
        <div className="flex flex-col items-center">
            <EmptyIcon size={150} viewBox='0 0 200 200' className='text-slate-300' />
            <h4 className="font-medium text-lg text-slate-700 dark:text-white">There is not content :(</h4>
        </div>
    )
}

export default Empty