'use client'
// npm i @emailjs/browser

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

function Form() {
   const form = useRef()
   const [nameError, setNameError] = useState('')
   const [numberError, setNumberError] = useState('')

   const sendEmail = (e) => {
      e.preventDefault()

      if (!validateForm()) {
         return
      }

      emailjs
         .sendForm(
            'service_oly5gjk',
            'template_h8cdhwh',
            form.current,
            '8v6lulg2vtwc0EPiD'
         )
         .then(
            (result) => {
               console.log(result.text)
               console.log('message sent')
               alert('Дякуємо за заявку!')
               form.current.reset()
            },
            (error) => {
               console.log(error.text)
            }
         )
   }

   const validateForm = () => {
      const fullName = form.current.user_name.value
      const phone = form.current.user_number.value

      const phoneRegex = /^\+380\d{9}$/

      if (fullName.trim() === '') {
         setNameError('Please enter your full name')
         return false
      } else {
         setNameError('')
      }

      if (!phone.match(phoneRegex)) {
         setNumberError(
            'Будь ласка, введіть коректний номер телефону типу +380XXXXXXXXX'
         )
         return false
      } else {
         setNumberError('')
      }

      return true
   }

   // Функція для автоматичного додавання коду країни (+380) та обмеження введення тільки цифрами
   const handlePhoneNumberChange = (e) => {
      let input = e.target.value.replace(/\D/g, '')
      if (input.length > 15) {
         input = input.substring(0, 15)
      }

      if (!input.startsWith('38')) {
         e.target.value = '+38' + input
      } else {
         e.target.value = '+' + input
      }
   }

   return (
      <form className="flex flex-col gap-y-4" onSubmit={sendEmail} ref={form}>
         <p className="error">{nameError}</p>
         <p className="error">{numberError}</p>
         <div className="relative flex items-center w-[90%]">
            <Input
               type="text"
               name="user_name"
               placeholder="Ваше ім'я"
               required
            />
            <User className="absolute right-6" size={20} />
         </div>
         <div className="relative flex items-center w-[90%]">
            <Input
               type="tel"
               name="user_number"
               placeholder="Номер телефону"
               onChange={handlePhoneNumberChange}
               required
            />
            <MailIcon className="absolute right-6" size={20} />
         </div>
         <div className="relative flex items-center w-[90%]">
            <Textarea
               name="user_message"
               placeholder="Напишіть тут, як з вами краще звʼязаися: зателефонувати чи написати на вайбер, або у вас уже є якісь питання"
               className="pt-3 text-base pl-7 pr-[70px]"
            />
            <MessageSquare className="absolute top-4 right-6" size={20} />
         </div>

         <Button
            type="submit"
            className="flex items-center gap-x-2 max-w-[180px]"
         >
            Надіслати заявку
            <ArrowRightIcon size={20} />
         </Button>
      </form>
   )
}

export default Form
