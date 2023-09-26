import React, { useEffect, useState } from 'react'
import {IoChevronBack,IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import {BsTrash,BsShare} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
 import Save from '../assets/save.svg'
 import SaveLight from '../assets/saveLight.svg'
 import SaveDark from '../assets/saveDark.svg'
import classNames from 'classnames'


const AddNotes = ({setNotes,data}) => {
  const [isMobile, setIsMobile] = useState(false);
  const checkIsMobile = () => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  };
  const handleInputFocus = () => {
    console.log('first')
    if (isMobile) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };
    // Add an event listener to detect when the mobile keyboard is closed
    useEffect(() => {
      const handleKeyboardClosed = () => {
        // Scroll the page back to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  
      window.addEventListener('resize', handleKeyboardClosed);
  
      return () => {
        window.removeEventListener('resize', handleKeyboardClosed);
      };
    }, []);
  
  
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
    const[color,setColor]= useState('#3369ff');
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
          const newNote=  {
            id: nanoid(),
            title:title,
            text:note,
            date: `${datetime.getFullYear()}/${datetime.getMonth()}/${datetime.getDate()}`,
            color:color,
            textcolor:textColor
    
            };
          setNotes(prevNotes=>[newNote,...prevNotes])
          navigate(-1);
        }     
      }
    const setWhichColor=(textscolor,notescolor,index)=>{
      setTextColor(textscolor);
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
    const [theme,setTheme]=useState('');
    useEffect(()=>{
     const indexForColor = Math.floor(Math.random()*7 )
     setColor(colors[indexForColor].color);
     colors[indexForColor].isActive=true;

     for(var i=0;i<7;i++)
     {
       if(i!==indexForColor)
       {
        
        colors[i].isActive=false;

        }
     }
    
      const localtheme=localStorage.getItem('theme');
       setTheme(localtheme);
    },[]);
   
    return (
      <>
    
      <div className='flex flex-col  h-screen w-screen items-center dark:bg-primary bg-[#ffffff] overflow-hidden' >
        <div className='md:w-3/5 w-full '>
        <div className='p-3 flex flex-col h-screen' >
         
          <div className='flex justify-between text-2xl'> 
              <IoChevronBack onClick={()=>navigate(-1)} className='cursor-pointer dark:text-[#e0e3ea] text-switch-bg '/>
             {theme==='light'?<img src={SaveLight} alt=""  className='h-6' onClick={saveData}/>:<img src={SaveDark} alt=""  className='h-6' onClick={saveData}/>

}
          </div>
         
          <div className='mt-5 font-Roboto font-bold text-2xl flex flex-col gap-2'>
          <div className='flex justify-between '>
          {/* { colors.map((notes,index)=>(
          <div className='flex flex-col items-center gap-1'>
             <div className='w-9 h-9 rounded-full dark:bg-[#212734] bg-[#e5dfdf]  flex items-center justify-center'>     
               <div className='w-7 h-7 rounded-full p-2 cursor-pointer' style={{backgroundColor:notes.color}}  onClick={()=>setWhichColor(notes.textcolor,notes.color,index)}/>
          </div>
          <div className='w-full h-1 rounded-md ' style={notes.isActive?{backgroundColor:notes.color}:null}/>
          </div>
         
                 ))
          } */}
          </div> 
            <div className='text-xs font-light text-[#FF0000]'>{errMsg}</div>
              <div>
                  <input autoFocus type="text" placeholder='title...' className='focus:outline-none text-[#000000] dark:text-[#dce1e7]  placeholder:dark:text-[#dce1e7] placeholder:text-[#000000] dark:bg-primary bg-[#ffffff]' value={title} onChange={(e)=>setTitle(e.target.value)} onFocus={handleInputFocus}  onTouchStart={checkIsMobile} />
              </div>
              <div className='text-xs text-[#000000] dark:text-[#a2a7b5] font-light border-b-[1px] pb-2'>{   `${days[datetime.getDay()]},${datetime.toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: true,})} | ${notelength} characters`}</div>
             
              <div className='flex text-3xl dark:bg-primary bg-[#ffffff] rounded-md items-center mt-4'>
                    <textarea onChange={(event) => { setNote(event.target.value) }} value={note} type="text" name="" id="myTextInput" className='bg-[#ffffff] dark:bg-primary text-[#000000] dark:text-[#dce1e7]  placeholder:dark:text-[#dce1e7] placeholder:text-[#000000] w-full focus:outline-none rounded-md text-sm font-medium l:text-lg h-96 ' placeholder='your note.....'  />
              </div>
          </div>
          
      </div>
      
        <div className={`dark:bg-[#171c26] bg-[#171c26] bottom-0 fixed h-min p-4 rounded-t-[2rem] w-full md:w-3/5 transition-transform transform ${isMobile?'ranslate-y-[-50px]':''}`} id="navbar">
     <div className='flex justify-between '>
      { colors.map((notes,index)=>(
          <div className='flex flex-col items-center gap-1'>
             <div className='w-9 h-9 rounded-full dark:bg-[#212734] bg-[#212734]  flex items-center justify-center' >     
               <div className='w-7 h-7 rounded-full p-2 cursor-pointer' style={{backgroundColor:notes.color}}  onClick={()=>setWhichColor(notes.textcolor,notes.color,index)}/>
          </div>
          <div className='w-full h-1 rounded-md ' style={notes.isActive?{backgroundColor:notes.color}:null}/>
          </div>
         
                 ))
          }
      </div> 
     
          </div>
     
          
      </div>
     
        </div>
     
          </>
    )
  }
  
  export default AddNotes