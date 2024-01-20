import React from 'react'
import './tracker.css'

const Tracker = () => {
   return (
      // <div>
      //    <div className="text-uppercase bg-red-50 overflow-hidden text-black text-uppercase font-thin text-xl flex items-center px-2">
      //       <p className=" w-full transform translate-x-full animate-ticker text-black ">
      //          записатися на пробний безкоштовний урок 👉 заповнюй форму на
      //          сайті 👉 записатися на пробний безкоштовний урок 👉 заповнюй
      //          форму на сайті
      //       </p>
      //    </div>
      // </div>
      <div className="w-full overflow-hidden -webkit-sticky">
         <div class=" scroll text1 flex whitespace-nowrap ">
            <div class="pl-[40px] pr-[30px] pt-[7px] pb-[7px] text-black text-3xl bg-white whitespace-nowrap font-bold uppercase  animate-ticker">
               <span>
                  записатися на пробний урок 👉 заповнюй форму на сайті, і
                  отримай безкоштовне заняття
               </span>
            </div>
         </div>
      </div>
   )
}

export default Tracker
