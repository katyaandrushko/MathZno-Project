'use client'
import {
   GanttChartSquare,
   Blocks,
   Gem,
   BellDot,
   BookOpenCheck,
   ScrollIcon,
   MessageCircleQuestion,
   Speech,
} from 'lucide-react'
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'
import { motion } from 'framer-motion'

const servicesData = [
   {
      icon: <BookOpenCheck size={72} strokeWidth={0.8} />,
      title: '12 занять на місяць',
      description:
         '12 онлайн занять на місяць по 1,5 години, де ми поступово пройдемо весь матеріал',
   },
   {
      icon: <ScrollIcon size={72} strokeWidth={0.8} />,
      title: 'Авторські матеріали',
      description: 'Ілюстровані конспекти та робочі зошити до кожного заняття',
   },
   {
      icon: <BellDot size={72} strokeWidth={0.8} />,
      title: 'Записи всіх занять',
      description:
         'Займайся у будь-який зручний тобі час, адже записи будуть доступні до самого іспиту',
   },
   {
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: 'Домашнє завдання після уроку',
      description:
         'Для закріплення матеріалу ви отримаєте домашні завдання з підказками та розв’язками',
   },
   {
      icon: <MessageCircleQuestion size={72} strokeWidth={0.8} />,
      title: 'Відеорозвʼязки найважчих завдань',
      description:
         'До найскладніших задач домашнього завдання ви отримаєте відеорозв’язки',
   },
   {
      icon: <Speech size={72} strokeWidth={0.8} />,
      title: 'Особистий куратор',
      description:
         'Людина, яка 24/7 на зв’язку, відповідає на всі питання та допомагає з практикою',
   },
]
const Services = () => {
   // return (
   //    <section className="mb-12 xl:mb-36">
   //       <div className="container mx-auto">
   //          <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
   //             Про курс
   //          </h2>
   //          {/* Items  */}
   //          <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
   //             {servicesData.map((item, index) => {
   //                return (
   //                   <Card
   //                      className="f-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
   //                      key={index}
   //                   >
   //                      <CardHeader className="text-primary absolute -top-[60px]">
   //                         <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
   //                            {item.icon}
   //                         </div>
   //                      </CardHeader>
   //                      <CardContent className="text-center">
   //                         <CardTitle className="mb-4">{item.title}</CardTitle>
   //                         <CardDescription className="text-lg ">
   //                            {item.description}
   //                         </CardDescription>
   //                      </CardContent>
   //                   </Card>
   //                )
   //             })}
   //          </div>
   //       </div>
   //    </section>
   // )
   return (
      <section className="mb-12 xl:mb-36">
         <div className="container mx-auto">
            <h2 className="section-title mb-[70px] xl:mb-24 text-center mx-auto ">
               Про курс
            </h2>
            {/* Items  */}
            <div className="grid xl:grid-cols-3 md:grid-cols-2 justify-center gap-y-12 md:gap-x-10 2 xl:gap-y-24 xl:gap-x-8">
               {servicesData.map((item, index) => {
                  return (
                     <Card
                        className="f-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                        key={index}
                     >
                        <CardHeader className="text-primary absolute -top-[60px]">
                           <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                              {item.icon}
                           </div>
                        </CardHeader>
                        <CardContent className="text-center">
                           <CardTitle className="mb-4">{item.title}</CardTitle>
                           <CardDescription className="text-lg ">
                              {item.description}
                           </CardDescription>
                        </CardContent>
                     </Card>
                  )
               })}
            </div>
         </div>
      </section>
   )
}

export default Services
