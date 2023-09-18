import React, { useState } from 'react'
import {IoChevronBack,IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
const AddNotes = ({handleAddNote}) => {
    const navigate = useNavigate();
    const[title,setTitle]= useState('');
    const[note,setNote]= useState('');
    const[datetime, setDateTime]= useState(new Date());
    const notelength= note.length;
    const saveData=()=>{
        handleAddNote(
        {
        id: nanoid(),
        title:title,
        text:note,
        date: datetime.getDate(),
        color:'#171c26'
        }
      )
      navigate(-1);
    }
  return (
    <div className='p-3 flex flex-col'>
        <div className='flex justify-between text-2xl'>
            <IoChevronBack onClick={()=>navigate(-1)}/>
          <IoCheckmarkDoneCircleOutline className='text-3xl' onClick={saveData}/>
        </div>
        <div className='mt-5 font-Roboto font-bold text-2xl'>
            <div>
                <input type="text" placeholder='title...' className='focus:outline-none bg-primary' value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className='text-xs text-[#a2a7b5] font-light border-b-[1px] pb-2'>{   `${datetime.toLocaleString('default', { month: 'long' })},${datetime.toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: true,})} | ${notelength} characters`}</div>
           
            <div className='flex text-3xl bg-primary rounded-md items-center mt-4'>
                            <textarea onChange={(event) => { setNote(event.target.value) }} value={note} type="text" name="" id="" className='bg-primary w-full focus:outline-none rounded-md text-sm font-medium l:text-lg h-96 ' placeholder='your note.....'  />

                        </div>
        </div>
    </div>
  )
}

export default AddNotes