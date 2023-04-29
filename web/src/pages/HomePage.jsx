import { useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import LargeWidget from "../components/widgets/LargeWidget";
import SmallWidget from "../components/widgets/SmallWidget";
import cleaningTaskService from '../services/cleaning-tasks'

function HomePage() {
  const [cleaningTasks, setCleaningTasks] = useState([])

  useEffect(() => {
    cleaningTaskService.list()
      .then((cleaningTasksResponse) => {
        console.log(cleaningTasksResponse);
        setCleaningTasks(cleaningTasksResponse)
      })
      .catch(console.error)
  }, [])
  return (
    <>
      <PageLayout title="Home">

        <div className="grid grid-rows-[repeat(3,1fr)]">

          <LargeWidget title="Shopping list" date="19/04/2023">
            {/* children */}
          </LargeWidget>

          <LargeWidget title="Cleaning tasks" date="21/04/2023">
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