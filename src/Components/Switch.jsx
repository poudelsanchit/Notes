import React, { useState } from 'react'
import classNames from 'classnames';
import { BsFillMoonStarsFill,BsSun } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';

const Switch = () => {
  //left= dark mode, right= light mode
    const [isSelected, setIsSelected]= useState(false);
  return (
    <div className={isSelected==false?'flex w-12 items-center h-7 bg-[#043449] rounded-full  transition-all  shadow-2xl cursor-pointer ':' cursor-pointerflex w-12  items-center h-7  rounded-full  transition-all  shadow-2xl bg-[#fbedb6]'} onClick={()=>setIsSelected(!isSelected)}>
        <p  className={isSelected==false?' cursor-pointer h-7 w-7 flex  items-center justify-center  object-fit  bg-[#25b6f4] rounded-full transition-all duration-300':' cursor-pointer h-7 w-7 flex  items-center justify-center  object-fit   rounded-full transition-all duration-300 ml-5 bg-[#f4ca25] '} >{isSelected?<ImSun className='text-[#ffffff] text-sm transition-all duration-1000'/>:<BsFillMoonStarsFill className='text-[#000000] text-xs'/>}</p>

    </div>
  )
}

export default Switch