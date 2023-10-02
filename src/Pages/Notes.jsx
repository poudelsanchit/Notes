import React, { useState } from 'react'
import Header from '../Components/Header'
import { nanoid  } from 'nanoid';
import NoteItem from '../Components/NoteItem';
import FloatingActionButton from '../Components/FloatingActionButton';
import { useEffect } from 'react';
import BottomNavBar from '../Components/BottomNavBar';
const Notes = ({notes,handleDeleteNote,handleSearch}) => {
  
  var noteslen=Object.entries(notes).length;

   return (
    <>
    <Header handleSearch={handleSearch}/>


     <div className='flex justify-center min-h-screen w-screen'>
      <div className='lg:w-11/12 md:w-4/5 w-full  text-text-primary bg-[#ffffff] dark:bg-primary'>
  
              <div className='grid grid-cols-2 mr-3'>
              { noteslen!==0?
              null:<NoteItem id={'Vn2XTNmVAzHlXRHMSq5q5'} color={'#3358ff'}  note_title={'Let\'s Create your first note!!'} note_text={'Click on the plus button on the right bottom corner 🙂'}  handleDeleteNote={handleDeleteNote} />
              }  
              {
                
               notes&&notes.map((notes)=>(
                
                <NoteItem id={notes.id}  note_text={notes.text} note_title={notes.title} note_date={notes.date} textcolor={notes.textcolor} color={notes.color} handleDeleteNote={handleDeleteNote}/>
               ))
              }
              </div>
            
              <FloatingActionButton/>

    </div>
  
    </div>
     </>
   
    
  )
}

export default Notes