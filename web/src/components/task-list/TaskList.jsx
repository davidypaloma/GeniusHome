// import ShoppingItemCard from "./ShoppingItemCard"
import TaskListItemCard from "./TaskListItemCard"


function TaskList({ taskList, date }) {


  return (
    <>
      <div className="h-full py-4 px-20">
        <div className="bg-slate-800 w-full h-full rounded-[2rem] py-4 px-8">
          <div className="w-full h-[22rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-darkGreen">
            <p className="text-primaryWhite opacity-40 italic text-end mb-4 mr-4">Last update: {date}</p>
            {taskList.map((task) => (
              <TaskListItemCard key={task.id} name={task.name} id={task.id} assignedUser={task.assignedUser.userName} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskList