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
          <div className="h-full w-1/4 ml-20 flex items-center">
            <h1 className="text-darkGreen font-bold text-sizeLg2">Shopping List</h1>
          </div>
          <div className="h-full w-1/4 grid grid-cols-2 pl-10">
            <div className="text-darkGreen flex flex-col justify-center text-end">
              <h2 className="font-semibold text-sizeMd2">Paloma Gladiné</h2>
              <h4 className="text-sizeMd1">Alias: vikie</h4>
            </div>
            <div className="flex items-center px-6">
              <div className="bg-darkGreen h-20 w-20 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[3fr,1fr]">
          <div className="grid grid-rows-[2fr,1fr]">
            <div className="py-4 px-20">

              <div className="bg-primaryWhite w-full h-full rounded-[2rem] py-4 px-8">
                  <div className="w-full h-[28rem] overflow-y-scroll scrollbar-thin  scrollbar-thumb-darkBlue">
                    <ShoppingList />
                </div>
              </div>

            </div>
            <div className="py-4 px-20">

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