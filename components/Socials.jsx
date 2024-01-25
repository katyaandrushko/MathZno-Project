'use client'
import {
   RiYoutubeFill,
   RiLinkedinFill,
   RiGithubFill,
   RiFacebookBoxFill,
   RiInstagramFill,
   RiTelegramFill,
} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
   {
      path: 'https://www.youtube.com/@math_Alex_lenc?si=MUiNosL6KOstn1rX',
      name: <RiYoutubeFill />,
   },
   {
      path: 'https://t.me/multimatem',
      name: <RiTelegramFill />,
   },
   {
      path: 'https://www.instagram.com/sanya.math?igshid=MWZjMTM2ODFkZg%3D%3D',
      name: <RiInstagramFill />,
   },
]
const Socials = ({ containerStyles, iconsStyles }) => {
   return (
      <div className={`${containerStyles}`}>
         {icons.map((icon, index) => {
            return (
               <Link href={icon.path} key={index}>
                  <div className={`${iconsStyles}`}>{icon.name}</div>
               </Link>
            )
         })}
      </div>
   )
}

export default Socials
