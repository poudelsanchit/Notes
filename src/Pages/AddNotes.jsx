import React from 'react'
import {IoChevronBack,IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
const AddNotes = () => {
  return (
    <div className='p-3 flex flex-col'>
        <div className='flex justify-between text-2xl'>
            <IoChevronBack/>
          <IoCheckmarkDoneCircleOutline/>
        </div>
        <div className='mt-5 font-Roboto font-bold text-2xl'>
            <div>Design Principles</div>
            <div className='text-xs text-[#a2a7b5] font-light'>Sun,10:24 | 4096 characters</div>
            <div className='text-sm pt-3 font-normal text-[#e6dbdb]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit doloribus, quo quaerat quisquam tempore inventore molestiae modi reiciendis error laudantium ipsa praesentium cupiditate voluptatum, facere eius atque et alias.</div>
        </div>
    </div>
  )
}

export default AddNotes