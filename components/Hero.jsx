import Link from 'next/link'
import { Button } from './ui/button'
import { MousePointer, User, Wand, ShieldCheck } from 'lucide-react'
import DevImg from './DevImg'
import Socials from './Socials'
import Badge from './Badge'
import { RiTeamFill } from 'react-icons/ri'

const Hero = () => {
   return (
      <section className="   py-12 xl:py-24 xl:h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
         <div className="ml-4 mr-4 sm:container sm:mx-auto">
            <div className="flex flex-wrap-reverse xl:flex justify-between gap-x-8">
               {/* Text */}
               <div className="flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                  <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                     ЗНО на 200!
                  </div>
                  <h1 className="h1 pb-6 max-w-[600px]">
                     Підготую до НМТ на
                     <span className="text-orange-500"> 200 </span> не виходячи
                     з дому
                  </h1>
                  <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                     Залишай заявку та отримуй безкоштовний пробний урок з
                     конспектом, робочим зошитом, домашньою роботою та
                     підтримкою куратора
                  </p>
                  {/* Button */}
                  <div className="flex flex-col gap-y-4 md:flex-row  gap-x-3 mx-auto xl:mx-0 mb-12">
                     <Link href="/contact">
                        <Button className="gap-x-2">
                           Отримати безкоштовний урок <MousePointer size={18} />{' '}
                        </Button>
                     </Link>
                     <Button variant="secondary" className="gap-x-2">
                        Звʼязатися зі мною <User size={18} />{' '}
                     </Button>
                  </div>
                  {/* Socials */}
                  <Socials
                     containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                     iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
                  />
               </div>
               {/* Image */}
               <div className="pb-10 mx-auto xl:flex relative">
                  {/* Badge */}
                  <Badge
                     containerStyles="absolute top-[5%] -left-[1rem] sm:absolute sm:top-[24%] sm:-left-[5rem]"
                     icon={<ShieldCheck />}
                     endCountNum={5}
                     badgeText="років досвіду"
                  />

                  {/* Badge 2 */}
                  <Badge
                     containerStyles="top-[70%] -left-[2rem] absolute sm:top-[80%] sm:-left-[1rem]"
                     icon={<Wand />}
                     endCountNum={80}
                     endCounttext="%"
                     badgeText="учнів склали на 180+"
                  />

                  {/* Badge 3 */}
                  <Badge
                     containerStyles="top-[47%] -right-9 absolute sm:top-[55%] sm:-right-8"
                     icon={<RiTeamFill />}
                     endCountNum={500}
                     badgeText="учнів підготував"
                  />
                  <div className="w-[200px] h-[350px] bg-hero_shape2_light dark:bg-hero_shape2_dark sm:w-[500px] sm:h-[505px] bg-no-repeat absolute -top-1 -right-2 "></div>
                  <DevImg
                     imgSrc="/about/developer.png"
                     containerStyles="bg-hero_shape w-[250px] h-[360px] sm:w-[550px] sm:h-[462px] bg-no-repeat relative bg-bottom flex items-center justify-center "
                  />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero
