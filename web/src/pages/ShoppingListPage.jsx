import { useEffect, useState } from "react";
import ShoppingList from "@/components/shopping-list/ShoppingList";
import PageLayout from "@/components/layout/PageLayout";
import ShoppingItemForm from "@/components/shopping-list/shopping-list-forms/ShoppingItemForm";
import shoppingListService from '@/services/shopping-list';
import { format } from "date-fns";


function ShoppingListPage() {
  const [shoppingList, setShoppingList] = useState([])
  const [lastUpdate, setLastUpdate] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    shoppingListService.list()
      .then((shoppingListResponse) => {
        setShoppingList(shoppingListResponse)
        setLastUpdate(format(new Date(shoppingListResponse?.[0]?.updatedAt), 'dd/MM/yyyy'))
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="circle animate-loader"></span>
        <span className="circle animate-loader animation-delay-200"></span>
        <span className="circle animate-loader animation-delay-400"></span>
      </div>
    )
  }

  const handleNewProduct = (createdProduct) => {
    setShoppingList((prev) => [createdProduct, ...prev])
  }

  function handleProductDelete(id) {
    shoppingListService.deleteProduct(id)
      .then(() => setShoppingList((prev) => prev.filter((product) => product.id !== id)))
  }

  return (
    <PageLayout title="Shopping list">

      <div className="h-full grid grid-rows-[.8fr,.4fr]">
        <ShoppingList shoppingList={shoppingList} date={lastUpdate} handleProductDelete={handleProductDelete} />

        <div className="px-20 h-48 py-1">
          <div className="bg-primaryWhite max-h-[180px] overflow-hidden rounded-[2rem] py-1 px-8">
            <ShoppingItemForm onNewProduct={handleNewProduct} />
          </div>
        </div>
      </div>

    </PageLayout>
  );
}

export default ShoppingListPage