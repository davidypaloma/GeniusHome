import React from 'react'
import shoppingListService from '@/services/shopping-list'

function ShoppingItemCard({ name, location, quantity, type, img, id, handleProductDelete }) {


  return (
    <div className="bg-darkGreen w-64 h-44 rounded-[2rem] p-4 flex items-center hover:-translate-y-2 transition-all ease-in-out duration-300">
      <div className="max-h-36 w-1/2 overflow-hidden rounded-xl mr-1">
        <img
          src={img}
          alt={type}
          className="object-cover h-40 w-80"
        />
      </div>
      <div className="h-full w-1/2 rounded-xl flex flex-col justify-end pl-1">
        <h2 className="text-sizeMd2 font-bold text-lightGreen">{name}</h2>
        <h4 className="text-sizeMd1 font-extralight text-opacity-70 italic text-lightGreen">({location})</h4>
        <p>🧺{quantity}</p>
        <button
          className="p-1 w-5/6 bg-lightRed rounded-lg mx-auto mt-4 flex justify-center items-center"
          onClick={() => handleProductDelete(id)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/6675/6675205.png"
            alt="Delete icon"
            className="w-5 h-5 mr-1 mb-1"
          />
          <p>Delete</p>
        </button>
      </div>
    </div>
  )
}

export default ShoppingItemCard