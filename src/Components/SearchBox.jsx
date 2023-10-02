import { Input } from 'postcss'
import React from 'react'
import Image from '../assets/obito.jpg'
import {CgMenuRight } from 'react-icons/cg'
import { useState } from 'react'
const SearchBox = ({handleSearch}) => {

  return (

    <>
    <div className='flex bg-[#dce1e7] dark:bg-[#171c26] text-3xl rounded-full  items-center  mt-6 px-3 pr-1'>
        <CgMenuRight className='text-2xl dark:text-[#dce1e7] text-[#171c26] '/>
    <input  type="text" name="" id="" className=' bg-[#dce1e7] dark:bg-[#171c26]  w-full h-12 p-2 focus:outline-none  text-sm rounded-2xl  font-Roboto text-[#000000] dark:text-[#dce1e7]  placeholder:dark:text-[#dce1e7] placeholder:text-[#000000] placeholder:tracking-tighter	' placeholder='Search your notes'  onChange={(e)=>handleSearch(e.target.value)}/>
     <div className=' h-10 w-12 rounded-3xl text-xs flex items-center justify-center object-fit '>
        <img src={Image} alt=""  className='h-10 w-10 object-cover rounded-full'/>
     </div>
     </div>
    </>
  )
}

export default SearchBox