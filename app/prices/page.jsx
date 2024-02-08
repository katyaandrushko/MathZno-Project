'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RxCheckCircled, RxCheckbox } from 'react-icons/rx'
import Link from 'next/link'

const borderedCardStyles = {
   border: '2px solid #E4871F', // Замініть цей колір на той, який вам потрібен
   borderRadius: '10px',
   padding: '10px',
   boxShadow: '0px 0px 10px 2px #E4871F', // Тінь
}

const CheckboxItem = ({ label }) => (
   <div className=" form-control flex ">
      <li>
         <div className="form-control flex">
            <div className="flex">
               <RxCheckCircled
                  className="mr-2"
                  style={{ width: '20px', height: '20px' }}
               />
               <span className="text w-[150px] sm:w-[200px]">{label}</span>
            </div>
         </div>
      </li>
   </div>
)

const Card = ({ title, price, features, selected, onSelect, price2 }) => (
   <div
      className={`card card-bordered bg-secondary/50 dark:bg-secondary/40 h-auto sm:h-[80vh] mb-[60px] ${
         selected ? 'selected-card' : ''
      }`}
      style={selected ? borderedCardStyles : null}
      onClick={() => onSelect(title)}
   >
      <div className="flex flex-col h-full grow-0 p-6 sm:p-12">
         <h2 className="card-title">{title}</h2>
         <p className="text-4xl line-through text-red-500 font-extralight">
            {price2}
         </p>
         <p className="text-6xl text-left mb-0 pb-0">{price}</p>

         <ul className="mt-12 mb-8">
            {features.map((feature, index) => (
               <CheckboxItem key={index} label={feature} />
            ))}
         </ul>
         <div className="flex items-center justify-center sm:mt-auto">
            <Link href="/contact">
               <Button className="text-[14px] sm:text-[17px]">
                  Спробувати пробний урок
               </Button>
            </Link>
         </div>
      </div>
   </div>
)

function PricingCard() {
   const [selectedTariff, setSelectedTariff] = useState('Pro')

   const pricingOptions = [
      {
         title: 'Стандарт',
         price2: '1390₴',
         price: '1090₴',
         features: [
            '10-12 онлайн занять',
            'Записи занять',
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
         price: '1900₴',
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
         price: '4800₴',
         features: [
            'Ціна вказана за місяць активного навчання',
            '2 індивідуальних  заняття на тиждень по 1,5 години',
            'Домашні завдання з перевіркою та коментарями',
            'Особистий план навчання',
         ],
      },
   ]

   return (
      <div>
         <h1 className="h1 flex items-center justify-center pb-[45px]">
            Наші тарифи
         </h1>
         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 gap-y-16 max-w-6xl ">
            {pricingOptions.map((option, index) => (
               <Card
                  key={index}
                  title={option.title}
                  price={option.price}
                  price2={option.price2}
                  features={option.features}
                  selected={selectedTariff === option.title}
                  onSelect={setSelectedTariff}
               />
            ))}
         </div>
      </div>
   )
}

export default PricingCard
