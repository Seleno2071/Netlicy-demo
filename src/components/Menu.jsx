"use client"
import { links } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div>
     {!isOpen ?( <Image src={'/open.png'} width={20} height={20} alt='' onClick={()=>setIsOpen(prevState=>!prevState)} />)
     :( <Image src={'/close.png'} width={20} height={20} alt='' onClick={()=>setIsOpen(prevState=>!prevState)} />)}
    
    
    {isOpen && <div className='bg-orange-400 text-white absolute top-12 left-0 w-full h-[calc(100vh-3rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10
    '>
        {links.map((item)=>{
            return(
                <Link href={item.url} key={item.id} onClick={()=>setIsOpen(prevState=>!prevState)}>
                {item.title}
                </Link>
            )
        })}
    </div>}
    
    
    
    </div>
  )
}

export default Menu
