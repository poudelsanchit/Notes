import React, { useState } from 'react'
import Header from '../Components/Header'
import { nanoid  } from 'nanoid';
import NoteItem from '../Components/NoteItem';
import FloatingActionButton from '../Components/FloatingActionButton';
const Notes = ({notes,handleDeleteNote}) => {
  
  return (
    <div className='flex justify-center'>
      <div className='md:w-3/5 w-full  text-text-primary bg-[#ffffff] dark:bg-primary'>
  
              <Header/>
              <div className='grid grid-cols-2 mr-3'>
              {
               notes.map((notes)=>(
                <NoteItem id={notes.id} note_text={notes.text} note_title={notes.title} note_date={notes.date} color={notes.color} handleDeleteNote={handleDeleteNote}/>
               ))
              }
              </div>
            
              <FloatingActionButton/>

    </div>
  
    </div>
     
    
  )
}

export default Notes