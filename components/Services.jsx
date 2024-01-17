import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'

const servicesData = [
   {
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: 'UX Design',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque laboriosam laudantium harum voluptates possimus ad nemo ea dolore recusandae suscipit unde, veritatis repudiandae ullam, vero omnis atque numquam iure!',
   },
   {
      icon: <Blocks size={72} strokeWidth={0.8} />,
      title: 'UX Design',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque laboriosam laudantium harum voluptates possimus ad nemo ea dolore recusandae suscipit unde, veritatis repudiandae ullam, vero omnis atque numquam iure!',
   },
   {
      icon: <Gem size={72} strokeWidth={0.8} />,
      title: 'UX Design',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque laboriosam laudantium harum voluptates possimus ad nemo ea dolore recusandae suscipit unde, veritatis repudiandae ullam, vero omnis atque numquam iure!',
   },
   {
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: 'UX Design',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque laboriosam laudantium harum voluptates possimus ad nemo ea dolore recusandae suscipit unde, veritatis repudiandae ullam, vero omnis atque numquam iure!',
   },
   {
      icon: <Blocks size={72} strokeWidth={0.8} />,
      title: 'UX Design',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque laboriosam laudantium harum voluptates possimus ad nemo ea dolore recusandae suscipit unde, veritatis repudiandae ullam, vero omnis atque numquam iure!',
   },
   {
      icon: <Gem size={72} strokeWidth={0.8} />,
      title: 'UX Design',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque laboriosam laudantium harum voluptates possimus ad nemo ea dolore recusandae suscipit unde, veritatis repudiandae ullam, vero omnis atque numquam iure!',
   },
]
const Services = () => {
   return (
      <section className="mb-12 xl:mb-36">
         <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
               My Services
            </h2>
            {/* Items  */}
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
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
