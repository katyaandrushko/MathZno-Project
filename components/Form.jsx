'use client'
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

      const phoneRegex = /^(\+380|0\d{2})\d{7}$/

      if (fullName.trim() === '') {
         setNameError('Please enter your full name')
         return false
      } else {
         setNameError('')
      }

      // if (!phone.match(phoneRegex)) {
      //    setNumberError(
      //       'Будь ласка, введіть коректний номер телефону типу +380'
      //    )
      //    return false
      // } else {
      //    setNumberError('')
      // }

      return true
   }

   // Функція для автоматичного форматування номеру телефону
   const formatPhoneNumber = (e) => {
      const input = e.target.value.replace(/\D/g, '') // Видаляємо всі нецифрові символи з введеного значення
      const match = input.match(
         /^(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/
      ) // Розділяємо номер на частини

      if (match) {
         e.target.value =
            '+' +
            match[1] +
            (match[2] ? ' (' + match[2] : '') +
            (match[3] ? ') ' + match[3] : '') +
            (match[4] ? '-' + match[4] : '') +
            (match[5] ? '-' + match[5] : '') // Форматуємо номер у зручний вигляд
      } else {
         e.target.value = input
      }
   }

   // Перевірка, чи міститься префікс "+380" у значенні поля вводу перед тим, як встановити його в якості значення поля вводу
   const handlePhoneNumberFocus = (e) => {
      if (!e.target.value.includes('+380')) {
         e.target.value = '+380'
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
               onFocus={handlePhoneNumberFocus} // Додаємо обробник події onFocus для перевірки, чи міститься префікс "+380" у значенні поля вводу
               onChange={formatPhoneNumber} // Додаємо обробник події onChange для форматування номеру телефону
               required
            />
            <MailIcon className="absolute right-6" size={20} />
         </div>
         <div className="relative flex items-center w-[90%]">
            <Textarea
               name="message"
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
