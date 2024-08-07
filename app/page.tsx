import { siteConfig } from "@/config/site"
import UserDescription from "@/components/user/UserDescription"
import UserTechnologyStack from "@/components/user/UserTechnologyStack"
import UserExperiences from "@/components/user/UserExperiences"

export default function Home() {
  return (
    <section className="flex flex-col gap-y-6">
      <UserDescription />
      <UserTechnologyStack />
      <UserExperiences className="mt-5" />
    </section>
  )
}
