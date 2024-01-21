import { User } from '@/components/User'
import { TechStack } from '@/components/TechStack'
import { userTechStack, workExpirience } from '@/config'
import { WorkExperience } from '@/components/WorkExperienceItem'

export default function Home() {

  return (
    <main className="py-20 px-3">
      <div className="max-w-[600px] w-full mx-auto">

        <section className="flex flex-col gap-10 mb-10">

          <User />

          <div className="flex flex-col items-start justify-start">
            <h6 className="inline-block text-white text-sm mb-2">About me 🐱‍💻</h6>
            <p className="text-slate-400 text-sm mb-3">Frontend developer with more than 3+ years experience. I enjoy to create intuitive interfaces, clean/readable code. Keeping on top of the wave with all the popular development tools. Due to the fact that I love my job, I try to do everything as perfectly as possible.</p>
            <TechStack className='text-slate-300' technologies={userTechStack} />
          </div>
        </section>

        <section className='flex flex-col gap-8'>
          <h6 className="text-white text-sm">Work Experience 📠</h6>

          {workExpirience.map((exp, i) => (<WorkExperience experience={exp} key={i} />))}
        </section>
      </div>
    </main>
  )
}
