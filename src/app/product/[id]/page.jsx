"use client"
import Productcompo from '@/components/Productcompo'
import { items } from '@/utils/constants'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
// you will get the id form url as a string conver it to int 
  const{id} = useParams()

    console.log(id)
   
  return (
    <div>
  {items.map((item) => {
        if (item.id ==id) {
          return( 
          <div key={item.id} className='shadow-sm hover:shadow-lg p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] flex flex-col justify-around text-red-500 md:flex-row gap-4 md:gap-8 items-center '>
            
          {item.src &&  <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={item.src}
            alt=""
            className="object-contain"
            fill
          />
        </div>}

          {/* TEXT CONTAINER */}
      <div className="h-1/2 w-full flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8 items-center ">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{item.title}</h1>
        <p >{item.desc}</p>
        {/* <Price price={item.price} id={item.id} options={item.options}/> */}
      </div>
            
             </div>
             
             
             
             
             )
        } else {
          return null;
        }
      })}
  </div>
  )
}

export default page
