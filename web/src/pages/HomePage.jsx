import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import LargeWidget from "@/components/widgets/LargeWidget";
import SmallWidget from "@/components/widgets/SmallWidget";
import cleaningTaskService from '@/services/cleaning-tasks';
import shoppingListService from '@/services/shopping-list'
import { format } from "date-fns";

function HomePage() {
  const [cleaningTasks, setCleaningTasks] = useState([])
  const [shoppingList, setShoppingList] = useState([])
  const [lastCleaningUpdate, setLastCleaningUpdate] = useState("")
  const [lastShoppingUpdate, setLastShoppingUpdate] = useState("")

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

  return (
    <>
      <PageLayout title="Home">

        <div className="grid grid-rows-[repeat(3,1fr)]">

          <LargeWidget title="Shopping list" date={lastShoppingUpdate}>
            <div>
              {shoppingList.map((product) => (
                <div key={product.id}>{product.name}</div>
              ))}
            </div>
          </LargeWidget>

          <LargeWidget title="Cleaning tasks" date={lastCleaningUpdate}>
            <div className="mt-8 text-start">
              {cleaningTasks.map((cleaningTask) => (
                <div key={cleaningTask.id}>{cleaningTask.name}</div>
              ))}
            </div>
          </LargeWidget>

          <div className="py-4 px-20 grid grid-cols-2 gap-40">
            <SmallWidget title="Weather">
              {/* children */}
            </SmallWidget>

            <SmallWidget title="Calendar">
              {/* children */}
            </SmallWidget>

          </div>

        </div>

      </PageLayout>
    </>
  );
}

export default HomePage;