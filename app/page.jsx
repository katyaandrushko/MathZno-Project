import About from '@/components/About'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Reviews from '@/components/ui/Reviews'
import Contact from '@/components/Contact'
import Tracker from '@/components/Tracker'

export default function Home() {
   return (
      <main>
         <Tracker />
         <Hero />
         <About />
         <Services />
         <Reviews />
         <Contact />
      </main>
   )
}
