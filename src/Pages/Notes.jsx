import React, { useState } from 'react'
import Header from '../Components/Header'
import { nanoid  } from 'nanoid';
import NoteItem from '../Components/NoteItem';
const Notes = () => {
    const [notes, setNotes] = useState([
		{
			id: nanoid(),
            title:'First Note',
			text: 'This is my first note!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam eum laudantium ratione quod eos, fugit earum itaque quisquam ex id dolores maiores dignissimos sapiente impedit beatae, necessitatibus corrupti! Aut!',
			date: '15/04/2021',
		},
        
		{
			id: nanoid(),
            title:'Second Note',
			text: 'This is my second note!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam eum laudantium ratione quod eos, fugit earum itaque quisquam ex id dolores maiores dignissimos sapiente impedit beatae, necessitatibus corrupti! Aut!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
            title:'Third Note',
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
            title:'Fourth Note',
			text: 'This is my Fourth note!',
			date: '30/04/2021',
		},{
			id: nanoid(),
            title:'Fifth Note',
			text: 'This is my fifth note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
            title:'Sixth Note',
			text: 'This is my sixth note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
            title:'Seventh Note',
			text: 'This is my seventh note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
            title:'Eighth Note',
			text: 'This is my eighth note!',
			date: '30/04/2021',
		},
	]);
  return (
    <div className='text-text-primary'>
              <Header/> 
              <div className='grid grid-cols-2 mr-3'>
              {
               notes.map((notes)=>(
                <NoteItem note_text={notes.text} note_title={notes.title} note_date={notes.date}/>
               ))
              }
              </div>
            

    </div>
  )
}

export default Notes