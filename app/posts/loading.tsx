import { Skeleton } from '@nextui-org/skeleton'

function PostsPageSkeleton() {
    return (
        <div className="grid md:grid-cols-2 gap-3">
            {Array.from({ length: 6 }, (x, i) => i).map((i) => (
                <Skeleton key={i} className="h-60 w-full rounded-large" />
            ))}
        </div>
    )
}

export default PostsPageSkeleton
