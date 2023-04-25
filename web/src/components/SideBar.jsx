// import React from 'react'

function SideBar() {
  return (
    <div className="w-96 h-screen flex flex-col border-r-2 border-darkGreen">
      <div className="w-full h-1/6 flex justify-center items-center">
        <img
          src="../../public/assets/geniusHomeLogo.png"
          alt="Genius Home Logo"
          className="w-1/2"
        />
      </div>

      <nav className="w-full h-3/6 flex flex-col pl-24">
        <div className="flex flex-col">
          <span className="text-darkBlue font-bold hover:cursor-default">Organisation</span>
          <a href="#" className="text-darkGreen font-bold w-2/3 mt-4 py-2 pl-4 rounded-lg hover:bg-lightRed hover:text-primaryWhite">Shopping list</a>
          <a href="#" className="text-darkGreen font-bold w-2/3 mt-4 py-2 pl-4 rounded-lg hover:bg-lightRed hover:text-primaryWhite">Cleaning tasks</a>
          <span className="text-darkGreen font-bold w-2/3 mt-4 py-2 pl-4 text-opacity-25 hover:cursor-default">Calendar</span>
          <span className="text-darkGreen font-bold w-2/3 mt-4 py-2 pl-4 text-opacity-25 hover:cursor-default">Contacts</span>
        </div>

        <div className="flex flex-col">
          <span className="text-darkBlue font-bold pt-12 hover:cursor-default">Account management</span>
          <a href="#" className="text-darkGreen font-bold w-2/3 mt-4 py-2 pl-4 rounded-lg hover:bg-lightRed hover:text-primaryWhite">Profile</a>
          <a href="#" className="text-darkGreen font-bold w-2/3 mt-4 py-2 pl-4 rounded-lg hover:bg-lightRed hover:text-primaryWhite">Log out</a>
        </div>
      </nav>

      <div className="w-full h-2/6">
        <img
          src="../../public/assets/geniusHomePic2.png"
          alt="Home picture"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default SideBar