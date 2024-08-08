import { Link } from '@nextui-org/link'
import { Button } from "@nextui-org/button"
import { HomeIcon } from '@/components/icons'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-3xl mb-2'>Not Found - 404</h2>
            <p className='text-lg text-slate-400 mb-3'>Could not find requested resource</p>
            <Button size='lg' radius='full' startContent={<HomeIcon size={26} />} as={Link} href="/">Go home</Button>
        </div>
    )
}