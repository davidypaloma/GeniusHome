import React, { useState } from 'react'

function TaskListItemItemCard({ name, id, assignedUser }) {

  const [isTaskDone, setIsTaskDone] = useState(false)

  const handletaskDone = () => {
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
        onClick={handletaskDone}>
        {name}
      </p>
    </div>

  )
}

export default TaskListItemItemCard