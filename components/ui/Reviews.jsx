'use client'
import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from './card'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
//import required modules
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const reviewsData = [
   {
      avatar: '/reviews/avatar-1.png',
      name: 'Таня Ілютенко',
      job: 'frontend developer',
      review:
         'Дуже вдячна❤️ програма дуже добре продумана, всі конспекти під носом, і найбільше подобається, як Алекс пояснює, в школі було тупо. Я зараз вчила все заново, а не згадувала. Думаю, якби в мене було більше вільного часу, щоб займатись, було б набагато краще. Чесно сказати, якби не цей курс, я б склала десь на 100 максимум. Такі завдання, шо просто так не вгадаєш і не додумаєшся сам. А школу я закінчила ще в 2015, та й то нічого не знала з математики😅 А так аж соромно казати бал😅 але я ж кажу, без цього я б не здала 100% А так маю прохідний бал на «Медицину» Дякуююю!',
   },
   {
      avatar: '/reviews/avatar-3.png',
      name: 'Мирослава',
      job: 'frontend developer',
      review:
         'Загалом супер,як і самі заняття,так і домашка,завжди усе зрозуміло,коли питання з`являлися їх швидко змушували зникнути,бо пояснення тут як тут,дуже рада була готуватися разом,бо сама б і на 130 певне не написала',
   },
   {
      avatar: '/reviews/avatar-4.png',
      name: 'Софія',
      job: '@Sova_mar',
      review:
         'Добрий вечір! Я склала НМТ на 171 з математики, і неймовірно рада результату! Ви з Алексом витягнули мене зі 107😅 на той результат, який сьогодні є🥹 Дякую велике❤️',
   },
   {
      avatar: '/reviews/avatar-5.png',
      name: 'Olya',
      job: 'frontend developer',
      review:
         'Хочу подякувати за курс. Завдяки ньому я почала навіть любити математику. Матеріал викладений дуже цікаво та зрозуміло, куратор також крута. Хоч я й дивлюся всі уроки в записі, але це реально дуже-дуже крутою. Дякуємо Вам за вашу роботу❤️',
   },
   {
      avatar: '/reviews/avatar-6.png',
      name: 'Pahan',
      job: '@frolikpower',
      review:
         'Алексе, ти крутий🚀! Дякую і тобі за старання заради нас, майбутніх абітурієнтів 🧑‍🎓 Хочу сказати просто шалено велике ДЯКУЮ за всю ту підтримку під час навчання на курсі🥺💔💔 Це все точно не було марним, і це, по великому рахунку, ваша з Алексом величезна робота, завдяки якій навчання стає максимально комфортним💔 Я буду сумувати за нашими уроками і за вами з Алексом, то були дуже круті та фанові часи з вами і моїми одногрупниками😭😭😭😭',
   },
   {
      avatar: '/reviews/avatar-2.png',
      name: 'Ельміра',
      job: 'frontend developer',
      review:
         'Привіт! Дуже дякую😘 Я дуже вдячна за вашу спільну роботу над цим курсом. Це щось неймовірно. Така крута система навчання, я просто в захваті😍',
   },
]

const Reviews = () => {
   return (
      <section className="mb-12 xl:mb-32">
         <div className="container mx-auto">
            <h2 className="section-title mb-12 text-center mx-auto">
               Відгуки учнів
            </h2>
            {/* Slider  */}
            <Swiper
               slidesPerView={1}
               breakpoints={{
                  640: { slidesPerView: 2 },
                  1400: { slidesPerView: 3 },
               }}
               spaceBetween={30}
               modules={[Pagination]}
               pagination={{
                  clickable: true,
               }}
               className="h-[600px]"
            >
               {reviewsData.map((person, index) => {
                  return (
                     <SwiperSlide key={index}>
                        <Card className="bg-secondary/40 p-8 min-h-[300px]">
                           <CardHeader className="p-0 mb-10">
                              <div className="flex items-center gap-x-4">
                                 {/* Image */}
                                 <Image
                                    src={person.avatar}
                                    width={70}
                                    height={70}
                                    alt=""
                                    priority
                                 />
                                 {/* Name */}
                                 <div className="flex flex-col ">
                                    <CardTitle>{person.name}</CardTitle>
                                    <p>{person.job}</p>
                                 </div>
                              </div>
                           </CardHeader>
                           <CardDescription className="text-lg text-muted-foreground">
                              {person.review}
                           </CardDescription>
                        </Card>
                     </SwiperSlide>
                  )
               })}
            </Swiper>
         </div>
      </section>
   )
}

export default Reviews
