"use client";
import { ShopContext } from "@/context/ContextCompo";
import { items } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const filteredItems = items.filter((item) => item.category !== "pastry");
// console.log(filteredItems)

const Featured = () => {
  const { cartItems, addToCart } = useContext(ShopContext);

  console.log(cartItems);
  return (
    <>
      <div className=" w-full text-center mb-10">
        <h1 className="text-red-600 text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          TRUE ITALIAN FLAVOR
        </h1>
        <p className="text-base md:text-xl w-[50vw] mx-auto">
          Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
          primis libero tempus, blandit a cursus varius magna
        </p>
      </div>

      {/* main wrapper  */}
      <div className="px-5 w-screen overflow-x-scroll">
        {/* HORIZONTAL WRAPPER  */}
        <div className="flex w-max gap-4">
          {/* SINGLE ITEM WRAPPER  */}

          {filteredItems.map((item) => {
            return (
              // single item wrapper
              <div
                key={item.id}
                className="card shadow-xl rounded-md p-2 border border-gray bg-white w-[90vw] flex flex-col transition-all gap-4 h-[60vh] duration-300 md:w-[50vw] xl:w-[23vw]  "
              >
                {/* img container  */}
                {item.src && (
                  <div className="h-[60%] relative w-full transition-all duration-500">
                    <Image
                      src={item.src}
                      fill
                      alt=""
                      className="object-cover rounded-md"
                    />
                  </div>
                )}

                {/* content container  */}
                <div className=" flex-1 w-full flex justify-between flex-col gap-5">
                  <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                    {item.title}
                  </h1>
                  <p>{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${item.price}</span>
                    <Link href={`/product/${item.id}`}>
                    <button
                      className="bg-red-500 text-white p-2 rounded-md"
                    >
                      Add to Cart
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* this div is for the horizon wrapper  */}
        </div>
      </div>
    </>
  );
};

export default Featured;
