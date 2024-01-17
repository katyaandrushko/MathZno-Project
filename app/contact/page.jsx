import Form from '@/components/Form'
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'

const Contact = () => {
   return (
      <section>
         <div className="container mx-auto">
            {/* Text Image */}
            <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
               {/* Text */}

               <div className="flex flex-col justify-center">
                  <h1 className="h1 max-w-md mb-8">Отримати пробний урок</h1>
                  <p className="subtitle max-w-[400px]">
                     Залишайте заявку та наш менеджер звʼяжеться з вами протягом
                     15 хвилин, щоб дати доступ до безкоштовного заняття
                  </p>
                  <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                     <span className="w-[30px] h-[2px] bg-primary"></span>
                     ЗНО на 200
                  </div>
               </div>
               {/* Image */}
               <div className="hidden md:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
            </div>
            {/* Info Text & Forms */}
            <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
               {/* Info text */}
               <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                  {/* Mail */}
                  <div className="flex items-center gap-x-8">
                     <MailIcon size={18} className="text-primary" />
                     <div>sanyaxnomath</div>
                  </div>
                  {/* Address */}
                  <div className="flex items-center gap-x-8">
                     <MailIcon size={18} className="text-primary" />
                     <div>Kyiv, Urkaine</div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-x-8">
                     <MailIcon size={18} className="text-primary" />
                     <div>+380999999999</div>
                  </div>
               </div>
               <Form />
            </div>
         </div>
      </section>
   )
}

export default Contact
