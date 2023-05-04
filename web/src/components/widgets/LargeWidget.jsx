import React from 'react'

function LargeWidget({ title, date, children }) {
  return (
    <>
      <div className="px-20">
        <div className="bg-primaryWhite rounded-[2rem] py-4 px-8">
          <div className="flex justify-between">
            <p className="text-sizeMd2 font-bold text-darkGreen">{title}</p>
            <p className="text-darkBlue text-opacity-50 italic">Last update: {date}</p>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default LargeWidget