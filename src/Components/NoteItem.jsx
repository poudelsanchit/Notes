import React from 'react'

const NoteItem = ({note_title,note_text,note_date,color}) => {
  return (

    <div className={`h-48 w-11/12 rounded-lg p-2 m-4 font-Montserrat font-medium flex  flex-col justify-between `} style={{backgroundColor:color}}>
      <div className='overflow-auto'>  
        <div>
        {note_title}

        </div>
        <div className='text-[#bccac3] text-sm '> 
            {note_text}
        </div>
        </div>
      
        
        <div className='text-xs text-[#a2a7b5] flex items-end justify-end'>{note_date}</div>
    </div>
  )
}

export default NoteItem