// import React from 'react'

import SideBar from "../components/side-bar/SideBar"
import SideChat from "../components/messages/SideChat";
import Header from "../components/header/header";

function HomePage() {
  return (
    <div className="grid grid-cols-[.7fr,3fr] h-screen">

      <div className="">
        <SideBar />
      </div>

      <div className="grid grid-rows-[1.2fr,8fr]">
        <Header />
        <div className="grid grid-cols-[3fr,1fr]">
          <div className="grid grid-rows-[repeat(3,1fr)]">
            <div className="py-4 px-20">

              <div className="bg-primaryWhite h-full rounded-[2rem] py-4 px-8">
                <div className="flex justify-between">
                  <p>Shopping List</p>
                  <p>Last update: 19 / 04 /2023</p>
                </div>
              </div>

            </div>
            <div className="py-4 px-20">

              <div className="bg-primaryWhite h-full rounded-[2rem] py-4 px-8">
                <div className="flex justify-between">
                  <p>Cleaning Tasks</p>
                  <p>Last update: 19 / 04 /2023</p>
                </div>
              </div>

            </div>
            <div className="py-4 px-20 grid grid-cols-2 gap-40">

              <div className="bg-primaryWhite h-full rounded-[2rem] py-4 px-8">
                <div className="flex justify-between">
                  <p>Weather</p>
                </div>
              </div>

              <div className="bg-primaryWhite h-full rounded-[2rem] py-4 px-8">
                <div className="flex justify-between">
                  <p>Calendar</p>
                </div>
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

export default HomePage;