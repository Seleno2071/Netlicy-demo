"use client"
import { slides } from '@/utils/constants'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Slider = () => {
    const [currentSlider, setCurentSlider]= useState(0)

useEffect(()=>{
    const interval = setInterval(() => {
        setCurentSlider(prevState=>prevState==slides.length-1?0:prevState+1)
    }, 6000);
    return()=>clearInterval(interval)
},[])

  return (
    // MAIN WRAPPER 
    <div className='mb-10 bg-orange-400 flex flex-col h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] lg:flex-row'>
      {/* CONTENT WRAPPER  */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-[#f8faed] font-bold ">
        <h1 className="tracking-wide text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
      {slides[currentSlider].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>

      {/* IMG WRAPPER  */}
      <div className='relative flex-1 w-full'>
        <Image src={slides[currentSlider].src} alt='slide1' fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Slider
