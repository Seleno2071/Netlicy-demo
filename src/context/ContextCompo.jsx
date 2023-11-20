"use client"
import React, { createContext, useState } from 'react'
import { items } from '@/utils/constants';

export const ShopContext = createContext(null);

// initialize items 
const itemsInitializer = ()=>{
    let cartItems = {}
    for(let i = 1; i<items.length+1; i++){
        cartItems[i] = 0;
    }

    return cartItems 

}


const ContextCompo = ({children}) => {

    const[cartItems, setCartItems]= useState(itemsInitializer);
// ADD TO CART 
const addToCart = (id)=>{
  setCartItems(prevState=>({...prevState,[id]:prevState[id]+1}))
}
// REMOVE FROM CART 
const removeFromCart = (id)=>{
  setCartItems(prevState=>({...prevState,[id]:prevState[id]-1}))
}

 const contextValue = {
    cartItems,
    addToCart,
    removeFromCart
}

  return (
    <ShopContext.Provider value={contextValue} >
      {children}
    </ShopContext.Provider>
  )
}

export default ContextCompo
