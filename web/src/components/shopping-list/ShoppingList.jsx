import ShoppingItemCard from "./ShoppingItemCard"
import { imageTypeMap } from "../../utils/constants"


function ShoppingList({ shoppingList, date, handleProductDelete }) {


  return (
    <>
      <div className="h-full py-4 px-20">
        <div className="bg-primaryWhite w-full h-full rounded-[2rem] py-4 px-8">
          <div className="w-full h-[22rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-darkBlue">
            <p className="opacity-40 italic text-end mb-4 mr-4">Last update: {date}</p>
            <div className="grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10 md:grid-1 md:gap-6">
              {shoppingList.map((product) => (
                <ShoppingItemCard key={product.id} name={product.name} location={product.location} id={product.id} quantity={product.quantity} type={product.type} img={imageTypeMap[product.type]} handleProductDelete={handleProductDelete} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingList