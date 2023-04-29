import ShoppingList from "../components/shopping-list/ShoppingList";
import PageLayout from "../components/layout/PageLayout";
import ShoppingItemForm from "../components/shopping-list/ShoppingItemForm";

function ShoppingListPage2() {
  return (
    <PageLayout title="Shopping list">

      <div className="h-full grid grid-rows-[.8fr,.4fr]">
        <ShoppingList />

        <div className="py-4 px-20 h-48">
          <div className="bg-primaryWhite h-full rounded-[2rem] py-4 px-8">
            <ShoppingItemForm />
          </div>
        </div>
      </div>
      
    </PageLayout>
  );
}

export default ShoppingListPage2