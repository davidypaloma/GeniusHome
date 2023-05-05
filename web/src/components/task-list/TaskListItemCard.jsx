import React, { useState } from 'react'
import { imageAvatar } from '@/utils/constants'

function TaskListItemItemCard({ name, assignedUser }) {

  const [isTaskDone, setIsTaskDone] = useState(false)

  const handleTaskDone = () => {
    setIsTaskDone(!isTaskDone)
  }

  return (
    <div className='flex'>
      <img
        src="https://cdn-icons-png.flaticon.com/512/10347/10347917.png"
        alt=""
        className='h-8 aspect-square'
      />
      <p
        className={`text-white font-sans text-sizeMd2 px-4 cursor-pointer ${isTaskDone ? 'line-through' : ''}`}
        onClick={handleTaskDone}>
        {name} | <span className="italic opacity-50"> {assignedUser.userName}</span>
      </p>
      <img src={imageAvatar[assignedUser.image]} alt={assignedUser.image} className='h-8 w-8 rounded-full' />
    </div>

  )
}

export default TaskListItemItemCard