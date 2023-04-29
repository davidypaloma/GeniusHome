// import React from 'react'

import ShoppingList from "../components/ShoppingList";
import SideBar from "../components/side-bar/SideBar"
import SideChat from "../components/messages/SideChat";

function ShoppingListPage() {
  return (
    <div className="grid grid-cols-[.7fr,3fr] h-screen">
      <div className="">

        <SideBar />

      </div>
      <div className="grid grid-rows-[1.2fr,8fr]">
        <div className="flex justify-between">
          <div className="h-full w-2/4 ml-20 flex items-center ">
            <h1 className="text-darkGreen font-bold text-sizeLg2">Shopping List</h1>
          </div>
          <div className="h-full w-1/4 flex mr-2">
            <div className="w-2/3 text-darkGreen flex flex-col justify-center pr-2 text-end">
              <h2 className="font-semibold text-sizeMd2">Paloma Gladiné</h2>
              <h4 className="text-sizeMd1">Alias: vikie</h4>
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <div className="bg-darkGreen h-14 w-14 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="h-full grid grid-cols-[3fr,1fr]">
          <div className="h-full grid grid-rows-[.8fr,.4fr]">
            <div className="h-full py-4 px-20">

              <div className="bg-primaryWhite w-full h-full rounded-[2rem] py-4 px-8">
                <div className="w-full h-[22rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-darkBlue">
                  <ShoppingList />
                </div>
              </div>
            </div>

            <div className="py-4 px-20 h-48">
              <div className="bg-primaryWhite h-full rounded-[2rem] py-4 px-8">
                
              </div>
            </div>

          </div>
          <div className="">

            <SideChat />

          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingListPage