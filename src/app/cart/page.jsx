"use client"
import { ShopContext } from '@/context/ContextCompo'
import { items } from '@/utils/constants'
import React, { useContext } from 'react'

const page = () => {
  const{cartItems} = useContext(ShopContext)
  return (
    <div>
      {items.map((item) => {
          if (cartItems[item.id] !== 0) {
            return  <div>hello</div>
          }
        })}

    </div>
  )
}

export default page
