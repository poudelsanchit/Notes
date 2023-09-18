import { Input } from 'postcss'
import React from 'react'
import Image from './obito.jpg'
import {CgMenuRight } from 'react-icons/cg'
const SearchBox = () => {
  return (
    <>
    <div className='flex  bg-[#171c26] text-3xl rounded-full  items-center  mt-6 px-3 pr-1'>
        <CgMenuRight className='text-2xl'/>
    <input  type="text" name="" id="" className=' bg-[#171c26] w-full h-12 p-2 focus:outline-none  text-sm rounded-2xl  font-Roboto' placeholder='Search your notes' />
     <div className=' h-10 w-12 rounded-3xl text-xs flex items-center justify-center object-fit '>
        <img src={Image} alt=""  className='h-10 w-10 object-cover rounded-full'/>
     </div>
     </div>
    </>
  )
}

export default SearchBox