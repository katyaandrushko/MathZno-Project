'use client'
import Link from 'next/link'
import { Button } from './ui/button'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
//import required modules
import { Pagination } from 'swiper/modules'
// components
import ProjectCard from './ui/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'

const projectData = [
   {
      image: '/work/3.png',
      categor: 'gsap',
      name: 'Food Website',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, culpa.',
      link: '/',
      codepen: '/',
   },
   {
      image: '/work/4.png',
      categor: 'next js',
      name: 'Gain Strom',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, culpa.',
      link: '/',
      codepen: '/',
   },
   {
      image: '/work/1.png',
      categor: 'react',
      name: 'Katya Website',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, culpa.',
      link: '/',
      codepen: '/',
   },
   {
      image: '/work/2.png',
      categor: 'html css',
      name: 'Light Website',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, culpa.',
      link: '/',
      codepen: '/',
   },
   {
      image: '/work/3.png',
      categor: 'gsap',
      name: 'UX Website',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, culpa.',
      link: '/',
      codepen: '/',
   },
]

const Work = () => {
   return (
      <section className="relative mb-12 xl:mb-48">
         <div className="container mx-auto">
            {/* Text */}
            <div className="items-center max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
               <h2 className="section-title mb-4">Recent Projects</h2>
               <p className="subtitle mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi voluptas omnis provident rerum quisquam temporibus
                  maiores ratione quaerat suscipit? Animi dolor unde temporibus
                  voluptatem architecto reprehenderit, quasi mollitia voluptate
                  odit?
               </p>
               <Link href="/projects">
                  <Button>All projects</Button>
               </Link>
            </div>
            {/* Slider */}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
               <Swiper
                  className="h-[480px]"
                  slidesPerView={1}
                  breakpoints={{
                     640: {
                        slidesPerView: 2,
                     },
                  }}
                  spaceBetween={30}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
               >
                  {/* Show only the first 4 projects */}
                  {projectData.slice(0, 4).map((project, index) => {
                     return (
                        <SwiperSlide key={index}>
                           <ProjectCard project={project} />
                        </SwiperSlide>
                     )
                  })}
               </Swiper>
            </div>
         </div>
         <canvas id="stockGraph" width="150" height="150">
            current stock price: $3.15 + 0.15
         </canvas>
      </section>
   )
}

export default Work
