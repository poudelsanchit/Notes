import React, { useEffect, useState } from 'react'
import {MdDone} from 'react-icons/md'
const CheckBox = ({handleTasks}) => {
    const [tempTask,setTempTask]= useState('');
    const [lists,setLists]=useState(
    [   
        {
            id:1,
            text:'Code 3 hrs',
            condition: false
        },
        
    ]
    )
    const tiggeredCheckbox=(id)=>{
        lists[id].condition= !lists[id].condition;
        var editedList=[...lists]
        setLists(editedList)
    }
    const handleLists=(id)=>{
       var len=lists.length;
       for(var i=0;i<len;i++)
       {
        if(id== lists[i].id)
        {
            tiggeredCheckbox(i);
        }
    }
}
useEffect(()=>{
handleTasks(lists);
},[])
   
    
 return (
   <>

         <div className='text-sm font-medium l:text-lg text-text-primary flex gap-3 flex-col'>
        {lists.map(({id,condition,text})=> (
         <>
         <div className='flex  gap-3'>
         <div className={condition? `flex flex-col gap-2 items-center justify-center h-5 w-5 rounded-sm bg-[#2056c8] transition-all`: ` h-5 w-5 rounded-sm bg-[#fdfdff] transition-all  `} onClick={()=>handleLists(id)}> 
          {condition? <MdDone />: null}  </div>
          <input type="text" name="" id="" value={tempTask}  className={!condition? 'w-full focus:outline-none text-text-primary bg-primary ': `w-full focus:outline-none text-[#a2a7b5] bg-primary line-through`} onChange={(e)=>setTempTask(e.target.value)}/>
         </div>
        
         
         </>
        ))}
      
    </div>
   </>
  )
}

export default CheckBox