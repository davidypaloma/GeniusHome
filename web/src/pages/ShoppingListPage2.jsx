import { useEffect, useState } from "react";
import ShoppingList from "@/components/shopping-list/ShoppingList";
import PageLayout from "@/components/layout/PageLayout";
import ShoppingItemForm from "@/components/shopping-list/ShoppingItemForm";
import shoppingListService from '@/services/shopping-list'


function ShoppingListPage2() {
  const [shoppingList, setShoppingList] = useState([])

  useEffect(() => {
    shoppingListService.list()
      .then((shoppingListResponse) => {
        console.log(shoppingListResponse);
        setShoppingList(shoppingListResponse)
        setLastUpdate(format(new Date(cleaningTasksResponse[0].updatedAt), 'dd/MM/yyyy'))
      })
      .catch(console.error)
  }, [])

  return (
    <PageLayout title="Shopping list">

      <div className="h-full grid grid-rows-[.8fr,.4fr]">
        <ShoppingList shoppingList={shoppingList} />

        <div className="px-20 h-48 py-1">
          <div className="bg-primaryWhite max-h-[180px] overflow-hidden rounded-[2rem] py-1 px-8">
            <ShoppingItemForm />
          </div>
        </div>
      </div>

    </PageLayout>
  );
}

export default ShoppingListPage2