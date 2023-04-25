// import React from 'react'

import SideBar from "../components/SideBar"
import SideChat from "../components/SideChat";

function HomePage() {
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1">
        <SideChat />
      </div>
    </div>
  );
}

export default HomePage