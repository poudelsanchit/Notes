import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import { BsFillMoonStarsFill,BsSun } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';
 
const Switch = () => {
    const [theme,setTheme]= useState( 'dark');
    // const getLocalItems=()=>{

//   const list = JSON.parse(
//     localStorage.getItem('react-notes-app-data'));
//     if(list)
//     {
//       return list;
//     }
//     else{
//       return [];
//     }
// }

    const handleTheme=()=>{
      const html = document.querySelector('html');
      if(theme==='light')
      {
        setTheme('dark');
        html.classList.add('dark')

      }
      else{
        html.classList.remove('dark')

        setTheme('light')

      }
      console.log(theme);
    }
    
    
useEffect(()=>{
  localStorage.setItem('theme',JSON.stringify(theme));
},[theme])
useEffect(()=>{
    const html= document.querySelector('html');
    html.classList.add('dark')
},[])
   

  return (
    <div className={theme==='dark'?`flex w-12 items-center h-7 bg-[#043449] rounded-full  transition-all  shadow-2xl cursor-pointer `:' cursor-pointer flex w-12  items-center h-7  rounded-full  transition-all  shadow-2xl bg-[#dcd2ae]'} onClick={handleTheme} >
        <p   className={theme==='dark'?' cursor-pointer h-7 w-7 flex  items-center justify-center  object-fit  bg-[#25b6f4] rounded-full transition-all duration-300':' cursor-pointer h-7 w-7 flex  items-center justify-center  object-fit   rounded-full transition-all duration-300 ml-5 bg-[#ffdc3f] '} >
          {theme==='light'?
          <ImSun className='text-[#ffffff] text-sm transition-all duration-1000'/>
          :
          <BsFillMoonStarsFill className='text-[#000000] text-xs'/>}
          </p>
    </div>
  )
}

export default Switch