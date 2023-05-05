import { useState } from 'react'
import { useForm } from 'react-hook-form'
import taskListService from '@/services/cleaning-tasks';

const users = [
  { id: 1, userName: "Mikel" },
  { id: 2, userName: "Sergio" }
]

export default function TaskListItemForm({ onNewTask }) {
  const { register, handleSubmit, reset, setError, formState: { errors }, getValues } = useForm({ mode: 'onSubmit' })
  const [serverError, setServerError] = useState()

  const onTaskListItemSubmit = (task) => {
    setServerError();
    taskListService.addTask(task)
      .then((createdTask) => {
        onNewTask(createdTask)
        reset()
      })
      .catch(error => {
        const errors = error.response?.data?.errors;
        if (errors) {
          Object.keys(errors)
            .forEach((inputName) => setError(inputName, {
              message: errors[inputName]
            }))
        } else {
          setServerError(error.message)
        }
      })

  }

  const taskItemInputClassName = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkGreen peer"

  const taskItemLabelClassName = "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-darkborder-darkGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"


  return (
    <div className="flex justify-center">

      <div className="w-8/12 py-2">

        <form onSubmit={handleSubmit(onTaskListItemSubmit)}>
          {setServerError && <div className='text-red-600'>{serverError}</div>}


          {/* NAME */}
          <div className="relative z-0 w-full mb-4 group">
            <input
              type="text"
              name="name"
              id="name"
              className={taskItemInputClassName}
              placeholder=" "
              autoComplete='off'
              {...register('name', {
                required: 'Task name is required',
                minLength: {
                  value: 3,
                  message: 'Task name need at least 3 characters'
                }
              })

              } />
            <label htmlFor="name" className={taskItemLabelClassName}>Task name</label>
          </div>

          {/* ASSIGNED USER */}
          <div className="relative z-0 w-full mb-4 group">
            <select
              id="assignedUser"
              className="bg-primaryWhite border-2 border-darkGreen text-darkBlue text-sm rounded-lg focus:ring-lightRed focus:border-lighring-lightRed block w-full p-2.5"
              {...register('assignedUser', {
              })}
            >
              {users.map((user) => (<option value={user.id}>{user.userName}</option>))}
            </select>
          </div>

          <button type="submit" className="text-white bg-lightRed hover:bg-red-400 focus:outline-none focus:ring-red-20 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Add new task</button>
        </form>

      </div>

    </div>
  )
}