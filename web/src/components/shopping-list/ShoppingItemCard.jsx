import React, { useState } from 'react'
import shoppingListService from '@/services/shopping-list'

function ShoppingItemCard({ name, location, quantity, type, img, id, handleProductDelete }) {

  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="bg-darkGreen w-64 h-44 rounded-[2rem] p-4 flex items-center hover:-translate-y-2 transition-all ease-in-out duration-300">
      <div className="max-h-36 w-1/2 overflow-hidden rounded-xl mr-1">
        {isLoading &&
          <div role="status">
            <svg aria-hidden="true" className="mx-auto w-8 h-8 text-darkGreen animate-spin fill-darkBlue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        }
        <img
          src={img}
          alt={type}
          className="object-cover h-40 w-80"
          onLoad={handleImageLoad}
          style={{ display: isLoading ? 'none' : 'block' }}
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