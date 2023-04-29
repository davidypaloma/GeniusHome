// import React from 'react'

function SideChat() {
  return (
    <div className="w-full h-full bg-darkBlue px-4 py-6 flex flex-col justify-between rounded-tl-[6rem]">
      <div>
        <h2 className="text-gray-200 mb-8 text-center">Today</h2>
      </div>
      <form className="flex flex-col justify-between">
        <textarea
          placeholder="Something to say?"
          className="h-36 rounded-xl resize-none mb-4 px-4 py-4 text-primaryWhite bg-darkBlue border-2 border-primaryWhite"
        />
        <button type="submit" className="flex items-center justify-center bg-darkBlue text-primaryWhite border-2 border-primaryWhite rounded-xl py-2 px-4 w-full hover:bg-primaryWhite hover:text-darkBlue hover:font-bold">
          <span className="mr-2">Send</span>
        </button>
      </form>
    </div>
  )
}

export default SideChat