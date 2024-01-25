'use client'
import CountUp from 'react-countup'

const Badge = ({
   containerStyles,
   icon,
   endCountNum,
   endCounttext,
   badgeText,
}) => {
   return (
      <div className={`badge ${containerStyles}`}>
         <div className="text3xl text-primary"> {icon}</div>
         <div className="flex items-center gap-x-2">
            <div className="text-xl sm:text-4xl leading-none font-bold text-primary">
               <CountUp end={endCountNum} delay={1} duration={4} />
               {endCounttext}
            </div>
            <div className="text-[12px] w-full xl:max-w-[70px] leading-none sm:text-[15px] font-medium text-black">
               {badgeText}
            </div>
         </div>
      </div>
   )
}

export default Badge
