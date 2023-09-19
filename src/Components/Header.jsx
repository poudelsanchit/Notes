import React from 'react'
import Switch from './Switch'
import SearchBox from './SearchBox'

const Header = () => {
 
  return (
    <>
    <div className='flex flex-col p-3 top-0 sticky dark:bg-primary bg-[#f2f5fa] shadow-sm'>
    <div className='font-Montserrat font-medium text-3xl flex justify-between ' >
        <div className='font-Montserrat font-semibold text-[#000000] dark:text-[#f2f5fa]'>Notes</div>
        <Switch/>
    </div>
    <SearchBox/>
    </div>
    
    </>
   
  )
}

export default Header