import { Route, Routes } from "react-router-dom"
import FloatingActionButton from "./Components/FloatingActionButton"
import Header from "./Components/Header"
import Notes from "./Pages/Notes"
import AddNotes from "./Pages/AddNotes"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import EditNotes from "./Pages/EditNotes"
import SplashScreen from "./Pages/SplashScreen"

// const getLocalItems=()=>{

//   const list = JSON.parse(
//     localStorage.getItem('react-notes-app-data'));
//     if(list)
//     {
//       return list;
//     }
//     else{
//       return [];
//     }
// }
function App() {
  
  
  // const addNotes=(notelist)=>{
  //   const newNotes=[...notes,notelist];
  //   setNotes(newNotes);
  // }
  const handleEditNote=(editedNotes)=>{
    console.log(editedNotes);
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
  // const [notes,setNotes]=useState(getLocalItems());

  const [notes,setNotes]=useState(JSON.parse(localStorage.getItem('react-notes-app-data'))
  ||[{color  : "#3369ff",
    date  :   "2023/8/21",
   id  :   "Vn2XTNmVAzHlXRHMSq5q5",
   text  :   "Click on the plus button on the right bottom corner 🙂",
   title  :  "Create your first note!!",
 }]
  );
 
  var noteslen=Object.entries(notes).length;

// useEffect(() => {
//   const savedNotes = JSON.parse(
//     localStorage.getItem('react-notes-app-data')
//   );
//   setNotes(savedNotes);
 
// }, []);

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
const [searchText,setSearchText]= useState('');
console.log(notes);

  return (
    <div className="w-full bg-text-primary dark:bg-primary  overflow-hidden">
       <Routes>
       <Route index element={<SplashScreen/>} />
      <Route path='/home' element={<Notes notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleDeleteNote={deleteNote} handleSearch={setSearchText}/>} />
      <Route path="/addnote" element={<AddNotes  setNotes={setNotes} />}/>
      <Route path="/editnote/:noteid" element={<EditNotes  handleEditNote={handleEditNote} data={notes}/>}/>

      </Routes>
    </div>
     
  
  


    
  )
}

export default App
