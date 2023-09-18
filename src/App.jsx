import { Route, Routes } from "react-router-dom"
import FloatingActionButton from "./Components/FloatingActionButton"
import Header from "./Components/Header"
import Notes from "./Pages/Notes"
import AddNotes from "./Pages/AddNotes"

function App() {

  return (
    <>
     <div className='bg-primary w-full h-screen text text-text-primary  flex justify-center'>
      <div className="w-full md:w-3/5">
      <Routes>
      <Route index element={<Notes />} />
      <Route path="/addnote" element={<AddNotes/>}/>
      </Routes>
  
      </div>
  
     </div>

     <FloatingActionButton />

    </>
  )
}

export default App
