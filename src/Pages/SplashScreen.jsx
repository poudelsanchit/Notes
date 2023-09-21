import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/notes.svg'
    const SplashScreen = () => {
        const navigateToHome=()=>{
        navigate(`/home`)
    }
    useEffect(()=>{
            setTimeout(
                ()=>{
                    navigate(`/home`)

                },500
            )
    },[])
    const navigate= useNavigate();
    return (
         <div className='flex flex-col h-screen w-screen justify-center items-center font-Chakra text-2xl dark:text-text-primary' >
            <img src={Logo} alt="" className='h-24' />
            <div className='text-xl font-semibold'>NoteIos</div>
        </div>
  )
}

export default SplashScreen