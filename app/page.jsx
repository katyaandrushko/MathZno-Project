import About from '@/components/About'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Cta from '@/components/ui/Cta'
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
         {/* <Work /> */}
         <Reviews />
         <Contact />
         {/* <Cta /> */}
      </main>
   )
}
