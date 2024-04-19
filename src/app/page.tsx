import Link from 'next/link'

import { User } from '@/components/User'
import { TechStack } from '@/components/TechStack'
import { userTechStack, workExpirience } from '@/config'
import { TelegramIcon } from '@/components/icons/TelegramIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { WorkExperience } from '@/components/WorkExperienceItem'
import { GithubIcon } from '@/components/icons/GithubIcon'

export default function Home() {

  return (
    <main className="py-20 px-3">
      <div className="max-w-[600px] w-full mx-auto">

        <section className="flex flex-col gap-10 mb-10">

          <User />

          <div className="flex flex-col items-start justify-start">
            <h6 className="inline-block text-white text-sm mb-2">About me 💻</h6>
            <p className="text-slate-400 text-sm mb-3">
              Frontend developer with more than 3+ years experience. I enjoy to create intuitive interfaces, clean/readable code.
              Keeping on top of the wave with all the popular development tools.
              Due to the fact that I love my job, I try to do everything as perfectly as possible.
            </p>
            <div className='inline-flex items-center gap-2 mb-6'>
              <span className='text-[#28a8e9] text-sm'>For over 2.5 years now, member of Telegram Support team (TSF)</span>
            </div>

            <span className='inline-block text-white text-sm mb-2'>Professionally owned 🔥</span>
            <TechStack className='text-slate-400' technologies={userTechStack} />
          </div>
        </section>

        <section className='flex flex-col gap-8 mb-14'>
          <h6 className="text-slate-400 text-md font-semibold">Work Experience ⚒</h6>
          {workExpirience.map((exp, i) => (<WorkExperience experience={exp} key={i} />))}
        </section>

        <section className='flex flex-col gap-5 justify-center items-center'>
          <h6 className='text-white'>Reach me on:</h6>

          <div className="flex items-center justify-center gap-4">
            <Link href="https://t.me/aslbekkucharov" target="_blank" className='hover:opacity-60'>
              <TelegramIcon width="32" height="32" className="text-white" />
            </Link>

            <Link href="https://www.linkedin.com/in/aslbekkucharov/" target="_blank" className='hover:opacity-60'>
              <LinkedInIcon width="30" height="30" className="text-white" />
            </Link>
            
            <Link href="https://github.com/aslbekkucharov/" target="_blank" className='hover:opacity-60'>
              <GithubIcon width="34" height="34" className="text-white" />
            </Link>
          </div>

        </section>
      </div>
    </main>
  )
}
