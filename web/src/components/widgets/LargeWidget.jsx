import React from 'react'

function LargeWidget({ title, date, children }) {
  return (
    <>
      <div className="py-4 px-20">
        <div className="bg-primaryWhite h-full rounded-[2rem] py-4 px-8">
          <div className="flex justify-between">
            <p>{title}</p>
            <p>Last update: {date}</p>
          </div>
          <div className="flex mt-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2252/2252536.png "
              alt="Arrow icon"
              className="w-6 h-auto rounded-full bg-darkGreen mr-2"
            />
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default LargeWidget