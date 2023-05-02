import { useEffect, useState } from "react";
import ShoppingList from "@/components/shopping-list/ShoppingList";
import PageLayout from "@/components/layout/PageLayout";
import ShoppingItemForm from "@/components/shopping-list/ShoppingItemForm";
import shoppingListService from '@/services/shopping-list';
import { format } from "date-fns";


function ShoppingListPage() {
  const [shoppingList, setShoppingList] = useState([])
  const [lastUpdate, setLastUpdate] = useState("")

  useEffect(() => {
    shoppingListService.list()
      .then((shoppingListResponse) => {
        console.log(shoppingListResponse);
        setShoppingList(shoppingListResponse)
        // TODO: fix nullpointer error
        setLastUpdate(format(new Date(shoppingListResponse?.[0]?.updatedAt), 'dd/MM/yyyy'))
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

export default ShoppingListPage