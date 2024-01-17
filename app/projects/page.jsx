// 'use client'
// import React, { useState } from 'react'
// import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
// import ProjectCard from '@/components/ui/ProjectCard'

// // Remove Duplicate
// const projectData = [
//    {
//       image: '/work/3.png',
//       category: 'next js',
//       name: 'Food Website',
//       description:
//          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, culpa.',
//       link: '/',
//       codepen: '/',
//    },
//    {
//       image: '/work/4.png',
//       category: 'next js',
//       name: 'Gain Strom',
//       description:
//          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, culpa.',
//       link: '/',
//       codepen: '/',
//    },
//    {
//       image: '/work/1.png',
//       category: 'react',
//       name: 'Katya Website',
//       description:
//          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, culpa.',
//       link: '/',
//       codepen: '/',
//    },
//    {
//       image: '/work/2.png',
//       category: 'html css',
//       name: 'Light Website',
//       description:
//          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, culpa.',
//       link: '/',
//       codepen: '/',
//    },
// ]

// const uniqueCategories = [
//    'all projects',
//    ...new Set(projectData.map((item) => item.category)),
// ]

// const Projects = () => {
//    const [categories, setCategories] = useState(uniqueCategories)
//    const [category, setCategory] = useState('all projects')

//    const filteredProjects = projectData.filter((project) => {
//       return category === 'all projects'
//          ? project
//          : project.category === category
//    })
//    return (
//       <section className="min-h-screen pt-12">
//          <div className="container mx-auto">
//             <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
//                My Project
//             </h2>
//             {/* Tabs */}
//             <Tabs defaultValue={category} className="mb-24 xl:mb-48">
//                <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none ">
//                   {categories.map((category, index) => {
//                      return (
//                         <TabsTrigger
//                            onClick={() => setCategory(category)}
//                            value={category}
//                            key={index}
//                            className="capitalize w-[162px] md:w-auto"
//                         >
//                            {category}
//                         </TabsTrigger>
//                      )
//                   })}
//                </TabsList>
//                {/* Tabs Content */}
//                <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
//                   {filteredProjects.map((project, index) => {
//                      return (
//                         <TabsContent value={category} key={index}>
//                            <ProjectCard project={project} />
//                         </TabsContent>
//                      )
//                   })}
//                </div>
//             </Tabs>
//          </div>
//       </section>
//    )
// }

// export default Projects

'use client'
import React from 'react'
import { RiCheckboxMultipleFill } from 'react-icons/ri'
import { Button } from '@/components/ui/button'

const borderedCardStyles = {
   border: '2px solid #FF4500', // Замініть цей колір на той, який вам потрібен
   borderRadius: '10px',
   padding: '10px',
   boxShadow: '0px 0px 10px 2px #FF4500', // Тінь
}

const CheckboxItem = ({ label }) => (
   <li>
      <div className=" form-control flex ">
         <label className="label justify-start items-start">
            <input
               type="checkbox"
               className="checkbox checkbox-secondary checkbox-sm mr-2"
               readOnly
            />
            <span className="label-text">{label}</span>
         </label>
         {/* <div className="flex ">
            <RiCheckboxMultipleFill className="mr-2" size={20} />
            <span className="text">{label}</span>
         </div> */}
      </div>
   </li>
)

const Card = ({ title, price, features, link }) => (
   <div
      className=" card card-bordered bg-secondary/50 dark:bg-secondary/40 h-[70vh] mb-[60px]"
      style={title === 'Pro' ? borderedCardStyles : null}
   >
      <div className="flex flex-col h-full grow-0 p-12">
         <h2 className="card-title">{title}</h2>
         <p className="heading text-6xl text-left mb-0 pb-0">{price}</p>
         <p className="text-zinc-400">Одне заняття</p>
         <ul className="mt-12 mb-8">
            {features.map((feature, index) => (
               <CheckboxItem key={index} label={feature} />
            ))}
         </ul>
         <div className="flex items-center justify-center mt-auto ">
            <Button>Спробувати пробний урок</Button>
         </div>
      </div>
   </div>
)
function PricingCard() {
   const pricingOptions = [
      {
         title: 'Стандарт',
         price: '1090₴',
         features: [
            '10-12 онлайн занять',
            ' Записи занять',
            'Конспекти та робочі зошити',
            'Домашні завдання з підказками та рішеннями',
            'Відеорозв’язки складних задач',
            'Особистий куратор',
            'Авторський варіант НМТ',
            'Телеграм бот для зберігання матеріалів',
            'Атмосферний чат з учнями',
         ],
      },
      {
         title: 'Pro',
         price: '1900',
         features: [
            ' 10-12 онлайн занять',
            'Записи занять',
            'Конспекти та робочі зошити',
            'Домашні завдання з підказками та рішенням',
            'Відеорозв’язки складних задач',
            'Особистий куратор',
            'Авторський варіант НМТ',
            'Телеграм бот для зберігання матеріалів',
            'Атмосферний чат з учнями',
            '2 зум зустрічі з викладачем',
            'Особистий чат з викладачем',
         ],
      },
      {
         title: 'Індивідуальні',
         price: '400₴',
         features: [
            'Особистий чат з викладаче',
            'Особистий чат з викладаче',
            'Особистий чат з викладаче',
         ],
      },
   ]

   return (
      <div>
         <div>
            <h1 className="h1 flex items-center justify-center pb-[45px]">
               Наші тарифи
            </h1>
         </div>
         <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 gap-y-16 max-w-6xl ">
            {pricingOptions.map((option, index) => (
               <Card key={index} {...option} />
            ))}
         </div>
      </div>
   )
}

export default PricingCard
