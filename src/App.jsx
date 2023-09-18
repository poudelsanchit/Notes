import { Route, Routes } from "react-router-dom"
import FloatingActionButton from "./Components/FloatingActionButton"
import Header from "./Components/Header"
import Notes from "./Pages/Notes"
import AddNotes from "./Pages/AddNotes"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
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

  const [notes,setNotes]=useState(getLocalItems());

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
  setNotes(savedNotes);
  console.log(notes)

}, []);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
}, [notes]);

  return (
    <>
     <div className='bg-primary w-full h-screen text text-text-primary  flex justify-center'>
      <div className="w-full md:w-3/5">
      <Routes>
      <Route index element={<Notes notes={notes}/>} />
      <Route path="/addnote" element={<AddNotes  handleAddNote={addNotes}/>}/>
      </Routes>
  
      </div>
  
     </div>


    </>
  )
}

export default App
