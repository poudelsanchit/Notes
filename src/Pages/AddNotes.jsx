import React, { useState } from 'react'
import {IoChevronBack,IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import {BsTrash,BsShare} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
const AddNotes = ({handleAddNote}) => {
  const colors=[
    {color:'#3369ff'},
    {color:'#ffda47'},
    {color:'#ffffff'},
    {color:'#ae3b76'},
    {color:'#0aebaf'},
    {color:'#ff7746'},
    {color:'#0e121b'},
  ]
  const[color,setColor]= useState('#3369ff');
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
        color:color
        }
      )
      navigate(-1);
    }
  return (
    <>
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
    <div className='bg-[#171c26] bottom-0 absolute h-48 p-4 rounded-t-[2rem] w-full'>
    <div className='flex justify-evenly '>
      { colors.map((notes)=>(
        <div className='w-10 h-10 rounded-full bg-[#212734] flex items-center justify-center'>     
             <div className='w-8 h-8 rounded-full p-2 cursor-pointer' style={{backgroundColor:notes.color}} onClick={()=>{setColor(notes.color)}}/>
        </div>
               ))
      }
    </div>
    <div className='px-5 py-3  tracking-tighter	cursor-pointer flex items-center gap-2 text-lg font-Roboto'>
    <BsTrash/>
    <div>
      Delete Note
    </div>
      </div>
      <div className='px-5 py-3 tracking-tighter	 cursor-pointer flex items-center gap-2 text-lg font-Roboto'>
    <BsShare/>
    <div>
      Share
    </div>
      </div>
        </div>
        </>
  )
}

export default AddNotes