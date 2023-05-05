import { useEffect, useState, useRef } from "react";
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
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const tooltipTimeoutRef = useRef(null);


  useEffect(() => {
    cleaningTaskService.list()
      .then((cleaningTasksResponse) => {
        setCleaningTasks(cleaningTasksResponse)
        if (cleaningTasksResponse.length) {
          setLastCleaningUpdate(format(new Date(cleaningTasksResponse?.[0]?.updatedAt), 'dd/MM/yyyy'))
        }
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    shoppingListService.list()
      .then((shoppingListResponse) => {
        setShoppingList(shoppingListResponse)
        if (shoppingListResponse.length) {
          setLastShoppingUpdate(format(new Date(shoppingListResponse?.[0]?.updatedAt), 'dd/MM/yyyy'))
        }
      })
      .catch(console.error)
  }, [])

  const handleTooltipDisplay = (isShowing) => {
    if (isShowing) {
      tooltipTimeoutRef.current = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    } else {
      clearTimeout(tooltipTimeoutRef.current);
    }
    setShowTooltip(isShowing);
  };

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

  function Tooltip({ x, y, children }) {
    return (
      <div
        className="absolute p-2 bg-primaryWhite rounded-lg shadow-md border-[1.5px] border-darkGreen"
        style={{ top: y + 10, left: x + 10 }}
      >
        {children}
      </div>
    );
  }

  const handleTitleMouseEnter = (e) => {
    handleTooltipDisplay(true);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleTitleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleTitleMouseLeave = () => {
    handleTooltipDisplay(false);
  };

  return (
    <>
      <PageLayout title="Home">

        <div className="grid grid-rows-[repeat(3,1fr)] h-[620px]">

          <section className="h-56">
            <LargeWidget title="Shopping list" date={lastShoppingUpdate}>
              {showTooltip && (
                <Tooltip x={tooltipPosition.x} y={tooltipPosition.y}>
                  <p className="italic font-extralight text-darkGreen">Haz click sobre un elemento para eliminarlo</p>
                </Tooltip>
              )}
              <div className="grid grid-cols-3 h-36 max-h-36 overflow-y-scroll scrollbar-thin scrollbar-thumb-darkGreen" onMouseEnter={handleTitleMouseEnter} onMouseMove={handleTitleMouseMove} onMouseLeave={handleTitleMouseLeave}>
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
          </section>

          <section className="h-56 grid items-center">
            <LargeWidget title="Tasks List" date={lastCleaningUpdate}>
              <div className="h-36 max-h-36 overflow-y-scroll scrollbar-thin scrollbar-thumb-darkGreen" onMouseEnter={handleTitleMouseEnter} onMouseMove={handleTitleMouseMove} onMouseLeave={handleTitleMouseLeave}>
                {cleaningTasks.map((cleaningTask) => (
                  <div key={cleaningTask.id} onClick={() => handleTaskDelete(cleaningTask.id)}>
                    <div className="cursor-default flex mt-2">
                      <img
                        src={pen}
                        alt="Pen icon"
                        className="w-4 h-auto rounded-full mr-2"
                      />
                      <p>{cleaningTask.name} | <span className="italic opacity-50"> {cleaningTask.assignedUser.userName}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </LargeWidget>
          </section>

          <section className="px-20 grid grid-cols-2 gap-40 items-center">
            <SmallWidget title="Weather">
              <Weather />
            </SmallWidget>

            <SmallWidget title="Calendar">
              <div className="flex flex-col items-center mt-4">
                <div className="text-6xl text-darkBlue ">{showDay()}</div>
                <p>{showMonth()}</p>
              </div>
            </SmallWidget>

          </section>

        </div>

      </PageLayout >
    </>
  );
}

export default HomePage;