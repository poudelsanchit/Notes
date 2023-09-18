import React, { useState } from 'react'
import Header from '../Components/Header'
import { nanoid  } from 'nanoid';
import NoteItem from '../Components/NoteItem';
import FloatingActionButton from '../Components/FloatingActionButton';
const Notes = ({notes}) => {
  
  return (
    <div className='text-text-primary'>
              <Header/> 
              <div className='grid grid-cols-2 mr-3'>
              {
               notes.map((notes)=>(
                <NoteItem note_text={notes.text} note_title={notes.title} note_date={notes.date} color={notes.color}/>
               ))
              }
              </div>
            
              <FloatingActionButton/>

    </div>
  )
}

export default Notes