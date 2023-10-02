import React, { useState } from 'react'
import Switch from './Switch'
import SearchBox from './SearchBox'
import Logo from '../assets/notes.png'
import { useNavigate } from 'react-router-dom'
const Header = ({handleSearch}) => {
  const navigate= useNavigate();
  const navigateToHome=()=>{
    navigate('/')
  }
 
  return (
    <>
    <div className='top-0 sticky z-50 flex items-center justify-center'>
    <div className='flex flex-col p-3 lg:w-11/12 md:w-4/5 w-full  dark:bg-primary bg-[#ffffff] shadow-sm'>
    <div className='font-Montserrat font-medium text-3xl flex justify-between ' >
        <div className='font-Montserrat font-semibold text-[#000000] dark:text-[#f2f5fa] cursor-pointer' onClick={navigateToHome} >
          <img src={Logo} alt=""  className='w-9'/>
        </div>
        <Switch />
    </div>
    <SearchBox handleSearch={handleSearch}/>
    </div>
    </div>
    
    
    </>
   
  )
}

export default Header