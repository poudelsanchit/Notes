import React from 'react'

const NoteItem = ({note_title,note_text,note_date}) => {
  return (

    <div className='h-48 w-11/12 rounded-lg p-2 bg-[#4E33FF] m-4 font-Montserrat font-medium flex  flex-col'>
        <div>
        {note_title}

        </div>
        <div className='text-[#bccac3] text-sm overflow-auto'> 
            {note_text}
        </div>
    </div>
  )
}

export default NoteItem