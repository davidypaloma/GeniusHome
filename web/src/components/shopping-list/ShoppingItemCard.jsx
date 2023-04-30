import React from 'react'

function ShoppingItemCard() {
  return (
    <div className="bg-darkGreen w-64 h-44 rounded-[2rem] p-4 flex items-center">
      <div className="border-2 border-yellow-500 h-full w-1/2 rounded-xl"></div>
      <div className="h-full w-1/2 rounded-xl flex flex-col justify-end pl-1">
        <p>Naranjas</p>
        <p>(Mercadona)</p>
        <p>2Kg</p>
        <button className="p-1 w-5/6  bg-lightRed rounded-lg mx-auto mt-4">Delete</button>
      </div>
    </div>
  )
}

export default ShoppingItemCard