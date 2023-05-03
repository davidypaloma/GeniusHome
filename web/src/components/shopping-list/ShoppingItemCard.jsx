import React from 'react'

function ShoppingItemCard({ name, location, quantity, type, img }) {
  return (
    <div className="bg-darkGreen w-64 h-44 rounded-[2rem] p-4 flex items-center">
      <div className="border-2 border-yellow-500 h-full w-1/2 rounded-xl">
        <img src={img} alt={type} />
      </div>
      <div className="h-full w-1/2 rounded-xl flex flex-col justify-end pl-1">
        <p>{name}</p>
        <p>({location})</p>
        <p>{quantity}</p>
        <button className="p-1 w-5/6 bg-lightRed rounded-lg mx-auto mt-4 flex justify-center items-center">
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