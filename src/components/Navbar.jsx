import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { links } from '@/utils/constants'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-12 md:h-24 bg-orange-400 text-white p-4 flex items-center justify-between  uppercase lg:px-20 xl:px-40'>


     {/* Logo  */}
     <div className='text-xl lg:text-2xl font-bold '>
        <Link href='/'>Tastopia</Link>
     </div>

        {/* Desktop Links  */}
        <div className='hidden md:flex text-base lg:text-xl gap-6 '>
    {links.map(item=>(
        <Link href={item.url} key={item.id}>{item.title}</Link>
    ))}
       </div>


     {/* Menu  */}
     <div className='md:hidden'><Menu/></div>

      {/* Left Links  */}
    
    <div className='hidden md:flex items-center gap-4 justify-end'>
        <div className='text-white text-xl bg-orange-300 flex gap-2 p-1 rounded-md'>
            <Image src={'/phone.png'} width={20} height={20} alt='' />
            <span>930 421 675</span>
        </div>
        <Link href={'/cart'}>
       cart
        </Link>
    </div>
    
    
    </div>

    
  )
}

export default Navbar
