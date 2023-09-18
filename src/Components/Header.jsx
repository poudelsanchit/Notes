import React from 'react'
import Switch from './Switch'
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <>
    <div className='flex flex-col p-3 top-0 sticky bg-primary shadow-sm'>
    <div className='font-Montserrat font-medium text-3xl flex justify-between ' >
        <div className='font-Montserrat'>Notes</div>
        <Switch/>
    </div>
    <SearchBox/>
    </div>
    
    </>
   
  )
}

export default Header