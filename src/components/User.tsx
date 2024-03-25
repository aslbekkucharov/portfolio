import Image from 'next/image'
import IonDocumentText from '@/components/icons/IonDocumentText'

export function User() {
    return (
        <div className="flex items-center gap-5 sm:gap-8">
            <div className="flex items-center w-[100px] h-[100px] rounded-full overflow-hidden">
                <Image src="/images/aslbekkucharov.jpg" unoptimized width={200} height={200} alt="Aslbek Kucharov in Samarkand, Registan area" />
            </div>

            <div className="flex flex-col items-start gap-1">
                <span className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-2 mb-2">
                    <span className="text-white text-xl leading-1">Aslbek Kucharov</span>
                    <span className='text-white hidden sm:inline-block'>|</span>
                    <span className='text-sm text-slate-300 leading-none'>@aslbekkucharov</span>
                </span>
                <span className="text-slate-400 text-sm">Middle Frontend Developer</span>
                <a href="/aslbekkucharov.pdf" download="aslbekkucharov" className="inline-flex items-center justify-start gap-1 rounded-md text-slate-400">
                    <span className="text-white text-sm">Download resume</span>
                    <IonDocumentText width="16" height="16" className="text-white" />
                </a>
            </div>
        </div>
    )
}