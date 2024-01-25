import DevImg from './DevImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
   User2,
   MailIcon,
   HomeIcon,
   PhoneCall,
   GraduationCapIcon,
   Calendar,
   Briefcase,
} from 'lucide-react'

const infoData = [
   {
      icon: <User2 size={20} />,
      text: 'Daniel Breix',
   },
   {
      icon: <PhoneCall size={20} />,
      text: ' 0661440310',
   },
   {
      icon: <MailIcon size={20} />,
      text: 'Daniel Breix',
   },
   {
      icon: <Calendar size={20} />,
      text: 'Daniel Breix',
   },
   {
      icon: <GraduationCapIcon size={20} />,
      text: 'Daniel Breix',
   },
   {
      icon: <HomeIcon size={20} />,
      text: 'Daniel Breix',
   },
]

const qualificationData = [
   {
      title: 'освіта',
      data: [
         {
            university: 'КПІ',
            qualification: 'Бакалавр чи магістр',
            years: '2019-2021',
         },
         {
            university: 'Школа...',
            qualification: 'Закінчив 11 класів з відзнакою',
            years: '2020-2022',
         },
         {
            university: 'Курси може якісь',
            qualification: 'Був топовим',
            years: '2021-2023',
         },
      ],
   },
   {
      title: 'досвід',
      data: [
         {
            company: 'Розумскул',
            role: 'Викладач фізики',
            years: '2019-2021',
         },
         {
            company: 'Ше шось',
            role: 'Викладач математики',
            years: '2020-2022',
         },
         {
            company: 'Алекс Ленц',
            role: 'Викладач математики',
            years: '2021-2023',
         },
      ],
   },
]

const skillData = [
   {
      title: 'skills',
      data: [
         {
            name: 'HTML CSS',
         },
         {
            name: 'JAVA SCRIPT ',
         },
         {
            name: 'REACT',
         },
         {
            name: 'BACK END ',
         },
      ],
   },
   {
      title: 'tools',
      data: [
         {
            imgPath: '/about/vscode.svg',
         },
         {
            imgPath: '/about/figma.svg',
         },
         {
            imgPath: '/about/notion.svg',
         },
         {
            imgPath: '/about/wordpress.svg',
         },
      ],
   },
]

const About = () => {
   const getData = (arr, title) => {
      return arr.find((item) => item.title === title)
   }
   return (
      <section className="mt-[657px] sm:mt-[850px] xl:mt-[10px] xl:h-[840px] pb-12 xl:py-24">
         <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
               Про мене
            </h2>
            <div className="flex flex-col items-center justify-center mx-auto xl:flex-row ">
               <div className="hidden xl:flex flex-1 relative ">
                  <DevImg
                     containerStyles="flex justify-center items-center bg-about_shape_light dark:bg-about_shape_dark w-[554px] h-[495px] bg-no-repeat relative"
                     imgSrc="/about/developer.png"
                  />
               </div>
               {/* Tabs */}
               <div className="items-center flex ">
                  <Tabs defaultValue="personal">
                     <TabsList className="flex flex-col sm:w-[400px] sm:grid sm:grid-cols-2 xl:grid-cols-2 mx-auto xl:max-w-[520px] xl:border dark:border-none ">
                        <TabsTrigger
                           value="personal"
                           className="w-[175px] xl:w-auto"
                        >
                           Особиста інформація
                        </TabsTrigger>
                        <TabsTrigger
                           value="qualifications"
                           className="w-[162px] xl:w-auto"
                        >
                           Досвід
                        </TabsTrigger>
                        {/* <TabsTrigger
                           value="skills"
                           className="w-[162px] xl:w-auto"
                        >
                           Чому я?
                        </TabsTrigger> */}
                     </TabsList>

                     {/* Tabs content */}
                     <div className="text-lg mt-12 flex justify-center mx-auto xl:mt-8 ">
                        <TabsContent value="personal">
                           <div className="text-center xl:text-left">
                              <h3 className="h3 mb-4">Про мене</h3>
                              <div className="subtitle max-w-xl max-auto xl:mx-0">
                                 👨‍💻 Я вже 5 років готую учнів до ЗНО та НМТ з
                                 математики 🧑‍🏫 За спеціальністю я інженер,
                                 закінчив КПІ в 2021 році 💁‍♂ Сам я
                                 підготувався до ЗНО за рік на 193 бали і це
                                 після 2 балів на ДПА в 9 класі 🎉 За 5 років
                                 випустив більше 400 учнів, середній бал яких
                                 180+
                                 <p className="h3 mb-7 mt-7 text-black">
                                    Моє кредо{' '}
                                 </p>
                                 <p className="subtitle">
                                    Я, як ніхто інший розумію, що таке
                                    готуватися з 0, саме тому впевнений, що
                                    зможу допомогти кожному учню 😎
                                 </p>
                              </div>

                              <div className="border-b border-border mb-4"></div>

                              {/* ICONS */}
                              {/* <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                 {infoData.map((item, index) => {
                                    return (
                                       <div
                                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                          key={index}
                                       >
                                          <div className="text-primary">
                                             {item.icon}
                                          </div>
                                          <div>{item.text}</div>
                                       </div>
                                    )
                                 })}
                              </div> */}
                           </div>
                        </TabsContent>

                        {/* Qualifications content */}
                        <TabsContent value="qualifications">
                           <div>
                              <div className="grid md:grid-cols-2 gap-y-8 ">
                                 {/* experience  */}
                                 <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                       <Briefcase />
                                       <h4 className="capitalize font-medium ">
                                          {
                                             getData(
                                                qualificationData,
                                                'досвід'
                                             ).title
                                          }
                                       </h4>
                                    </div>
                                    {/* Experience list */}
                                    <div className="flex flex-col gap-y-8 ">
                                       {getData(
                                          qualificationData,
                                          'досвід'
                                       ).data.map((item, index) => {
                                          const { company, role, years } = item
                                          return (
                                             <div
                                                className="flex gap-x-8 group"
                                                key={index}
                                             >
                                                <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                   <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                </div>
                                                <div>
                                                   <div className="font-semibold text-xl leading-none mb-2">
                                                      {company}
                                                   </div>
                                                   <div className="text-lg leading-none text-muted-foreground mb-4">
                                                      {role}
                                                   </div>
                                                   <div className="text-base font-medium">
                                                      {years}
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                       })}
                                    </div>
                                 </div>

                                 {/* освіта  */}
                                 <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                       <GraduationCapIcon size={28} />
                                       <h4 className="capitalize font-medium ">
                                          {
                                             getData(
                                                qualificationData,
                                                'освіта'
                                             ).title
                                          }
                                       </h4>
                                    </div>
                                    {/* Experience list */}
                                    <div className="flex flex-col gap-y-8 ">
                                       {getData(
                                          qualificationData,
                                          'освіта'
                                       ).data.map((item, index) => {
                                          const {
                                             university,
                                             qualification,
                                             years,
                                          } = item
                                          return (
                                             <div
                                                className="flex gap-x-8 group"
                                                key={index}
                                             >
                                                <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                   <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                </div>
                                                <div>
                                                   <div className="font-semibold text-xl leading-none mb-2">
                                                      {university}
                                                   </div>
                                                   <div className="text-lg leading-none text-muted-foreground mb-4">
                                                      {qualification}
                                                   </div>
                                                   <div className="text-base font-medium">
                                                      {years}
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                       })}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </TabsContent>
                     </div>
                  </Tabs>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
