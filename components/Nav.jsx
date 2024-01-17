import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
   {
      path: '/',
      name: 'Головна',
   },
   {
      path: '/projects',
      name: 'Курси',
   },
   {
      path: '/contact',
      name: 'Контакти',
   },
   {
      path: '/free_lesson',
      name: 'Безкоштовний урок',
   },
]
const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
   const path = usePathname()
   return (
      <nav className={`${containerStyles}`}>
         {links.map((link, index) => {
            return (
               <Link
                  href={link.path}
                  key={index}
                  className={`capitalize ${linkStyles}`}
               >
                  {' '}
                  {link.path === path && (
                     <motion.span
                        initial={{ y: '-100%' }}
                        animate={{ y: '0' }}
                        transition={{ type: 'tween' }}
                        layout="underline"
                        className={`${underlineStyles}`}
                     />
                  )}
                  {link.name}
               </Link>
            )
         })}
      </nav>
   )
}

export default Nav
