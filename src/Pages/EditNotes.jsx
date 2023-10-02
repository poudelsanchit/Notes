import React, { useEffect, useState } from 'react'
import {IoChevronBack,IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import {BsTrash,BsShare} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { data } from 'autoprefixer'
import { useParams } from 'react-router-dom'
import { nanoid  } from 'nanoid';

 

const EditNotes = ({handleEditNote,data}) => {
    const { noteid } = useParams(); 
    const[notes,setNotes]= useState([]);
    
    
  var  noteslen = Object.keys(data).length

    var newId = noteid.substr(1, noteid.length - 1);
    
    
  
   
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; 
    const [errMsg,setErrMsg]=useState('');
    const [colors,setColors]=useState([
      {textcolor:'#ffffff',color:'#3369ff',isActive:true},
      {textcolor:'#000000',color:'#ffda47',isActive:false},
      {textcolor:'#ffffff',color:'#5d55b2',isActive:false},
      {textcolor:'#ffffff',color:'#ae3b76',isActive:false},
      {textcolor:'#000000',color:'#ff90f4',isActive:false},
      {textcolor:'#000000',color:'#73dfbb',isActive:false},
      {textcolor:'#ffffff',color:'#36454F',isActive:false},
    ])
    const[color,setColor]= useState('');
    const[textColor,setTextColor]= useState('#ffffff');

      const navigate = useNavigate();
      const[title,setTitle]= useState('');
      const[note,setNote]= useState('');
      const[datetime, setDateTime]= useState(new Date());
      const notelength= note.length;
      const saveData=()=>{
        if(title==''&&note=='')
        {
          setErrMsg('Please fill in at least one field')
          console.log(errMsg)
        }
        else{
            // for(var index=0;index<noteslen;index++)
            // {
            //         if(newId==data[index].id)
            //         {
            //             console.log('hello')
            //         }
            // }
            handleEditNote( 
            {
                
            id: newId,
            title:title,
            text:note,
            date: `${datetime.getFullYear()}/${datetime.getMonth()}/${datetime.getDate()}`,
            color:color,
            textcolor:textColor,
            }
          )
          navigate(-1);
        }     
      }
    const setWhichColor=(textcolor,notescolor,index)=>{
      setTextColor(textcolor);
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
    // for (let index = 0; index < noteslen; index++) {

    //   if(newId==data[index].id)
    //   {
    //     var noteColor= data[index].textcolor;
    //     var noteTitle= data[index].title;
    //     var notetext= data[index].text;
        
    //  }
    // }

  useEffect(()=>{
    window.scrollTo({top:0,left:0,behavior:'smooth'})
    for (let index = 0; index < noteslen; index++) {
      if(newId==data[index].id)
      {
        var noteColor= data[index].color;
        var noteTextColor= data[index].textcolor;
        var noteTitle= data[index].title;
        var notetext= data[index].text; 
     }
    }
    console.log(noteTextColor)
    setColor(noteColor);
    setTextColor(noteTextColor)
    setNote(notetext);
    setTitle(noteTitle);
    const localtheme=localStorage.getItem('theme');
    const html = document.querySelector('html');
    html.classList.add(localtheme);
    
    
  },[])  
  for(let i = 0; i < 7; i++)
  {
    if(colors[i].color==color)
    {
      colors[i].isActive=true
      
    }
    else if(colors[i].color!==color){
      colors[i].isActive=false

    }
  }
    return (
      <>
 <div className='flex flex-col w-full items-center max-h-screen dark:bg-primary bg-[#ffffff] '>    
        <div className='md:w-3/5  w-full p-0 '>
        <div className='px-3 pt-3 flex flex-col h-screen '>
          <div className='flex justify-between text-2xl'>
              <IoChevronBack onClick={()=>navigate(-1)} className='cursor-pointer dark:text-[#f2f5fa] text-switch-bg'/>
            <IoCheckmarkDoneCircleOutline className='text-3xl cursor-pointer dark:text-[#f2f5fa] text-switch-bg' onClick={saveData}/>
          </div>
          <div className='mt-5 font-Roboto font-bold text-2xl flex gap-2 flex-col'>
          <div className='flex justify-between '>
        { colors.map((notes,index )=>(
          <div className='flex flex-col items-center gap-1' key={notes.key}>
             <div className='w-10 h-10 rounded-full dark:bg-[#212734] bg-[#f2f5fa]  flex items-center justify-center'>     
               <div className='w-8 h-8 rounded-full p-2 cursor-pointer' style={{backgroundColor:notes.color}}  onClick={()=>setWhichColor(notes.textcolor,notes.color,index)}/>
          </div>
          <div className='w-full h-1 rounded-md ' style={notes.isActive?{backgroundColor:notes.color}:null}/>
          </div>
         
                 ))
        }
      </div>
            <div className='text-xs font-light text-[#FF0000]'>{errMsg}</div>
              <div>
                  <input type="text" placeholder='title...' className='focus:outline-none text-[#000000] dark:text-[#dce1e7]  placeholder:dark:text-[#dce1e7] placeholder:text-[#000000] dark:bg-primary bg-[#ffffff]' value={title} onChange={(e)=>setTitle(e.target.value)} />
              </div>
              <div className='text-xs text-[#000000] dark:text-[#a2a7b5] font-light border-b-[1px] pb-2'>{   `${days[datetime.getDay()]},${datetime.toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: true,})} | ${notelength} characters`}</div>
             
              <div className='flex text-3xl dark:bg-primary bg-[#ffffff] rounded-md items-center mt-4'>
                    <textarea autoFocus onChange={(event) => { setNote(event.target.value) }} value={note} type="text" name="" id="" className='bg-[#ffffff] dark:bg-primary text-[#000000] dark:text-[#dce1e7]  placeholder:dark:text-[#dce1e7] placeholder:text-[#000000] w-full focus:outline-none rounded-md text-sm font-medium l:text-lg h-96 ' placeholder='your note.....'  />
              </div>
          </div>
          
      </div>
      {/* <div className='dark:bg-[#171c26] bg-[#dde1fa] bottom-0 absolute h-48 px-4  pt-4 rounded-t-[2rem] w-full md:w-3/5 '>
      <div className='flex justify-evenly '>
        { colors.map((notes,index)=>(
          <div className='flex flex-col items-center gap-1'>
             <div className='w-10 h-10 rounded-full dark:bg-[#212734] bg-[#f2f5fa]  flex items-center justify-center'>     
               <div className='w-8 h-8 rounded-full p-2 cursor-pointer' style={{backgroundColor:notes.color}}  onClick={()=>setWhichColor(notes.color,index)}/>
          </div>
          <div className='w-full h-1 rounded-md ' style={notes.isActive?{backgroundColor:notes.color}:null}/>
          </div>
         
                 ))
        }
      </div>
      <div className='px-5 py-3  tracking-tighter	cursor-pointer flex items-center gap-2 text-lg font-Roboto dark:text-[#dce1e7] 
      text-[#000000]'>
      <BsTrash/>
      <div>
        Delete Note
      </div>
        </div>
        <div className='px-5 py-3 tracking-tighter	 cursor-pointer flex items-center gap-2 text-lg font-Roboto dark:text-[#dce1e7] 
      text-[#000000]'>
      <BsShare/>
      <div>
        Share
      </div>
        </div>
          </div> */}
        </div>
      </div>
     
          </>
    )
  }
  
  export default EditNotes