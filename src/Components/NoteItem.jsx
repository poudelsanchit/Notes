import React from 'react'
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Notes from '../Pages/Notes'
const NoteItem = ({id,note_title,note_text,note_date,textcolor,color,handleDeleteNote}) => {
  const navigate= useNavigate();
  const  navigateToEdit=()=>{
    navigate(`/editnote/:${id}`)
  }
  return (
    <div className={`h-48 w-11/12 rounded-lg p-2 m-4 font-Roboto font-medium flex  flex-col justify-between tracking-tighter`} style={{backgroundColor:color}}>
      <div className='overflow-auto'>  
        <div className='flex  justify-between items-center border-b-[1px] font-semibold text-base'>
        <div className={color==='#3358ff'?' text-lg':null} style={{color:textcolor}}> 
          {note_title}
        </div>
        {id==='Vn2XTNmVAzHlXRHMSq5q5'? null:            <AiOutlineEdit className='text-xl cursor-pointer ' style={{color:textcolor}} onClick={navigateToEdit} />
}
        </div>
        <div className={color='#3358ff'?' text-sm ':null} style={{color:`${textcolor}`}}> 
            {note_text}
        </div>
        </div>
        <div className='text-xs flex items-end justify-between font-light' style={{color:`${textcolor}`}}>
        <div>{note_date}</div>
        <AiOutlineDelete className='text-xl cursor-pointer' onClick={()=>handleDeleteNote(id)}/>
        </div>
    </div>
  )
}

export default NoteItem