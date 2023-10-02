import React from 'react'
import {FiGithub} from 'react-icons/fi'
const BottomNavBar = () => {
  return (
    <div className='dark:bg-[#171c26] bg-[#dce1e7] shadow-2xl dark:text-[#ffffff] text-primary-light font-roboto h-14 flex items-center px-8 justify-around mt-10'>
        <a  href='https://github.com/poudelsanchit/FixtureHub' target='_blank'>
        <FiGithub className='text-lg cursor-pointer'/>

        </a>
     <div className='text-sm'>© 2023 - Sanchit Poudel</div>

    </div>
  )
}

export default BottomNavBar