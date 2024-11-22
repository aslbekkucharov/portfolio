import { Skeleton } from '@nextui-org/skeleton'

export default function PostSingleSkeleton() {
    return (
        <div className="flex flex-col">
            <Skeleton className="mb-8 h-8 w-full rounded-large" />
            <div className="flex flex-wrap gap-5">
                <Skeleton className="h-4 w-3/5 rounded-large" />
                <Skeleton className="h-4 w-1/5 rounded-large" />
                <Skeleton className="h-4 w-1/5 rounded-large" />
                <Skeleton className="h-4 w-3/5 rounded-large" />
                <Skeleton className="h-4 w-24 rounded-large" />
                <Skeleton className="h-40 w-full rounded-large" />
                <Skeleton className="h-4 w-3/6 rounded-large" />
                <Skeleton className="h-4 w-72 rounded-large" />
                <Skeleton className="h-4 w-1/6 rounded-large" />
                <Skeleton className="h-4 w-1/2 rounded-large" />
                <Skeleton className="h-4 w-52 rounded-large" />
            </div>
        </div>
    )
}
