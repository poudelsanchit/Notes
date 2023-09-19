import React from 'react'
import {BsPlus} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const FloatingActionButton = () => {
  const navigate= useNavigate();
  const navigatetoAdd=()=>{
    navigate(`/addnote`)
  }
  return (
    <div className='h-12 w-12 rounded-full flex items-center justify-center bg-[#1f4abf] fixed right-5 bottom-10 hover:bg-[#3358ff]  cursor-pointer' onClick={navigatetoAdd}>
        <BsPlus className='text-4xl text-[#ffffff]'/>
    </div>
  )
}

export default FloatingActionButton