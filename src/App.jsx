import { Route, Routes } from "react-router-dom"
import FloatingActionButton from "./Components/FloatingActionButton"
import Header from "./Components/Header"
import Notes from "./Pages/Notes"
import AddNotes from "./Pages/AddNotes"
import { useState } from "react"
import { nanoid } from "nanoid"
function App() {
  const [notes,setNotes]=useState([
    {
    id: nanoid(),
    title:'First Note',
    text: 'This is my first note!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam eum laudantium ratione quod eos, fugit earum itaque quisquam ex id dolores maiores dignissimos sapiente impedit beatae, necessitatibus corrupti! Aut!',
    date: '15/04/2021',
    color:'#4E33FF'
},

{
    id: nanoid(),
    title:'Second Note',
    text: 'This is my second note!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam eum laudantium ratione quod eos, fugit earum itaque quisquam ex id dolores maiores dignissimos sapiente impedit beatae, necessitatibus corrupti! Aut!',
    date: '21/04/2021',
    color:'#FFD633'

},
{
    id: nanoid(),
    title:'Third Note',
    text: 'This is my third note!',
    date: '28/04/2021',
    color:'#171c26'

}]);
const addNotes=(notelist)=>{
  const newNotes=[...notes,notelist];
  setNotes(newNotes);
  console.log(notes)

}
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

     <FloatingActionButton />

    </>
  )
}

export default App
