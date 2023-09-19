import React, { useState } from 'react'
import {IoChevronBack,IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import {BsTrash,BsShare} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { data } from 'autoprefixer'
const AddNotes = ({handleAddNote}) => {
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; 
  const [errMsg,setErrMsg]=useState('');
  const [colors,setColors]=useState([
    {color:'#3369ff',isActive:true},
    {color:'#ffda47',isActive:false},
    {color:'#ffffff',isActive:false},
    {color:'#ae3b76',isActive:false},
    {color:'#ff90f4',isActive:false},
    {color:'#73dfbb',isActive:false},
    {color:'#0e121b',isActive:false},
  ])
  const[color,setColor]= useState('#3369ff');
    const navigate = useNavigate();
    const[title,setTitle]= useState('');
    const[note,setNote]= useState('');
    const[datetime, setDateTime]= useState(new Date());
    const notelength= note.length;
    var datacolor='';
   
    const saveData=()=>{
      if(title==''&&note=='')
      {
        setErrMsg('Please fill in at least one field')
        console.log(errMsg)
      }
      else{
        handleAddNote(
          {
          id: nanoid(),
          title:title,
          text:note,
          date: `${datetime.getFullYear()}/${datetime.getMonth()}/${datetime.getDate()}`,
          color:color,
  
          }
        )
        navigate(-1);
      }     
    }
  const setWhichColor=(notescolor,index)=>{
    setColor(notescolor);
    colors[index].isActive=true;
      for(var i=0;i<10;i++)
      {
        if(i!==index)
        {
            colors[i].isActive=false;
        }
      }
  }
  
  return (
    <>
    <div className='p-3 flex flex-col'>
        <div className='flex justify-between text-2xl'>
            <IoChevronBack onClick={()=>navigate(-1)}/>
          <IoCheckmarkDoneCircleOutline className='text-3xl cursor-pointer' onClick={saveData}/>
        </div>
        <div className='mt-5 font-Roboto font-bold text-2xl'>
          <div className='text-xs font-light text-[#FF0000]'>{errMsg}</div>
            <div>
                <input type="text" placeholder='title...' className='focus:outline-none bg-primary' value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className='text-xs text-[#a2a7b5] font-light border-b-[1px] pb-2'>{   `${days[datetime.getDay()]},${datetime.toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: true,})} | ${notelength} characters`}</div>
           
            <div className='flex text-3xl bg-primary rounded-md items-center mt-4'>
                  <textarea onChange={(event) => { setNote(event.target.value) }} value={note} type="text" name="" id="" className='bg-primary w-full focus:outline-none rounded-md text-sm font-medium l:text-lg h-96 ' placeholder='your note.....'  />
            </div>
        </div>
        
    </div>
    <div className='bg-[#171c26] bottom-0 absolute h-48 p-4 rounded-t-[2rem] w-full md:w-3/5'>
    <div className='flex justify-evenly '>
      { colors.map((notes,index)=>(
        <div className='flex flex-col items-center gap-1'>
           <div className='w-10 h-10 rounded-full bg-[#212734] flex items-center justify-center'>     
             <div className='w-8 h-8 rounded-full p-2 cursor-pointer' style={{backgroundColor:notes.color}}  onClick={()=>setWhichColor(notes.color,index)}/>
        </div>
        <div className='w-full h-1 rounded-md ' style={notes.isActive?{backgroundColor:notes.color}:null}/>
        </div>
       
               ))
      }
    </div>
    <div className='px-5 py-3  tracking-tighter	cursor-pointer flex items-center gap-2 text-lg font-Roboto'>
    <BsTrash/>
    <div>
      Delete Note
    </div>
      </div>
      <div className='px-5 py-3 tracking-tighter	 cursor-pointer flex items-center gap-2 text-lg font-Roboto'>
    <BsShare/>
    <div>
      Share
    </div>
      </div>
        </div>
        </>
  )
}

export default AddNotes