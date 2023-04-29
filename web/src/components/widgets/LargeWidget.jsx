import React from 'react'

function LargeWidget({ title, date, children }) {
  return (
    <>
      <div className="py-4 px-20">
        <div className="bg-primaryWhite h-full rounded-[2rem] py-4 px-8">
          <div className="flex justify-between">
            <p>{title}</p>
            <p>Last update: {date}</p>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default LargeWidget