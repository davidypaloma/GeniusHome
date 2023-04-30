import ShoppingItemCard from "./ShoppingItemCard"

function ShoppingList({ shoppingList }) {
  return (
    <>
      <div className="h-full py-4 px-20">
        <div className="bg-primaryWhite w-full h-full rounded-[2rem] py-4 px-8">
          <div className="w-full h-[22rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-darkBlue">
            <p className="opacity-40 italic text-end mb-4 mr-4">Last update: 19 / 04 /2023</p>
            <div className="grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10 md:grid-1 md:gap-6">
              <ShoppingItemCard shoppingList={shoppingList} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingList