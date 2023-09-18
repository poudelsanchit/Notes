import React from 'react'
import {BsPlus} from 'react-icons/bs'
const FloatingActionButton = () => {
  return (
    <div className='h-12 w-12 rounded-full flex items-center justify-center bg-[#3369ff] fixed right-5 bottom-10 hover:bg-[#3358ff]  cursor-pointer'>
        <BsPlus className='text-4xl'/>
    </div>
  )
}

export default FloatingActionButton