import React from 'react'
import Switch from './Switch'

const Header = () => {
  return (
    <div className='font-Montserrat font-medium text-3xl p-3 flex justify-between' >
        <div className='font-Chakra'>Notes</div>
        <Switch/>
    </div>
  )
}

export default Header