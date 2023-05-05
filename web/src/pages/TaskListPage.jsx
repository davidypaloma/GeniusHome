import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import TaskList from "@/components/task-list/TaskList";
import taskListService from '@/services/cleaning-tasks';
import { format } from "date-fns";
import TaskListItemForm from "../components/task-list/task-list-forms/TaskListItemForm";


function TaskListPage() {
  const [taskList, setTaskList] = useState([])
  const [lastUpdate, setLastUpdate] = useState("")

  useEffect(() => {
    taskListService.list()
      .then((taskListResponse) => {
        setTaskList(taskListResponse)
        setLastUpdate(format(new Date(taskListResponse?.[0]?.updatedAt), 'dd/MM/yyyy'))
      })
      .catch(console.error)
  }, [])

  const handleNewTask = (createdTask) => {
    setTaskList((prev) => [createdTask, ...prev])
  }

  return (
    <div>
      <PageLayout title="Task list">

        <div className="h-full grid grid-rows-[.8fr,.4fr]">
          <TaskList taskList={taskList} date={lastUpdate} />


          <div className="px-20 h-48 py-1">
            <div className="bg-primaryWhite max-h-[180px] overflow-hidden rounded-[2rem] py-1 px-8">
              <TaskListItemForm onNewTask={handleNewTask} />
            </div>
          </div>
        </div>

      </PageLayout>
    </div>
  )
}

export default TaskListPage