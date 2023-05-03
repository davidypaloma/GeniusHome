import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import LargeWidget from "@/components/widgets/LargeWidget";
import SmallWidget from "@/components/widgets/SmallWidget";
import cleaningTaskService from '@/services/cleaning-tasks';
import shoppingListService from '@/services/shopping-list'
import { format } from "date-fns";
import greenArrow from '@/assets/green_arrow.svg'
import pen from '@/assets/pen.svg'
import Weather from "../components/widgets/weather";

function HomePage() {
  const [cleaningTasks, setCleaningTasks] = useState([])
  const [shoppingList, setShoppingList] = useState([])
  const [lastCleaningUpdate, setLastCleaningUpdate] = useState("-")
  const [lastShoppingUpdate, setLastShoppingUpdate] = useState("-")

  useEffect(() => {
    cleaningTaskService.list()
      .then((cleaningTasksResponse) => {
        setCleaningTasks(cleaningTasksResponse)
        setLastCleaningUpdate(format(new Date(cleaningTasksResponse?.[0]?.updatedAt), 'dd/MM/yyyy'))
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    shoppingListService.list()
      .then((shoppingListResponse) => {
        setShoppingList(shoppingListResponse)
        setLastShoppingUpdate(format(new Date(shoppingListResponse?.[0]?.updatedAt), 'dd/MM/yyyy'))
      })
      .catch(console.error)
  }, [])

  function handleTaskDelete(id) {
    cleaningTaskService.deleteTask(id)
      .then(() => setCleaningTasks((prev) => prev.filter((cleaningTask) => cleaningTask.id !== id)))
  }
  function handleDeleteProduct(id) {
    shoppingListService.deleteProduct(id)
      .then(() => setShoppingList((prev) => prev.filter((product) => product.id !== id)))
  }

  function showDay() {
    return (format(new Date(), 'dd'))
  }
  function showMonth() {
    return (format(new Date(), 'MMMM'))
  }

  return (
    <>
      <PageLayout title="Home">

        <div className="grid grid-rows-[repeat(3,1fr)]">

          <LargeWidget title="Shopping list" date={lastShoppingUpdate}>
            <div className="mt-4">
              {shoppingList.map((product) => (
                <div key={product.id} onClick={() => handleDeleteProduct(product.id)}>
                  <div className="cursor-default flex mt-2">
                    <img
                      src={greenArrow}
                      alt="Arrow icon"
                      className="w-4 h-auto rounded-full mr-2"
                    />
                    {product.name}
                  </div>
                </div>
              ))}
            </div>
          </LargeWidget>

          <LargeWidget title="Cleaning tasks" date={lastCleaningUpdate}>
            <div className="mt-4">
              {cleaningTasks.map((cleaningTask) => (
                <div key={cleaningTask.id} onClick={() => handleTaskDelete(cleaningTask.id)}>
                  <div className="cursor-default flex mt-2">
                    <img
                      src={pen}
                      alt="Pen icon"
                      className="w-4 h-auto rounded-full mr-2"
                    />
                    {cleaningTask.name}
                  </div>
                </div>
              ))}
            </div>
          </LargeWidget>

          <div className="py-4 px-20 grid grid-cols-2 gap-40">
            <SmallWidget title="Weather">
              {/* children */}
              <Weather />
            </SmallWidget>

            <SmallWidget title="Calendar">
              <div className="flex flex-col items-center mt-4">
                <div className="text-9xl text-darkBlue ">{showDay()}</div>
                <p>{showMonth()}</p>
              </div>
            </SmallWidget>

          </div>

        </div>

      </PageLayout>
    </>
  );
}

export default HomePage;