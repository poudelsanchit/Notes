import { Route, Routes } from "react-router-dom"
import FloatingActionButton from "./Components/FloatingActionButton"
import Header from "./Components/Header"
import Notes from "./Pages/Notes"
import AddNotes from "./Pages/AddNotes"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import EditNotes from "./Pages/EditNotes"
const getLocalItems=()=>{
  
  const list = JSON.parse(
    localStorage.getItem('react-notes-app-data'));
    if(list)
    {
      return list;
    }
    else{
      return [];
    }
}
function App() {
  const addNotes=(notelist)=>{
    const newNotes=[...notes,notelist];
    setNotes(newNotes);
  }
  const editNotes=(editedNotes)=>{
    for (let index = 0; index < noteslen; index++) {
      if(editedNotes.id==notes[index].id)
      {
        notes[index]=editedNotes;
        const editNotes= [...notes];
        console.log(editNotes)
        setNotes(editNotes);
     }
    }
 
  }
  const [notes,setNotes]=useState(getLocalItems());
  var noteslen=Object.entries(notes).length;

 
 
useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
  setNotes(savedNotes);
}, []);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
}, [notes]);
const deleteNote=(id)=>{
const newnotes=  notes.filter((note)=>note.id!=id)
setNotes(newnotes);
}
  return (
    <>
     <div className='bg-primary w-full h-screen text text-text-primary  flex justify-center'>
      <div className="w-full md:w-3/5">
      <Routes>
      <Route index element={<Notes notes={notes} handleDeleteNote={deleteNote}/>} />
      <Route path="/addnote" element={<AddNotes  handleAddNote={addNotes} data={notes}/>}/>
      <Route path="/editnote/:noteid" element={<EditNotes  handleEditNote={editNotes} data={notes}/>}/>

      </Routes>
  
      </div>
  
     </div>


    </>
  )
}

export default App
