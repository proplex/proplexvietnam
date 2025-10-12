import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import Workflow from "@/components/sections/workflow"
import Tech from "@/components/sections/tech"
import Cta from "@/components/sections/cta"

export default function Page() {
  return (
    <main className="font-sans">
      <Hero />
      <Features />
      <Workflow />
      <Tech />
      <Cta />
    </main>
  )
}
