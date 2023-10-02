import React, { useCallback, useState } from 'react'
import { MdDone } from 'react-icons/md'

const TaskItem = ({ id, condition, text, handleTasks,handleKeyDown }) => {
    const [tempTask, setTempTask] = useState(text);
    const [tempCondition, setTempCondition] = useState(condition);

  
    const active = useCallback((inputElement) => {
        if (inputElement) {
          inputElement.focus();
        }
        handleTasks(id,tempCondition,tempTask)
        console.log(tempTask)
      }, []);
    return (
        <div>
            <div className='flex justify-center items-center  gap-3'>
                <div className={tempCondition ? `flex flex-col gap-2 items-center justify-center h-5 w-5  rounded-sm bg-[#2056c8] transition-all` : `h-5 w-5 rounded-sm  bg-[#a4aeba] transition-all  `} onClick={() => setTempCondition(prev => !prev)}>
                    {tempCondition ? <MdDone /> : null}  </div>
                <input ref={active} placeholder='Add your task....' type="text" name="" id="" value={tempTask} className={!tempCondition ? 'w-full focus:outline-none dark:text-text-primary text-primary dark:bg-primary   rounded-sm text-sm ' : `w-full focus:outline-none text-[#a2a7b5]  dark:bg-primary   text-sm  line-through rounded-sm`} onChange={(e) => setTempTask(e.target.value)} onKeyDown={handleKeyDown} />
            </div>
        </div>
    )
}

export default TaskItem