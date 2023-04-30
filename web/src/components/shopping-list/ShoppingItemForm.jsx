// import React from 'react'

export default function ShoppingItemForm() {
  return (
    <div className="flex justify-center">

      <div className="w-8/12 py-2 px-2">

        <form>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-4 group">
              <input type="text" name="floating_productName" id="floating_productName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkGreen peer" placeholder=" " required />
              <label htmlFor="floating_productName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-darkborder-darkGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product name</label>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <select id="productGroup" class="bg-primaryWhite border-2 border-darkGreen text-darkBlue text-sm rounded-lg focus:ring-lightRed focus:border-lighring-lightRed block w-full p-2.5">
                <option>Meat</option>
                <option>Fish</option>
                <option>Fruit</option>
                <option>Vegetables</option>
                <option>Home</option>
              </select>

            </div>
          </div>


          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-4 group">
              <input type="text" name="floating_supermarket" id="floating_supermarket" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkGreen peer" placeholder=" " required />
              <label htmlFor="floating_supermarket" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-darkborder-darkGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Supermarket</label>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <input type="text" name="floating_quantity" id="floating_quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkGreen peer" placeholder=" " required />
              <label htmlFor="floating_quantity" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-darkborder-darkGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
            </div>
          </div>

          <button type="submit" className="text-white bg-lightRed hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-20 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
        </form>

      </div>

      <div className="w-4/12 flex justify-center pt-2">
        <div className="max-h-40 w-3/4 overflow-hidden rounded-xl">
          <img
            src="https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800/public/2022-02/tipi%20di%20arance%20-%20Finedininglovers.jpg.webp?itok=znHNyFSY"
            alt=""
            className="object-cover h-40 w-80 hover:scale-125 transition-all ease-in-out duration-500"
          />
        </div>
      </div>

    </div>
  )
}