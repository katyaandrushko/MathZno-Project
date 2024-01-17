import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import DevImg from './DevImg'
import Socials from './Socials'
import Badge from './Badge'
import {
   RiBriefcase4Fill,
   RiTeamFill,
   RiTodoFill,
   RiArrowDownSLine,
} from 'react-icons/ri'

const Hero = () => {
   return (
      <section className="h-[44vh] py-12 xl:py-24 xl:h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
         <div className="container mx-auto">
            <div className="flex flex-wrap-reverse xl:flex justify-between gap-x-8">
               {/* Text */}
               <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                  <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                     ЗНО на 200!
                  </div>
                  <h1 className="h1 pb-6">
                     Підготую до НМТ на 200 не виходячи з дому
                  </h1>
                  <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                     Залишай заявку та отримуй безкоштовний пробний урок з
                     конспектом, робочим зошитом, домашньою роботою та
                     підтримкою куратора
                  </p>
                  {/* Button */}
                  <div className="flex flex-col gap-y-4 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                     <Link href="/contact">
                        <Button className="gap-x-2">
                           Отримати безкоштовний урок <Send size={18} />{' '}
                        </Button>
                     </Link>
                     <Button variant="secondary" className="gap-x-2">
                        Звʼязатися зі мною <Download size={18} />{' '}
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
                     containerStyles="absolute top-[24%] -left-[5rem]"
                     icon={<RiBriefcase4Fill />}
                     endCountNum={4}
                     badgeText="years of Experience"
                  />

                  {/* Badge 2 */}
                  <Badge
                     containerStyles="absolute top-[80%] -left-[1rem]"
                     icon={<RiTodoFill />}
                     endCountNum={9}
                     endCounttext="k"
                     badgeText="Completeed Projects"
                  />

                  {/* Badge 3 */}
                  <Badge
                     containerStyles="absolute top-[55%] -right-8"
                     icon={<RiTeamFill />}
                     endCountNum={12}
                     endCounttext="k"
                     badgeText="Client Satisfied"
                  />
                  <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[505px] bg-no-repeat absolute -top-1 -right-2 "></div>
                  <DevImg
                     imgSrc="/about/developer.png"
                     containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                  />
               </div>
            </div>
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
               <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
         </div>
      </section>
   )
}

export default Hero
