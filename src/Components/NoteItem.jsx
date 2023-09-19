import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
const NoteItem = ({id,note_title,note_text,note_date,color,handleDeleteNote}) => {
  return (

    <div className={`h-48 w-11/12 rounded-lg p-2 m-4 font-Roboto font-medium flex  flex-col justify-between tracking-tighter	`} style={{backgroundColor:color}}>
      <div className='overflow-auto'>  
        <div className=' border-b-[1px] text-[#000000] font-semibold text-base'>
        
        {note_title}

        </div>
        <div className='text-[#000000] text-sm '> 
            {note_text}
        </div>
        </div>
      
        
        <div className='text-xs text-[#000000] flex items-end justify-between font-light'>
          <div>{note_date}</div>
       < AiOutlineDelete className='text-xl cursor-pointer' onClick={()=>handleDeleteNote(id)}/>
        </div>
    </div>
  )
}

export default NoteItem