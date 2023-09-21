import React, { useState } from 'react'
import Switch from './Switch'
import SearchBox from './SearchBox'
import Logo from '../assets/notes.png'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate= useNavigate();
  const navigateToHome=()=>{
    navigate('/')
  }
 
  return (
    <>
    <div className='flex flex-col p-3 top-0 sticky dark:bg-primary bg-[#ffffff] shadow-sm'>
    <div className='font-Montserrat font-medium text-3xl flex justify-between ' >
        <div className='font-Montserrat font-semibold text-[#000000] dark:text-[#f2f5fa]' onClick={navigateToHome} >
          <img src={Logo} alt=""  className='w-9'/>
        </div>
        <Switch />
    </div>
    <SearchBox/>
    </div>
    
    </>
   
  )
}

export default Header