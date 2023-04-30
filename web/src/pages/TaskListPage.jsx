// import React from 'react'
import PageLayout from "@/components/layout/PageLayout";

function TaskListPage() {
  return (
    <div>
      <PageLayout title="Task list">

        <div className="h-full grid grid-rows-[.8fr,.4fr]">
          {/* <ShoppingList /> */}

          <div className="px-20 h-48 py-1">
            <div className="bg-primaryWhite max-h-[180px] overflow-hidden rounded-[2rem] py-1 px-8">
              {/* <ShoppingItemForm /> */}
            </div>
          </div>
        </div>

      </PageLayout>
    </div>
  )
}

export default TaskListPage